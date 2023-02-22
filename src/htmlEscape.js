/*
 * Author: 吴楚标
 * Date: 2023-02-13 23:53:33
 * LastEditors: 吴楚标
 * LastEditTime: 2023-02-21 23:41:52
 * Description: 
*/
 
// 转义字符表达
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, match => {
    switch(match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp;'
    }
  }
  )
}

// 还原
function htmlUnEscape(htmlStr) {
  return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch(match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  }
  )
}

module.exports = {htmlEscape, htmlUnEscape}