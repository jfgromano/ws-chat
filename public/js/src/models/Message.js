export default function Message(sender, text, date) {
    Message.prototype.sender = sender;
    Message.prototype.text = text;
    Message.prototype.date = date;
    return {
        toString: () => { 
            return {'sender': sender,'text': text,'date': date}
        }
    }
}