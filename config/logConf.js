/**
 * log4js的配置文件
 * 1- 暴露的是一个json对象
 * 2- 主要是用path来解决不同环境下的路径分隔符问题，所以没用json文件（无法添加逻辑）
 * 3- 为了在开发时，所有的日志输出在控制台进行调试; 
 *     在部署后，所有的日志输出到文件中 这里我们对file和dateFile部分的type用process.env.NODE_ENV进行判断输出
 * 4- 日志类别共分为： 访问（运营）日志 + 应用日志 + 错误日志
 */
// const path = require('path')

/**
 * 为了在开发时，所有的日志输出在控制台进行调试; 
 * 在部署后，所有的日志输出到文件中 这里我们对file和dateFile部分的type进行统一配置
 */
module.exports = {
  // replaceConsole: process.env.NODE_ENV !== "development" || false, // 当在开发模式下 所有日志输出到控制台 方便调试
  appenders: {
    stdout: { // 控制台输出
      type: "console"
    },
    access: { // 访问（运营）日志
      type: 'dateFile',
      filename: "logs/access/access", // 生成规则： acess + pattern
      pattern: "-yyyy-MM-dd.log",
      alwaysIncludePattern: true, // 这个选项才可以使命名时 pattern生效
      category: 'http' // http对应categories中的category 未指定category的都是categories.default
    },
    app: { // 应用日志
      type: 'file',
      filename: "logs/app/app.log",
      maxLogSize: 10485760, // 一个文件最大：1024 * 1024 * 10 = 10M 单位：byte
      numBackups: 3 // 例如：log1.log log2.log log3.log
    },
    errorFile: { // 错误日志
      type: 'file',
      filename: "logs/error/error.log"
    },
    errors: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'errorFile'
    } 
  },
  categories: { // 自定义类型+级别
    default: { // 未指定category的appender的级别默认为这个配置
      appenders: ['app', 'errors'],
      level: 'DEBUG'
    },
    http: {
      appenders: ['access'],
      level: 'DEBUG'
    }
  }
}