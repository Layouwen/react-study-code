import React from "react"
import "./styles.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function Tab1() {
  return <div>tab1</div>
}

function Tab2() {
  return <div>tab2</div>
}

function App() {
  return (
    <Router>
      <Link exact default to="/tab1">
        <button>tab1</button>
      </Link>
      <Link exact to="/tab2">
        <button>tab2</button>
      </Link>
      <Switch>
        <Route exact path="/">
          <div>首页</div>
        </Route>
        <Route exact path="/tab1">
          <Tab1/>
        </Route>
        <Route exact path="/tab2">
          <Tab2/>
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
