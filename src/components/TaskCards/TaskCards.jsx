import React, { useContext, useState } from "react";
import { FaTrash, FaEdit,FaWindowClose } from "react-icons/fa";
import taskContext from "../../context/TaskContext";
const TaskCards = () => {
  const [tasks, setTask] = useContext(taskContext);
  const [edit,setEdit] = useState(false);
  const [inputValue,setInputValue] = useState('');
  const [id,setId] = useState(null);
  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(t => t.id !== taskId);
    setTask(newTasks);
    console.log(tasks)
  };
  const handleChange=(e)=>{
    setInputValue(e.target.value);
    console.log('the new task ',inputValue);
  }
  const handleEdit=(taskId)=>{
    setEdit(true);
    setId(taskId);
  }
  const handleClick=()=>{
    const newTasks = tasks.map(item=>{
      if(item.id==id)
     return {id:id , task:inputValue};
     return item;
    })
    // console.log(newTasks)
    setTask(newTasks);
    setInputValue('')
    setId(null);
    setEdit(false);
  }
  return (
    <React.Fragment>
      {edit?<div className="flex justify-center items-center  mb-20 h-96">
          <div className="h-64 w-4/12 flex flex-col items-center rounded-2xl bg-red-200">
          <div className="flex justify-end py-3 w-full">  <button className="mr-5" onClick={()=>{setEdit(false)}}><FaWindowClose/></button></div>
           <h1 className="app_font flex justify-center mb-10 text-xl">Edit the task</h1>
           <input type='text' value={inputValue} className='flex justify-center w-11/12 p-4 h-7 mb-10 rounded-lg' placeholder='Enter the edited task' onChange={handleChange}></input>
           <button className="bg-blue-500 text-sm hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={handleClick}>Save</button>
          </div>
      </div>
      :<div className="flex flex-wrap md:justify-start justify-center mt-10  h-96">
      {tasks.map((item) => (
        <div
          key={item.id}
          className="md:h-1/2 w-80 md:w-1/6 h-1/3 bg-red-200 mx-5 my-5 rounded-2xl flex flex-col py-5 justify-between items-center"
        >
          <h1 className="app_font mt-10">{item.task}</h1>
          <div className="flex flex-row sm:w-32 w-10 justify-between">
            <button  onClick={()=>handleDeleteTask(item.id)}>
              <FaTrash />
            </button>
            <button>
            <FaEdit onClick={()=>{handleEdit(item.id)}}/>
            </button>

          </div>
        </div>
      ))}
    </div>
    }
    </React.Fragment>
  );
};
export default TaskCards;
