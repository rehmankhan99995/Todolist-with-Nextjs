"use client"
import React, { useState } from 'react'

const page = () => {
  
  const [title, settitle] = useState("")
 const [desc, setdesc] = useState("") 
 const [mainTask, setMainTask] = useState([])
 const submitHandler=(e)=>{
e.preventDefault()
// console.log(title)
// console.log(desc)
settitle("");
setdesc("");
console.log(mainTask)
setMainTask([...mainTask,{title,desc}]);


 }; 
const deleteHandler=(i)=>{
let copytask=[...mainTask]
copytask.splice(i,1)
setMainTask(copytask)
}

 let renderTask= <h2>No Task Available</h2>
if(mainTask.length>0)
renderTask =  mainTask.map((t,i)=>{

  return(
 <li key={i} className="flex items-center justify-between mb-8">
 <div className="flex items-center justify-between mb-5 w-2/3">
  <h4 className="text-3xl font-extrabold">{t.title}</h4>
 <h5 className="text-xl font-semibold">{t.desc}</h5>
 </div>
 <button 
 onClick={()=>{
deleteHandler(i)

 }}
 
 className="bg-red-600 text-white px-4 py-2 rounded font-extrabold">Delete</button>
 </li>
  );
}); 

return (
    <>
    <h1 className='bg-black text-white text-7xl text-center font-extrabold'>Rehman Todolist </h1>
<form onSubmit={submitHandler}>
<input 
type="text" 
className='text-3xl border-zinc-700 border-4 m-8 px-4 py-4'
placeholder='Enter title here'
value={title}
onChange={(e)=>{
// console.log(e.target.value)
settitle(e.target.value)
}}
/>

<input 
type="text" 
className='text-3xl border-zinc-700 border-4 m-8 px-4 py-4'
placeholder='Enter Description here'
value={desc}
onChange={(e)=>{
// console.log(e.target.value)
setdesc(e.target.value)


}}

/>
<button className='bg-black text-white px-4 py-3 text-3xl font-extrabold rounded m-5'>

Add Task  
</button>






</form>
<hr/>
<div className='bg-slate-200 p-8'>
<ul>
{renderTask}

</ul>

</div>




    
    
    </>
  )
}

export default page
