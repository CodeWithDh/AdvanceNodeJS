// const ChatRom = require("./chatRom")

// let chat=new ChatRom();

// chat.on("join",(user)=>{
//     console.log(`${user} joined the Chat.`)
// })
// chat.on("sendMessage",(user,message)=>{
//     console.log(`${user} : ${message}`)
// })
// chat.on("leave",(user)=>{
//     console.log(`${user} Left the Chat`)
// })

// chat.join("Alice")
// chat.join("Bob")
// chat.sendMessage("Alice","Hey Bob! what's up buddy?")
// chat.sendMessage("Bob","Yo Alice! All Set Buddy.")
// chat.leave("Alice")
// chat.sendMessage("Alice","This message can't be sent")
// chat.leave("Bob")












const MyChatRoom=require("./MyChatRoom");

let chat =new MyChatRoom();

chat.on("join",(user)=>{
    console.log(`${user} join the Chat.`)
})

chat.on("sendMessage",(user,message)=>{
    console.log(`${user} : ${message}`)
})

chat.on("leave",(user)=>{
    console.log(`${user} left the Chat`)
})

chat.join("Shivam")
chat.join("Lavisha")
chat.sendMessage("Shivam","Hey Lavisha! I miss you")
chat.sendMessage("Lavisha","Hey Shivam! Why? We were not friends")
chat.leave("Lavisha")
chat.sendMessage("Lavisha","I don't want to talk to you")
chat.leave("Shivam")