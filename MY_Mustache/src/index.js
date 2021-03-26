import parseTemplateToTokens from './parseTemplateToTokens.js'

// 全局提供Mustache对象
window.Mustache = {
  // 渲染方法
  render (templateStr, data) {
    // 调用parseTemplateToTokens函数 让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr)
    console.log(tokens)
  }
}