const EventEmmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmmitter();

var url = 'http://mylogger.io/log';

function logging(message) {
    // Send an HTTP request
    console.log(message);

    emitter.emit('messageLogged', {id:1, url:'https://'});
}

module.exports.log = log;