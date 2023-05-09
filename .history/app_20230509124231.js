
const EventEmmitter = require('events');
const emitter = new EventEmmitter();

// emitter.on('messageLogged', function(eventArg){
emitter.on('messageLogged', (eventArg) => { // The same
    console.log('Listener called', eventArg);
});

emitter.emit('messageLogged', {id:1, url:'https://'});