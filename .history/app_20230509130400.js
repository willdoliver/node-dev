
const EventEmmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();

// emitter.on('messageLogged', function(eventArg){
emitter.on('messageLogged', (eventArg) => { // The same
    console.log('Listener called', eventArg);
});

logger.log('message test');