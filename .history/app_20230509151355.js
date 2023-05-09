
const Logger = require('./logger');
const logger = new Logger();

// emitter.on('messageLogged', function(eventArg){
logger.on('messageLogged', (eventArg) => { // The same
    console.log('Listener called', eventArg);
});

logger.log('message test');
setInterval(() => {
    console.log('Hello there');
}, 100)