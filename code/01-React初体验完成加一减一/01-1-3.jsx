// 声明变量
let number = 0

// 方法
let add = () => {
  number += 1
  render()
}
let reduce = () => {
  number -= 1
  render()
}

// 第一次渲染
render()

function render() {
  // 渲染进页面
  ReactDOM.render(
    <div class='green'>
      <span class='red'>{number}</span>
      <button onClick={add}>+</button>
      <button onClick={reduce}>-</button>
    </div>,
    document.querySelector('#root')
  )
}