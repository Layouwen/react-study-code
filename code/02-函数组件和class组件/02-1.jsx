// 定义主接口
function App() {
  return (
    <div className={wrapper}>
      <Box1/>
      <Box2/>
    </div>
  )
}

// 定义class组件
class Box1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  
  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
  
  minus() {
    this.setState({
      number: this.state.number - 1
    })
  }
  
  render() {
    return (
      <div>
        <span>{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

class Box2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  
  add() {
    this.setState({
      number: this.state.number + 10
    })
  }
  
  minus() {
    this.setState({
      number: this.state.number - 10
    })
  }
  
  render() {
    return (
      <div>
        <span>{this.state.number}</span>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

// 渲染到页面
render()

// 定义渲染函数
function render() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}