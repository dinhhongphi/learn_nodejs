var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener 1 is executed');
}

var listener2 = function listener2()
{
    console.log('listener 2 is executed');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var count = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('count : ',count);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);

var count = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('count : ',count);

eventEmitter.emit('connection');


