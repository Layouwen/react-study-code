function App(){
  return (
    <div>
      <Show name="梁又文" age="20"/>
    </div>
  )
}

function Show(obj){
  return (
    <div className="wrapper">
      <span>{obj.name}</span>
      <span>{obj.age}</span>
    </div>
  )
}

render()

function render(){
  ReactDOM.render(<App/>, document.querySelector('#root'))
}