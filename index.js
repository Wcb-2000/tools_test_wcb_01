/*
 * Author: 吴楚标
 * Date: 2023-02-13 23:53:33
 * LastEditors: 吴楚标
 * LastEditTime: 2023-02-22 00:10:40
 * Description: 
*/
const date = require('./src/dateFomat')
const escape = require('./src/htmlEscape')

module.exports = {...date, ...escape}