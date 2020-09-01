import React, {useState} from "react"

import "./styles.css"

function Page1() {
  return <div>我是页面1</div>
}

function Page2() {
  return <div>我是页面2</div>
}

function Page3() {
  return <div>我是页面3</div>
}

function App() {
  let [hash, setHash] = useState("/")
  const linkPage1 = () => {
    const hash = "page1"
    window.location.hash = hash
    setHash(hash)
  }

  const linkPage2 = () => {
    const hash = "page2"
    window.location.hash = hash
    setHash(hash)
  }

  const linkPage3 = () => {
    const hash = "page3"
    window.location.hash = hash
    setHash(hash)
  }

  const decide = () => {
    const {hash} = window.location
    if (hash === "#page1") {
      return <Page1/>
    } else if (hash === "#page2") {
      return <Page2/>
    } else {
      return <Page3/>
    }
  }
  return (
    <div className="app">
      <button onClick={linkPage1}>页面1</button>
      <button onClick={linkPage2}>页面2</button>
      <button onClick={linkPage3}>页面3</button>
      <div>{decide()}</div>
    </div>
  )
}

export default App
