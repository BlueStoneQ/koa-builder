/**
 * redis的客户端处理程序
 * 1- 后面可以把常用的操作用Promise封装下 导出
 */
const redis = require('redis');
const config = require('../../config/config');

// 这里如果不传入port和host 默认会填充：6379和127.0.0.1
const client = redis.createClient({
  host: config.REDIS.HOST,
  port: config.REDIS.PORT,
  password: config.REDIS.PASSWORD
});

client.on('error', function (err) {
  console.log('Error: ', err);
});

module.exports = client;
