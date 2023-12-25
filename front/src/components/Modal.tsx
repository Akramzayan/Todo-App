import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Todo {
  
  title: string;
  priority: string;
}

interface RootState {
  todos: Todo[];
}

const Modal: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskPriority, setTaskPriority] = useState<string>('');

  const createTodo = async () => {
    try {
      
      if (!taskTitle) {
        console.error('Task title is required.');
        return;
      }

      
      if (!taskPriority) {
        console.error('Task priority is required.');
        return;
      }

      const newTodo: Todo = {
       
        title: taskTitle,
        priority: taskPriority,
      };

    
      dispatch({ type: 'ADD_TODO', payload: newTodo });

      
      setTaskTitle('');
      setTaskPriority('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <div className='relative w-full'>
      <div className="w-full sm:w-[500px]  bg-white rounded-md shadow-md absolute top-[180px] right-0 ">
        <div className="flex flex-col space-y-4 py-6 px-10">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-bold text-left text-gray-800">Add Task</h1>
            <span className="text-xl font-bold text-left text-gray-800" onClick={() => props.setShowModal(false)}>X</span>
          </div>
         
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-600" htmlFor="taskTitle">
              Task
            </label>
            <input
              id="taskTitle"
              name="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Type your task here..."
              className="ring-1 ring-gray-400 w-full text-gray-800 rounded-md px-4 py-2"
              type="text"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-600" htmlFor="taskPriority">
              Priority
            </label>
            <div className="flex items-center gap-4">
              <button
                className={`text-red-600 ring-1 ring-red-600 rounded-md px-4 py-1 ${taskPriority === 'High' ? 'bg-red-400 text-white' : ''}`}
                onClick={() => setTaskPriority('High')}
              >
                High
              </button>
              <button
                className={`text-yellow-600 ring-1 ring-yellow-600 rounded-md px-4 py-1 ${taskPriority === 'Medium' ? 'bg-yellow-200 text-white' : ''}`}
                onClick={() => setTaskPriority('Medium')}
              >
                Medium
              </button>
              <button
                className={`text-white bg-green-600 rounded-md px-4 py-1 ${taskPriority === 'Low' ? 'bg-green-400 text-white' : ''}`}
                onClick={() => setTaskPriority('Low')}
              >
                Low
              </button>
            </div>
          </div>
          
          <button className="ml-auto text-white bg-gray-600 rounded-md px-4 py-2 hover:after:bg-violet-500" onClick={createTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;