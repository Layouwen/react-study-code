// redux
let createStore = Redux.createStore
let reducers = (state, action) => {
  state = state || {
    money: {amount: 100000}
  }
  switch (action.type) {
    case "我想花钱":
      return {
        money: {
          amount: state.money.amount - action.payload
        }
      }
    default:
      return state
  }
}

const store = createStore(reducers)

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="home">
        <Father1 money={this.props.store.money}/>
        <Father2 money={this.props.store.money}/>
      </div>
    )
  }
}

class Father1 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="father">
        Father1 {this.props.money.amount}
        <Son11 money={this.props.money}/>
        <Son12 money={this.props.money}/>
      </div>
    )
  }
}

class Son11 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="son">
        son11 {this.props.money.amount}
      </div>
    )
  }
}

class Son12 extends React.Component {
  constructor() {
    super()
  }

  x() {
    store.dispatch({type: "我想花钱", payload: 100})
  }

  render() {
    return (
      <div className="son">
        son12 {this.props.money.amount}
        <button onClick={() => this.x()}>花钱</button>
      </div>
    )
  }
}

class Father2 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="father">
        Father2 {this.props.money.amount}
        <Son21 money={this.props.money}/>
        <Son22 money={this.props.money}/>
      </div>
    )
  }
}

class Son21 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="son">
        son21 {this.props.money.amount}
      </div>
    )
  }
}

class Son22 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="son">
        son22 {this.props.money.amount}
      </div>
    )
  }
}

function render() {
  ReactDOM.render(<App store={store.getState()}/>, document.querySelector("#root"))
}

render()
store.subscribe(render)
