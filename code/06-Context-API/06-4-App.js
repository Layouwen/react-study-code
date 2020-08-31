import React from "react"
import "./styles.css"

const themeContext = React.createContext()

function Box() {
  return (
    <div>
      <themeContext.Consumer>
        {(value) => <Top theme={value}/>}
      </themeContext.Consumer>
      <Bottom/>
    </div>
  )
}

function Top(props) {
  return <div className={props.theme}></div>
}

function Bottom() {
  return <div className="size bottom"></div>
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: "pink"
    }
  }

  changeTheme = () => {
    if (this.state.theme === "pink") {
      this.setState({theme: "black"})
    } else {
      this.setState({theme: "pink"})
    }
  }

  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        <div className="App">
          <button onClick={this.changeTheme}>点击修改主题</button>
          <Box/>
        </div>
      </themeContext.Provider>
    )
  }
}

export default App
