const os = require('os'); // https://nodejs.org/api/os.html
const Logger = require('./logger');
const logger = new Logger();

console.log(os.userInfo())
console.log(os.version())
// emitter.on('messageLogged', function(eventArg){
logger.on('messageLogged', (eventArg) => { // The same
    console.log('Listener called', eventArg);
});

logger.log('message test');
setInterval(() => {
    console.log('Hello there');
}, 10000)