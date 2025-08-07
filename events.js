const EventEmitter = require('events');
// Importing the EventEmitter class from the 'events' module

const eventEmitter =new EventEmitter();


eventEmitter.on("greet",(name)=>{
    console.log(`Hello, ${name}  Welcome to events in nodeJs!`)
})
eventEmitter.once("pushnotify",()=>{
    console.log("This is run only one time");
})

const myListener=()=>{
    console.log("Testing listening")
}
eventEmitter.on("Test",myListener)
// Emit the event
// eventEmitter.emit("Test")
// eventEmitter.emit("greet","Shivam")
eventEmitter.removeListener("Test",myListener)
eventEmitter.emit("Test") // event is removed 




// eventEmitter.emit("pushnotify");
// eventEmitter.emit("pushnotify"); //This will not run twice 


class Chat extends EventEmitter{
    // sendMessage is just a function in class Chat
    // But in that function we are using the emit method of EventEmitter class
    sendMessage(msg){
        console.log(`Message sent: ${msg}`);
        this.emit("messageRecieved",msg);
        // this refers to the instance of Chat class
        // this.emit is calling the emit method of EventEmitter class
    }
}

let chat=new Chat();
chat.on("messageRecieved",(msg)=>{
    console.log(`Message Received: ${msg}`);
})

chat.sendMessage("Hello Shivam");