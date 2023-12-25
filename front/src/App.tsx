

import Addtask from "./components/Addtask"
import Todo from "./components/Todo"




function App() {


  return (
    <>
      <div className='font-bold flex justify-center  text-[40px] pt-10 mr-[600px]  '>
       <h1>Task List</h1>
      </div>
      <Addtask/>
      <Todo/>
     
    

    </>
  )
}

export default App
