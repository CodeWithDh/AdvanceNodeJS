const EventEmitter=require("events")

class MyChatRoom extends EventEmitter {
    constructor(){
        super();
        this.users=new Set();
    }

    join(user){
        if(this.users.has(user)){
            console.log(`${user} already in chat`)
        }else{
            this.users.add(user);
            this.emit("join",user)
        }
    }

    sendMessage(user,message){
        if(this.users.has(user)){
            this.emit("sendMessage",user,message)
        }else{
            console.log(`${user} is not present in Chat`)
        }
    }

    leave(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit("leave",user)
        }else{
            console.log(`${user} is not in the Chat.`)
        }
    }
}

module.exports=MyChatRoom