const db = require('quick.db').table

const table = new db("socialmanager")

const badwords = require('bad-words')

class Utils {


    constructor(){
        this.table = table
    }



    isFriend(fromId , toId){


        if(!fromId) throw new Error("fromId Not Found")

        if(!toId) throw new Error("toId Not Found")

        return this.table.get(`isFriend_${fromId}_${toId}`) || false


    }
    
    
    userMessageCount(id){


        if(!id) throw new Error("Id Not Found")


        if(this.table.get(`messages_${id}`) == null || undefined){


            this.table.set(`messages_${id}`, [])


        }
        return this.table.get(`messages_${id}`).length


    }


    userFriendCount(id){

        
        if(id) throw new Error("Id Not Found")


        if(!this.table.get(`friends_${id}`)){

            this.table.set(`friends_${id}`, [])

        }
        return this.table.get(`friends_${id}`).length

    }


    cleanMessage(message , addWords){


        const filter = new badwords({placeHolder: "*"})


        if(addWords !== undefined){


            filter.addWords(addWords)


        }


        return filter.clean(message)


    }


}


module.exports = Utils
