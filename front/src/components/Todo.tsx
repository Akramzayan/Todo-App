import CircularProgress from '@mui/material/CircularProgress';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"
//import deleteTodo from '../services/TodoService';
//import updateTodo from '../services/TodoService';

const Todo = () => {
  

  return (
    <div className="flex flex-row  gap-[80px] items-center justify-center pt-[90px] mr-[330px] ">
      <div className="bg-blue-100 flex flex-row  h-[90px] w-[750px] items-center justify-between rounded-[20px] mr-[-320px] px-[20px]">
        <div className="flex flex-col " >
            <h1 className="text-gray-400 text-bold">Task</h1>
            <p >Go to Gym</p>

        </div>
        <div className="flex flex-col">
            <h1 className="text-gray-400 text-bold">Priority</h1>
            <p className="text-yellow-500 text-bold" >Meduim</p>

        </div>
        <h1 className="bg-gray-300 flex justify-center items-center height-[10px] w-[50px] rounded-[4px]">Done</h1>
        <h1><CircularProgress  variant="determinate" value={50} /></h1>
        <BsFillPencilFill className="cursor-pointer"
       />

        <BsFillTrashFill
                      className="cursor-pointer"
                      size={20}
                      color="red"
                     // onClick={() => {deleteTodo(); }}
                      
                    />
        </div>
       
      
    </div>
  )
}

export default Todo
