/**
 * signin相关的路由处理
 */
const redisClient = require('../service/redis/redis');
exports.signin = async ctx => {
  ctx.body = '1 开始操作redis';
  redisClient.hmset('hosts', 'mjr', '1', 'another', '23', 'home', '1234');
  // redisClient.hgetall('hosts', function (err, obj) {
  //     // console.log('查到的数据： ', obj.home);
  //     // ctx.body = obj.home;
  // });
};
