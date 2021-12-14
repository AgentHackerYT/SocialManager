# Social Manager
- A Simple Module to Manage Your Own Social Media Data
# Warning
Warning: **Module Is In Beta Stages**
# Topic
* [Installing](#installing)
* [Client](#client)
    * [createAccount](#createAccount)
    * [addMessage](#addMessage)
    * [addFriend](#addFriend)
    * [getLastMessage](#getLastMessage)
    * [deleteUserMessage](#deleteUserMessage)
* [Utils](#utils)
    * [isFriend](#isFriend)
    * [userMessageCount](#userMessageCount)
    * [userFriendCount](#userFriendCount)
* [API](#API)
    * [mainEndpoint](#mainEndpoint)
    * [Express](#express)
    * [cleanMessage](#cleanMessage)
* [Database](#Database)
## Installing
- Install Using NPM
```sh
npm i --save social-manager
```
- Installing Using Yarn
```sh
yarn add social-manager
```
## Client
- Creating A Client
```js
const { Client } = require("social-manager")
const client = new Client()
```
### createAccount
```js
/**
 * @String {id: string}
 * @String {email: string}
 * @String {password: string}
 * */
client.createAccount(`SomeID` , `SomeEmail` , `SomePassword`)
```
### addMessage
```js

/**
 * @String {id}
 * @String {message}
 * */

client.addMessage(`SomeID`, `SomeMessage`)

```
### addFriend
```js

/**
 * @String {fromId}
 * @String {toId}
 * */

client.addFriend(`FromId` , `ToId`)
```
### getLastMessage
```js

/**
 * @String {id}
 * */

client.getLastMessage(`SomeID`)
```
### deleteUserMessage
```js
/**
 * @String {id}
 * @String {message}
 * */
client.deleteUserMessage(`SomeID`, `SomeMessage`)
```
## Utils
```js
const { Utils } = require("social-manager")

const util = new Utils()
```
### isFriend
```js
/**
 * @String {fromId}
 * @String {toId}
 * */

util.isFriend(`FromId` , `ToId`)
```
### userMessageCount
```js
/**
 * @String {id}
 * */
util.userMessageCount(`SomeID`)
```
### userFriendCount
```js
/**
 * @String {id}
 * */
util.userFriendCount(`SomeID`)
```
### cleanMessage
```js
util.cleanMessage(`f*ck you`) // Changes it to ****
```
- Add Custom Words
```js
util.cleanMessage(`f*ck you`, ['words']) 
```
## API 
```js
const { API } = require('social-manager')
const api = new API({
    port: Number;

    rateLimit: Boolean;

    rateLimitOptions:{

        windowMs: Number

        max: Number

        message: String

        statusCode: Number 

}
})
```
### mainEndpoint
```js

api.mainEndpoint("/api")

```
- If You want More Data To Be show On the Endpoint
```js
api.mainEndpoint("/api", , additionalData)
```
### express
```js
api.Express()
```
## Database
- Refer **[Quick.db](https://npmjs.com/quick.db)** for more information.
