// const Model = require('./model');
//
// function listChats(userId) {
//   return new Promise(function (resolve, reject) {
//     let filter = {};
//
//     if (userId) {
//       filter = {
//         users: userId
//       }
//     }
//
//     Mode.find(filter)
//       .populate('users')
//       .exec(function (error, populated) {
//         if (error) {
//           reject(error);
//           return false;
//         }
//
//         resolve(populated);
//       })
//   })
// }
//
// function addChat(chat) {
//   return new Model(chat).save();
// }
//
// module.exports = {
//   list: listChats,
//   add: addChat
// };

const Model = require('./model');

function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

function listChats(userId) {
	return new Promise((resolve, reject) => {
		let filter = {};
		if (userId) {
			filter = {
				users: userId,
			}
		}

	    Model.find(filter)
	    	.populate('users')
	    	.exec((err, populated) => {
	    		if (err) {
	    			reject(err);
	    			return false;
	    		}

	    		resolve(populated);
	    	});
	});
}

module.exports = {
    add: addChat,
    list: listChats,
}
