const path = require('path'); // https://nodejs.org/api/os.html
const Logger = require('./logger');
const logger = new Logger();

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'file.ext');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// emitter.on('messageLogged', function(eventArg){
logger.on('messageLogged', (eventArg) => { // The same
    console.log('Listener called', eventArg);
});

logger.log('message test');
// setInterval(() => {
//     console.log('Hello there');
// }, 10000);