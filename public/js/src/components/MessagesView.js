const template = (model) => {
    return model.getMessages().map(m => {
        let newDate = new Date();
        newDate.setTime(m.date * 1000);
        let dateString = newDate.toLocaleString();

        let style = "";
        if (m.color) {
            style = 'style="color: #930d0d"';
        }
        
        return `           
        <div class="list-message" ${style}>
            <div class="list-message-sender">
                <span>${m.sender}</span>
            </div>
            <div class="list-message-text">
                <span>${m.text}</span>
            </div>
            <div class="list-message-date">
                <span>${dateString}</span>
            </div>
        </div>`
    }).join('');
}
       
export default function MessagesView(element, chatArea) {
    return {
        update (model) {
            element.innerHTML = template(model);
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }
}
