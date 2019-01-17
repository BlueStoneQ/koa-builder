/**
 * user表的service层
 * 1- 基本的增删查改
 */
const query = require('./mysql')

/**
 * 罗列整张user表的数据
 */
exports.list = () => {
  // 拼接sql语句
  let _sql = 'select * from user'
  // 执行sql语句 并返回一个promise对象 供调用者获取查询数据
  return query(_sql);
}

/**
 * 根据用户id查询某个用户的信息
 */

/**
 * 插入/新建一条用户信息
 */

/**
 * 根据用户id修改某条用户信息 
 */

/**
 * 删除某个用户信息
 */