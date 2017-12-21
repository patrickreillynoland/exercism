var Message = function() {};

// Message.prototype.encode = function(message) {
//     var m = message.split('');

//     for (var i = 0; i > m.length; i++) {
//         switch(m[i]) {
//             case 'x':
//                 m[i] = 'a';
//                 break;
//             case 'y':
//                 m[i] = 'b';
//                 break;
//             case 'z':
//                 m[i] = 'c';
//                 break;
//             default:
//                 m[i] = String.fromCharCode(3 + m[i].charCodeAt(0));
//         }
//     }
// }

module.exports = Message;