const ChatRom = require("./chatRom")

let chat=new ChatRom();

chat.on("join",(user)=>{
    console.log(`${user} joined the Chat.`)
})
chat.on("sendMessage",(user,message)=>{
    console.log(`${user} : ${message}`)
})
chat.on("leave",(user)=>{
    console.log(`${user} Left the Chat`)
})

chat.join("Alice")
chat.join("Bob")
chat.sendMessage("Alice","Hey Bob! what's up buddy?")
chat.sendMessage("Bob","Yo Alice! All Set Buddy.")
chat.leave("Alice")
chat.sendMessage("Alice","This message can't be sent")
chat.leave("Bob")