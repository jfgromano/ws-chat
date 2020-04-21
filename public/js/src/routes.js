import {usersController, messagesController} from './controllers/ControllersStore.js';

const routes = {
    '/user/description': (message) => usersController.userDescription(message),
    '/user/online': (message) => usersController.userOnline(message),
    '/user/offline': [
        (message) => usersController.userOffline(message),
        (message) => messagesController.newMessageOffline(message),
    ],
    '/message/new': (message) => messagesController.newMessage(message)
}

export{
    routes
}