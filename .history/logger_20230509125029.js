const EventEmmitter = require('events');
const emitter = new EventEmmitter();

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);

    emitter.emit('messageLogged', {id:1, url:'https://'});
}

module.exports.log = log;