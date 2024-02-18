import { useEffect, useState } from "react"

//real wrapper
export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json()
        setTodos(json.todos)
      })
    }, 5000);
  }, [])

  return <div>
    <CardWrapper>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </CardWrapper>
  </div>
}

function Todo({title, description}) {
 return <CardWrapper>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </CardWrapper>
}

// Accept a react comoponent as an input
function CardWrapper({children}) {
  return <div style={{border:"2px solid black"}}>{children}</div>
}
