const EventEmitter=require("events");

class ChatRom extends EventEmitter{
    constructor(){
        super();
        this.users=new Set();
    }

    join(user){
        if(this.users.has(user)){
            console.log(`${user} is already joined the Chat`)
        }else{
            this.users.add(user)
            this.emit("join",user)
        }
    }

    sendMessage(user,message){
        if(this.users.has(user)){
            this.emit("sendMessage",user,message);
        }else{
            console.log(`${user} is not present in chat`);
        }
    }

    leave(user){
        if(this.users.has(user)){
            this.emit("leave",user);
            this.users.delete(user);
        }else{
            console.log(`${user} is not present in Chat.`)
        }
    }
}

module.exports=ChatRom;