const Base = require('../index').Client


const { table } = require('quick.db')


class Database extends table{


    constructor(){


        super("socialmanager")


    }


}


module.exports = Database;
