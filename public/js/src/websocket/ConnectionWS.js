export default function ConnectionWS(host, port){
    let connection;
    let onMessageObservers = [];
    return {
        connect: (connectionCallback) => {
            connection = new WebSocket(`ws://${host}:${port}`);
            connection.onopen = (e) => {
                connectionCallback();
            };
            connection.onmessage = (e) => {
                onMessageObservers.forEach(observer => {
                    observer(e.data);
                })
            };
        },
        getConnection: () => connection,
        addOnMessageObserver: (callback) => onMessageObservers.push(callback)
    }
}