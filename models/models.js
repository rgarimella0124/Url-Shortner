const shortId = require("shortid");
const redisModule = require("redis");
const redis = redisModule.createClient(
  "redis://x:17f653632ba8438fa483efb09ec5cdc5@prompt-ponderosa-54b1ff6fc2.redisgreen.net:11042/",
  {
    host: "prompt-ponderosa-54b1ff6fc2.redisgreen.net",
    port: 11042,
    password: "aakriti01"
  }
);

redis.on("connect", () => {
  console.log("Connected to Redis Server");
});

redis.on("ready", () => {
  console.log("Ready to Work With RedisGreen Server");
});

redis.on("error", err => {
  console.log("Error occurred while connecting to Redis");
  process.exit(0);
});

function storeURL(url) {
  return new Promise((resolve, reject) => {
    redis.get(url, (err, reply) => {
      if (err) {
        return reject("error occurred during the redis operation");
      }
      if (reply) {
        resolve(reply);
      } else {
        // make new entry
        let id = shortId.generate();
        redis.set(id, url, "EX", 86400);
        // set URL as a key too for searching
        redis.set(url, id, "EX", 86400);
        // return
        resolve(id);
      }
    });
  });
}

function findURL(key) {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, reply) => {
      if (err) {
        return reject("error occurred during the redis operation");
      }
      // check if the reply exists
      if (reply === null) {
        resolve(null);
      } else {
        resolve(reply);
      }
    });
  });
}

module.exports = {
  storeURL: storeURL,
  findURL: findURL
};
