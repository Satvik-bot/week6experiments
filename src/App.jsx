import React, { useState } from "react"
import './index.css'

function App() {
  const[title, setTitle] = useState('name1')

  function changeName(){
    setTitle(Math.random())
  }

  return (
    <div>
      <button id='btn' onClick={changeName}>Change Name</button>
      <Header title={title}></Header>
      <Header title='name2'></Header>
      <Header title='name2'></Header>
      <Header title='name3'></Header>
      <Header title='name4'></Header>
    </div>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})


export default App