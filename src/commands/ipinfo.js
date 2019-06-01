exports.run = (message, msg, admin) => {
const args = msg.text.split(" ");
var request = require('request');
var ip = args[1];
request('http://ip-api.com/json/'+ip, function (error, response, body) {
var ipInfo = JSON.parse(body);
msg.send("Country: "+ipInfo.country);
msg.send("Region: "+ipInfo.regionName);
msg.send("City: "+ipInfo.city);
msg.send("Latitude: "+ipInfo.lat);
msg.send("Longitude: "+ipInfo.lon);
msg.send("ISP: "+ipInfo.isp);
});
}
