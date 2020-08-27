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
  // 创建虚拟DOM
  let span = React.createElement('span', {className: 'red'}, number)
  let button1 = React.createElement('button', {onClick: add}, '+')
  let button2 = React.createElement('button', {onClick: reduce}, '-')
  let div = React.createElement('div', {className: 'green'}, span, button1, button2)
  // 渲染进页面
  ReactDOM.render(div, document.querySelector('#root'))
}


