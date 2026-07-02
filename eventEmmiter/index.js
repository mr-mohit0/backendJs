import EventEmitter from "events"
// console.log(EventEmitter)
const emiter = new EventEmitter();
const handeler = async (...e) => { console.log('hello node js !\n', e) }



emiter.on('abc', handeler);
emiter.emit('abc', 'also hello mohit bro ');
console.log(emiter)