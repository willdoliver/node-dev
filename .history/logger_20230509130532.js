const EventEmmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmmitter {
    log(message) {
        // Send an HTTP request
        
        this.emit('messageLogged', { id: 1, url: 'https;//' })
        console.log(message);
    }
        
}

module.exports = Logger;