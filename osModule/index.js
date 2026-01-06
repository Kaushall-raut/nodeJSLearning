const os = require("os"); // used to get the information about the operating system

console.log(os.platform()); // return your platform name (win32)

console.log(os.arch()); //returns your system architecture

console.log(os.cpus()); //return your system core details

console.log(os.totalmem()); //returns your system total memory in bytes

console.log(os.freemem()); //return your system available memory  in bytes

console.log(os.hostname()); //return system host name

console.log(os.type()); // return os name

console.log(os.release()); //return your os version

console.log(os.uptime()); // returns your system active time in simple it says how many second your system is active

console.log(os.userInfo()); // return current userInfo

console.log(os.networkInterfaces()); // return your network related details
