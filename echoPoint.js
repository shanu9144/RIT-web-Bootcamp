const EventEmitter = require('events');

const shoutEvent = new EventEmitter();

shoutEvent.on('echoPoint', function(data){
    console.log("Custom event received :",data);


})

shoutEvent.emit('echoPoint',
{
    message : 'shouting name on echo point:'

} 
)