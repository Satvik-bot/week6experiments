import { useState } from "react"

function App() {

  return (
    <div>
      <HeaderWithButton />
      <Header title='name2'></Header>
      <Header title='name2'></Header>
      <Header title='name3'></Header>
      <Header title='name4'></Header>
    </div>
  )


  // 1. "push the state down" METHOD.
  function HeaderWithButton() {
    const[title, setTitle] = useState('name1')

    function changeName(){
      setTitle(Math.random())
    }

    return (
    <div>
      <button onClick={changeName} style={{
        marginBottom:"10px"
      }}>Change Name</button>
      <Header title={title}></Header>
    </div>
    )
  }

}

function randomName() {
  const num = 5;
   let res = '';
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
   };
   return res;
}

function Header({title}) {
  return <div>
    {title}
  </div>
}


export default App