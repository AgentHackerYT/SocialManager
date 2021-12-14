import * as event from "events"



import {table} from "quick.db"



import { Options , ValueData } from "quick.db"



import * as Base from "./lib/Client"



import {Express} from "express";


export interface APIOpts {


    port: number | null | null;

    rateLimit: Boolean | null;

    rateLimitOptions:{
        windowMs: number
        max: number
        message: string
        statusCode: number 
}
}



export type webServerTypes = 'express' | 'react' | 'angular' | 'vue' | 'http/https' | 'other'



export class Client {



    public constructor()

    

    public addMessage(id: Number | String , message: String): any


    public createAccount(id: Number | String , email: String , password: String): any


    public getMessages(id: Number | String): any[]


    public getFriends(id: Number | String): any[]


    public getLastMessage(id: Number | String): String
    

    public deleteUserMessage(id: Number | String , message: String): any


    public addFriend(fromId: number | String , toId: number | String)



}



export class Database {



            public constructor()




             public set(key: string, value: ValueData, ops?: Options): any;


             public get(key: string, ops?: Options): any;
     

             public fetch(key: string, ops?: Options): any;
     

             public add(key: string, value: number, ops?: Options): any;
     

             public subtract(key: string, value: number, ops?: Options): any;
     

             public push(key: string, value: ValueData, ops?: Options): any[];
     

             public has(key: string, ops?: Options): boolean;
     

             public includes(key: string, ops?: Options): boolean;
     

             public all(ops?: Options): { ID: string; data: any }[];


             public fetchAll(ops?: Options): { ID: string; data: any }[];
     

             public delete(key: string, ops?: Options): boolean;


} 



export class Utils{


            public constructor()

            
            public isFriend(fromId: String | Number  , toId: String | Number )
            
            public userMessageCount(id: String | Number ): Number
        
            public userFriendCount(id: String | Number ): Number 

            public cleanMessage(message: String): String
        
}

void class inDevelopment {

    
    public constructor(undefined)


    public null(): null


}

export class API {
    
    public constructor(options: APIOpts)
    
    public mainEndpoint(port: Number)

    public Express(): Express

}
