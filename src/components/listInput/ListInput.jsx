import {useContext, useState} from 'react'
import taskContext from '../../context/TaskContext'
import idContext from '../../context/IdContext'
import '../../index.css'
const ListInput=()=>{
    const [tasks,setTask] = useContext(taskContext);
    const [id,setId] = useContext(idContext)
    const [text,setText]= useState('');
   
    const handleChange=(e)=>{
     setText(e.target.value)
    }
    const handleKeypress=(e)=>{
          //it triggers by pressing the enter key
    if (e.keyCode === 13) {
         handleClick();
      }
    }
    const handleClick=()=>{
        if(text != '')
        {
            if(!tasks)
            {
                setId(id+1);
            setTask({id:id,task:text})
            }
            else
            {
                setId(id+1);
            setTask([...tasks,{id:id,task:text}])
            }

            setText('')
        }
        else{
            window.alert("Enter some task")
        }
    }
return (
    <div className='flex flex-col justify-content-center items-center '>
    <div className='flex flex-col justify-content-center items-center w-3/10 p-2 bg-red-200 rounded-lg'>
     <h3 className='app_font text-center text-2xl'>Add a Rememberance task</h3>
     <input type='text' value={text} className='w-96 p-4 m-5 h-7 rounded-lg' placeholder='Task' onChange={handleChange} ></input>
     <button className="bg-blue-500 text-sm hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={handleClick} onKeyPress={handleKeypress}>Add</button>
      </div>
      </div>
 
)
}
export default ListInput;