import UsersOnlineView from '../components/UsersOnlineView.js';
import ListUsersOnline from '../models/ListUsersOnline.js';

const createUsersController = (listUsersOnlineEl) => {
    let usersOnlineView = new UsersOnlineView(listUsersOnlineEl);
    let listUsersOnline = new ListUsersOnline();
    return new UsersController(listUsersOnline, usersOnlineView);
}

function UsersController(listUsersOnline, usersOnlineView) {
    let _listUsersOnline = listUsersOnline;
    let _usersOnlineView = usersOnlineView;
    let user;

    return {
        userDescription: (message) => {
            user = JSON.parse(message).data;
            user.name = user.name + " (you)";
            _listUsersOnline.addUser(user);
            _usersOnlineView.update(_listUsersOnline);
        },
        
        userOnline: (message) => {
            _listUsersOnline.addUser(JSON.parse(message).data);
            _usersOnlineView.update(_listUsersOnline);
        },

        userOffline: (message) => {
            _listUsersOnline.removeUser(JSON.parse(message).data);
            _usersOnlineView.update(_listUsersOnline);
        }
    }
}

export {
    UsersController,
    createUsersController
}