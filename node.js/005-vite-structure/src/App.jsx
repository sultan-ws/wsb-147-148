import { useState } from "react"
import FormRow from "./components/FormRow"

function App() {

  const [count, setCount] = useState(20);

  const handleClg = ()=>{
    console.log(count)
  }

  return (
    <>
      <div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={handleClg}>CLG {count}</button>
      </div>
      <form>
        <FormRow label="Name" type="text" placeholder="Enter name" />
        <FormRow label="Email" type="email" placeholder="Enter email" />
        <FormRow label="Password" type="password" placeholder="Enter password" />
      </form>
    </>
  )
}

export default App
