const redis = require("redis");
const conf=require('./ConfigInit');
const client=redis.createClient({
  host:"localhost",
  port:6379
})

async function createConnection(){
  
  await client.connect()
  
}

createConnection();

module.exports =client;

