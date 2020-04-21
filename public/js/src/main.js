import { createUsersController } from './controllers/UsersController.js';
import { createMessagesController } from './controllers/MessagesController.js';

import Message from './models/Message.js';

import MessageInput from './components/MessageInput.js';
import Modal from './components/Modal.js';

import ConnectionWS from './websocket/ConnectionWS.js';
import ChatCommands from './websocket/ChatCommands.js';
import Router from './websocket/WebSocketRouter.js';

import { routes } from './routes.js'

import * as ControllerStore from './controllers/ControllersStore.js';

const modal = new Modal();

//Init modal and wait user registration
modal.init((user) => {
    let modalContainer = document.getElementById('modal-container');
    let listUsersEl = document.getElementById('list-users');
    let chatAreaEl = document.getElementById('chat-area');
    let chatListEl = document.getElementById('list-messages');
    let msgInputEl = document.getElementById('text-input');

    //Init chat and hide modal
    initChat(user, listUsersEl, chatAreaEl, chatListEl, msgInputEl);
    modalContainer.remove();
})

const initChat = (username, listUsersEl, chatAreaEl, chatListEl, msgInputEl) => {
    //Create websocket objects
    let conn = new ConnectionWS('localhost', '9000');
    let commands = new ChatCommands(conn);

    //Register user after connecting to the websocket
    conn.connect(() => commands.registerUser({ name: username }));

    //Init messageInput component, create keypress events
    let messageInput = new MessageInput(msgInputEl);
    messageInput.init();

    //On send message callback,
    messageInput.addOnSendMessageObserver((text) => {
        let message = new Message(undefined, text, undefined);
        commands.newMessage(message.toString());
    });

    //Create users online controller
    ControllerStore.setUsersController(createUsersController(listUsersEl));
    
    //Create chat messages controller
    ControllerStore.setMessagesController(createMessagesController(chatListEl, chatAreaEl));

    //Websocket messages route
    let router = new Router(routes);
    conn.addOnMessageObserver((message) => {
        let route = JSON.parse(message).route;
        router.run(route, message);
    });
}