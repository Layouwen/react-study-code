class App extends React.Component {
  constructor() {
    super()
    this.state = {
      time1: 0,
      time2: 0
    }
    this.timeDate = new Date()
  }

  success1() {
    this.setState({
      time1: new Date() - this.timeDate
    })
  }

  success2() {
    this.setState({
      time2: new Date() - this.timeDate
    })
  }

  render() {
    return (
      <div>
        <div className="top">
          <Player1 time={this.state.time1}/>
          <Player2 time={this.state.time2}/>
        </div>
        <Playground success1={this.success1.bind(this)} success2={this.success2.bind(this)}/>
      </div>
    )
  }
}

class Playground extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="bottom">
        <Track1 success={this.props.success1}/>
        <Track2 success={this.props.success2}/>
      </div>
    )
  }
}

class Track1 extends React.Component {
  constructor(props) {
    super(props)
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timeId = setInterval(() => {
      n += 25
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timeId)
        this.props.success()
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        <div style={this.state.style}>兔子</div>
        <div className="track"></div>
      </div>
    )
  }
}

class Track2 extends React.Component {
  constructor(props) {
    super(props)
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timeId = setInterval(() => {
      n += 20
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timeId)
        this.props.success()
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        <div style={this.state.style}>乌龟</div>
        <div className="track"></div>
      </div>
    )
  }
}

class Player1 extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>乌龟</div>
        <div>用时{this.props.time}</div>
      </div>
    )
  }
}

class Player2 extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>兔子</div>
        <div>用时{this.props.time}</div>
      </div>
    )
  }
}

render()

function render() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}
