
const EventEmmitter = require('events');
const emitter = new EventEmmitter();

emitter.on('messageLogged', function(){
    console.log('Listener called');
});

emitter.emit('messageLogged');