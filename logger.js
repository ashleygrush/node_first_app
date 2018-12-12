const EventEmitter = require('events');

val url = 'http://www.facebook.com/ashleygrush';

class Logger extends EventEmitter {
  function log(message) {
    consol.log(message);

    this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = log;
