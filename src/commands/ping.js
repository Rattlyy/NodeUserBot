exports.run = (message, msg, admin) => {
msg.deleteMsg();
msg.sendImage("ping pong.png");
msg.reply("Pong!");
}
