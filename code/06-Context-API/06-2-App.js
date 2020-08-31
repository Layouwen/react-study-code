import React from "react"

function F1(props) {
  return (
    <div>
      111,{props.n1}
      <F2 n2={props.n1}/>
    </div>
  )
}

function F2(props) {
  return (
    <div>
      222,{props.n2}
      <F3 n3={props.n2}/>
    </div>
  )
}

function F3(props) {
  return (
    <div>
      333,{props.n3}
      <F4 n4={props.n3}/>
    </div>
  )
}

function F4(props) {
  return <div>444,{props.n4}</div>
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      aa: 99
    }
  }

  render() {
    return (
      <div>
        <F1 n1={this.state.aa}/>
      </div>
    )
  }
}

export default App
