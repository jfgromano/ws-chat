let usersController;
let messagesController;

const setUsersController = (controller) => usersController = controller;
const setMessagesController = (controller) => messagesController = controller
export {
    setUsersController,
    usersController,
    messagesController,
    setMessagesController
}