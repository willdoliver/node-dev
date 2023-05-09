
const EventEmmitter = require('events');
const emitter = new EventEmmitter();

// emitter.on('messageLogged', function(eventArg){
emitter.on('messageLogged', (eventArg) => { // The same
    console.log('Listener called', eventArg);
});

const Logger = require('./logger');
const logger = new Logger();
logger.log('message test');