// const store = require('./store');
//
// function getChats(filter) {
//   return store.list(filter);
// }
//
// function addChat(users) {
//   if (!users || Array.isArray(users)) {
//     return Promise.reject('Invalid user list');
//   }
//
//   const chat = {
//     users: users
//   }
//
//   return store.add(chat);
// }
//
// module.exports = {
//   getChats,
//   addChat
// };
const store = require('./store');

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };
    return store.add(chat);
}

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
}
