const createMessage = (route, data) => JSON.stringify({'route': route, 'data': data});
const routes =  {
    userRegister: '/user/register',
    messageSave: '/message/save'
};

export default function ChatCommands(ws){
    return {
        registerUser : (user) => ws.getConnection().send(createMessage(routes.userRegister, user)),
        newMessage : (message) => ws.getConnection().send(createMessage(routes.messageSave, message))
    }
}