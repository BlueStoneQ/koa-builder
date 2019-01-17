/**
 * 配置文件
 * 1- 生产环境和开发环境2套配置
 * 2- mysql 和 redis配置
 * 3- 其他配置
 */

 // 生产环境配置
 const production = {
  // 服务器端口
  SERVER_PORT: 3000,
  // DB-REDIS配置
  // DB-MYSQL数据库配置
  MYSQL: {
    host: '47.105.62.98', // 数据库主机地址
    port: '3306', // 数据库使用的端口
    user: 'root', // 访问用户
    password: 'man/Will179', // 访问用户对应的密码
    database: 'maimai_test' // 数据库名称--后面改成麦麦
  }
 }

 // 开发环境配置
 const development = {
  // 服务器端口
  SERVER_PORT: 3000,
  // DB-REDIS配置
  // DB-MYSQL数据库配置
  MYSQL: {
    DATABASE: 'mysql0531',
    USER: 'root',
    PASSWORD: '123456',
    PORT: '3306',
    HOST: 'localhost'
    // host: '47.105.62.98', // 数据库主机地址
    // port: '3306', // 数据库使用的端口
    // user: 'root', // 访问用户
    // password: 'man/Will179', // 访问用户对应的密码
    // database: 'maimai_test' // 数据库名称--后面改成麦麦
  }
 }

 const config = process.env.NODE_ENV !== "development" ? production : development

 module.exports = config