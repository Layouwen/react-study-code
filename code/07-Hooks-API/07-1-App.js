import React, {useState, useEffect} from "react"
import "./styles.css"

function App() {
  // 第一个值是获取属性，第二个值是设置属性
  const [number, setNumber] = useState(0)

  useEffect(() => {
    let output = document.querySelector("#output")
    output.innerText = number
  })

  const add = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <span>{number}</span>
      <button onClick={add}>+1</button>
    </div>
  )
}

export default App
