
const EventEmmitter = require('events');
const emitter = new EventEmmitter();

emitter.on('messageLogged', function(eventArg){
    console.log('Listener called', eventArg);
});

emitter.emit('messageLogged', {id:1, url:'https://'});