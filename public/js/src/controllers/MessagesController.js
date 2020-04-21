import MessagesView from '../components/MessagesView.js';
import ListMessages from '../models/ListMessages.js';

const createMessagesController = (listMessagesEl, chatAreaEl) => {
    let messagesView = new MessagesView(listMessagesEl, chatAreaEl);
    return new MessagesController(messagesView, new ListMessages());
}

function MessagesController (messagesView, listMessages) {
    let _messagesView = messagesView;
    let _listMessages = listMessages;
    return {
        newMessage: (message) => {
            listMessages.addMessage(JSON.parse(message).data);
            messagesView.update(listMessages);
        },

        newMessageOffline: (message) => {
            let wsMessage = JSON.parse(message);
            let user = wsMessage.data;
            let date = wsMessage.date;

            _listMessages.addMessage({
                'sender': 'System',
                'text': 'The user ' + user.name + ' left the chat',
                'date': date,
                'color': '#ce2700'
            });
            _messagesView.update(_listMessages);
        }
    }
}

export {
    MessagesController,
    createMessagesController
};