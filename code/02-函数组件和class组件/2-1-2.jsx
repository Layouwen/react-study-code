function App() {
  return (
    <div>
      <Show/>
      <Add/>
    </div>
  )
}

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '梁又文',
      age: 20
    }
  }
  render(){
    return (
      <div>
        <div>姓名：{this.state.name}</div>
        <div>年龄：{this.state.age}</div>
      </div>
    )
  }
}

class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phone : '15011756892'
    }
  }
  change(){
    this.setState({
      phone: '110'
    })
  }
  render(){
    return (
      <div>
        <div>手机号：{this.state.phone}</div>
        <button onClick={this.change.bind(this)}>更改手机号</button>
      </div>
    )
  }
}

render()

function render() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}