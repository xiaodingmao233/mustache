import parseTemplateToTokens from './parseTemplateToTokens.js'
import renderTemplate from './renderTemplate.js'


// 全局提供Mustache对象
window.Mustache = {
  // 渲染方法
  render (templateStr, data) {
    // 调用parseTemplateToTokens函数 让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr)
    // 调用renderTemplate函数 让tokens数组变为dom字符串
    var domStr = renderTemplate(tokens, data)
    // console.log(tokens)
    return domStr
  }
}