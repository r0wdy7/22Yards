const redisClient = require("./../HTTP/DB-kv");

function KVSet(key, value, expiryTime) {
  return new Promise(async (resolve, reject) => {
    try {
      await redisClient.set(key, value)
      await redisClient.expire(key, expiryTime)
      resolve()
    } catch (err) {
      err.srvMessage = "Error while SETting redis";
      reject(err)
    }
  });
}

function KVGet(key) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await redisClient.get(key)
      resolve(data)
    } catch (err) {
      err.srvMessage = "Error while GETting redis";
      reject(err)
    }

  });
}

function KVDel(key) {
  return new Promise((resolve, reject) => {
    redisClient.DEL(key, (err, reply) => {
      if (err) {
        err.srvMessage = "Error while DELting redis";
        reject(err);
      }
      return resolve(reply);
    });
  });
}

module.exports = {
  KVSet,
  KVGet,
  KVDel
};