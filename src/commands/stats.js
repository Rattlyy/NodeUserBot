const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")

exports.run = (message, msg, admin) => {
  cpuStat.usagePercent(function(err, percent, seconds) {
          if (err) {
              return console.log(err);
          }
           msg.send(`Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
           msg.send(`Node version: ${process.version}`)
           msg.send("CPU: "+`md\n${os.cpus().map(i => `${i.model}`)[0]}`)
           msg.send("CPU Usage: "+`${percent.toFixed(2)}%`)
           msg.send("Arch: "+`${os.arch()}`)
           msg.send("Platform: "+`${os.platform()}`)
});
}
