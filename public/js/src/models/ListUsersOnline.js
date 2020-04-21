export default function ListUsersOnline () {
    let _usersOnline = [];
    return {
        getUsersOnline: () => [].concat(_usersOnline),

        getUserById: (id) => {
            let user = undefined;
            _usersOnline.forEach(u => {
                if (u.id == id) {
                    user = u;
                }
            })
            return user;
        },

        addUser: (user) => _usersOnline.push(user),

        removeUser: (user) => _usersOnline = _usersOnline.filter(u => u.id != user.id)
    }
}