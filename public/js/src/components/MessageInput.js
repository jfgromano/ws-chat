const isSendMessageKey = (event) => event.keyCode === 13 && event.ctrlKey == false;
const isNewLineKey = (event) => event.keyCode === 13 && event.ctrlKey;

export default function MessageInput (element) {
    let sendMessageObservers = [];
    return {
        init: () => {
            element.addEventListener("keyup", (event) => {
                if(isNewLineKey(event)){
                    event.preventDefault();
                    element.value = element.value + "\r\n";
                    element.scrollTop = element.scrollHeight;
                } else if(isSendMessageKey(event) && element.value.trim() !== ""){
                    event.preventDefault();
                    sendMessageObservers.forEach(o => o(element.value.trim()));
                    element.value = "";
                }
            });
        },
        addOnSendMessageObserver: (callback) => sendMessageObservers.push(callback),
        clearOnSendMessageObservers: () => sendMessageObservers = []
    }
}