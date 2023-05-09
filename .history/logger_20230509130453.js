const EventEmmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
        
        this.emit('messageLogged', { id: 1, url: 'https;//' })
    }
        
}

module.exports = Logger;