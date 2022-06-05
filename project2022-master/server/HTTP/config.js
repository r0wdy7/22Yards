const mysql=require('mysql2')
const conf=require('./ConfigInit')

const config={
    mysql_pool:mysql.createPool(
        {
            host:conf.connectivity.mySqlHost,
            port:conf.connectivity.mySqlPort,
            user:conf.connectivity.mySqlUser,
            password:conf.connectivity.mySqlPassword,
            database:conf.connectivity.mySqlDB
        }
    )   
}

module.exports=config