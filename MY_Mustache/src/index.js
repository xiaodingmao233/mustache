import Scanner from './Scanner.js'

// 全局提供Mustache对象
window.Mustache = {
  // 渲染方法
  render (templateStr, data) {
    // 实例化一个扫描器 构造时候提供一个参数 这个参数就是模板字符串
    // 也就是说 这个扫描器就是针对这个模板字符串工作的
    var scanner = new Scanner(templateStr)
    console.log(templateStr)

    var word
    // 当scanner没有到头
    while (!scanner.eos()) {
      // 测试scanUtil
      word = scanner.scanUtil('{{')
      console.log(word)
      scanner.scan('{{')

      word = scanner.scanUtil('}}')
      console.log(word)
      scanner.scan('}}')
    }
  }
}