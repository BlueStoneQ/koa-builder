/**
 * 工具 - 利用mysql + config提供一个执行sql语句的query函数
 * 1- 供同目录下的其他功能service调用
 * 2- 该目录下 一般一张表对应一个service
 */
const mysql = require('mysql')
const config = require('../../config/config')

/**
 * 创建连接池
 */
const pool = mysql.createPool({
  host: config.MYSQL.HOST,
  port: config.MYSQL.PORT,
  user: config.MYSQL.USER,
  password: config.MYSQL.PASSWORD,
  database: config.MYSQL.DATABASE,
  insecureAuth : true // 允许旧的身份验证方法连接到数据库实例
});

/**
 * query() -- 自定义的用来执行sql语句的一个处理函数
 * 1- 因为操作数据库本身是耗时的异步请求 -- 所以 -- 这里我们利用promise来处理
 * 2- 这里数据库很像前端中对应的后台 需要异步请求
 */
const query = (sql, value) => {
  return new Promise((resolve, reject) => {
    // 连接池建立起一条连接
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        // 执行传入的数据库语句
        connection.query(sql, value, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          //解除数据库链接 -- 原来reject()/resolve() 并不会return，结束函数
          connection.release();
        })
      }
    })
  })
}

module.exports = query