exports.run = (message, msg, admin) => {
/*Flood command
Usage: flood 20 Rattly Userbot!
*/

const args = msg.text.split(" ");
let floodmsg = args.slice(2).join(" ");
let msgNum = args[1];

for ( var i = 0; i < msgNum; i++ ) {
      msg.send(floodmsg)
}
}

