// работа с опереционной системой

const os = require('os')

console.log("os is: ", os.platform())

console.log("os arch is: ", os.arch())

console.log("proceccers: \n", os.cpus())

console.log("free memory: \n", os.freemem())

console.log("total memory: \n", os.totalmem())

console.log("home directory: \n", os.homedir())

console.log("computer works(sec): \n", os.uptime())

