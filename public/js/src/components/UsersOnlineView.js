const template = (model) => {
    return model.getUsersOnline().map(u => `
    
        <li class="list-user" id="${u.id}">${u.name}</li>
        
        `).join('');
}

export default function UsersOnlineView(element){
    return {
        update (model) {
            element.innerHTML = template(model);
        }
    }
}
