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
  ReactDOM.render(React.createElement('div', {className: 'green'},
    React.createElement('span', {className: 'red'}, number),
    React.createElement('button', {onClick: add}, '+'),
    React.createElement('button', {onClick: reduce}, '-')
    ),
    document.querySelector('#root')
  )
}