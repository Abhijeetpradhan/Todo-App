import React from 'react'

const TodoBody = () => {
  return (
    <div>TodoBody</div>
  )
}

export default TodoBody

// import React, { useState } from 'react'

// const TodoBody = () => {

// const [text,setText] = useState('');  

// const [tasks,setTasks] = useState([
//   {
//     id:1,
//     text:'first task',
//     completed:true
//   },
//   {
//     id:2,
//     text:'second task',
//     completed:false
//   }
// ])

// const AddItem = (text)=>{
//   console.log("inside add item");
//   let newTask = [{
//     id:Date.now(),
//     text,
//     completed:false
//   }]
//   console.log("new task:",newTask);
//   setTasks([...tasks,...newTask]);
//   setText('')
// }



//   return (
//     <div>

//       <div>
//         <input type="text" placeholder='Enter text' className='h-10 p-2' value={text} onChange={(e)=>setText(e.target.value)} />
//       </div>

//       <button className='bg-black text-white ' onClick={()=>AddItem(text)}>Add task</button>

//       {tasks.map((task)=> {
//         return(
//           <div key={task.id} className='my-2 bg-slate-400'>{task.text}</div>
//         )
//       })}

//     </div>
//   )
// }

// export default TodoBody