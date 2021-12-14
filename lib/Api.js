const express = require('express');
const app = express();
const rateLimit = require("express-rate-limit");
const { table } = require('quick.db')
const db = new table("socialmanager")
const main = require('./Utils');
class API extends main{
    constructor(options){

        super()

        if(options.rateLimit !== undefined){


            if(!options.rateLimitOptions === undefined || options.rateLimitOptions == null) throw new Error('rateLimit options Missing')


            const rateLimitOptions = options.rateLimitOptions


            rateLimit({

                rateLimitOptions

            })


        }

        if(options.port == undefined) app.listen(8080 , () => console.log("Listening The Port 8080"));

        if(options.port != undefined) app.listen(options.port , () => console.log(`Listening The Port ${options.port}`))

    }

    mainEndpoint(endpoint = "/api", otherData = Object) {
        app.get(endpoint, (req , res) =>{
            const id = req.query.id
            if(!id) res.status(422).json({error: "ID Query Missing"})
            if(other === undefined){
            res.json({
                messageCount: this.userMessageCount(id),
                friendsCount: this.userFriendCount(id),
            })
        }else if(other !== undefined){
            res.json({
                messageCount: this.userMessageCount(id),
                friendsCount: this.userFriendCount(id),
                otherData
            })
        }
        })

    }
    Express(){
        return app
    }

}

module.exports = API
