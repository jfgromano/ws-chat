export default function ListMessages(){
    let _messages = [];

    return {
        addMessage: (message) => _messages.push(message),
        getMessages: () => [].concat(_messages)
    }
}