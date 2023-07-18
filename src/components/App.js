
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child.js"
const App = () => {
  let [modal,setModal] = useState(false)

  return (
    <div className="parent">
       <h1>Parent Component</h1>
       <Child changeModal = {setModal}/>
       <div id="mod" style={{display:"none"}}>
        <h3>Modal Content</h3>
        <p>This is modal content</p>
       </div>
    </div>
  )
}

export default App
