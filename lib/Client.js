const { table } = require('quick.db')
const db = new table("socialmanager")
class Client {



constructor(opt){



this.opt = opt



}




addMessage(id = String || Number, message = String || Array){



    if(!id) throw new Error("Id Not Found");
    if(!message) throw new Error("message Not Found");

    let final = message

    if(Array.isArray(message)){

        final = message.map(x => {return x}).join(" ")

    }

    if(db.get(`messages_${id}`) == null || undefined){

        db.set(`messages_${id}`, [])

    }

    db.push(`messages_${id}`, message)



}




createAccount(id ,email = String , password = String) {



    if(!id) throw new Error("Id Not Found");
    if(!email) throw new Error("Email String Not Found");
    if(!password) throw new Error("Password String Not Found");
    if(db.get(`isEmail_${email}`)){
    throw new Error("Email is Already In Use")
    }
    db.set(`email_${id}` ,email)
    db.set(`password_${id}`, password)
    db.set(`isEmail_${email}`, true)



}



addFriend(fromId , toId){



    if(!fromId) throw new Error("fromId Not Found")
    if(!toId) throw new Error("toId Not Found")
    if(db.get(`isFriend_${fromId}_${toId}`) || db.get(`isFriend_${toId}_${fromId}`)) throw new Error(`${fromId} and ${toId} Are Already Friends`)
    if(!db.get(`friends_${fromId}`)){
        if(!db.get(`friends_${toId}`)){
            db.set(`friends_${fromId}`, [])
            db.push(`friends_${toId}`, fromId)
            db.push(`friends_${fromId}`, toId)
            db.set(`isFriend_${fromId}_${toId}`, true)
            db.set(`isFriend_${toId}_${fromId}`, true)
        }
    }else{
        db.push(`friends_${toId}`, fromId)
        db.push(`friends_${fromId}`, toId)
        db.set(`isFriend_${fromId}_${toId}`, true)
        db.set(`isFriend_${toId}_${fromId}`, true)
    }



}


getMessages(id = String || Number){


    if(!id) throw new Error("Id Missing")

    if(db.get(`messages_${id}`) == null || undefined){

        db.set(`messages_${id}`, [])

    }

    return db.get(`messages_${id}`)


}



getFriends(id = String || Number){


    if(!id) throw new Error("Id Missing")


    if(!db.get(`friends_${id}`)){

        db.set(`friends_${id}`, [])

    }

    return db.get(`friends_${id}`)


}


getLastMessage(id = String || Number){


    if(!id) throw new Error("Id Missing")

    if(!db.get(`messages_${id}`)){

        db.set(`messages_${id}`, [])

    }
    return db.get(`messages_${id}`)[db.get(`messages_${id}`).length - 1]

}


deleteUserMessage(id , message){

    
if(!id) throw new Error("Id Missing")

if(!message) throw new Error("Message Missing")

if(!db.get(`messages_${id}`)){

    db.set(`messages_${id}`, [])

}

const index = db.get(`messages_${id}`).indexOf(message);

if (index > -1) {

  db.get(`messages_${id}`).splice(index, 1);

}


}


}



module.exports = Client
