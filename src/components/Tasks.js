import React, { useState } from 'react'

export default function Tasks() {
  let index=-1;
  let [task,addtasks]=useState([])
  let [editable,edit]=useState(false)
  let [button,changebutton]=useState("ADD")
  let [color,changeColor]=useState("primary")
let[input,newinput]=useState(null)
  function deletetask(index){
  
  addtasks(
    task.filter((element)=>{if(task.indexOf(element)!=index){ return true;}})
  )
      
 
  
  
  }
  function editTask(index){
  newinput(task[index].title);
  changeColor("success")
  changebutton("EDIT TASK")
  
  deletetask(index)


 


  

  }
      
    
  
  function addTask(){
  addtasks((task)=>{
    
    const newTaskArray = [...task ];
    let c=0;
    let values= input
    newTaskArray.forEach((element)=>{
      if((element.title)===values){
        c=c+1;
      }
    })
    if(c===0){
      newTaskArray.push({title:values})
    }
    
    return newTaskArray;

  }
    
  
     
    )
    if(button=="EDIT TASK"){
      changebutton("ADD TASK")
      changeColor("info")
      newinput("")
    }
    
  }
 
  return(
    <>
    <div className="container">
      <form onSubmit={(event)=>{event.preventDefault();addTask()}}>
        <div className="form-group">
          <input
            type="text" 
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Add item.." 
            value={input}
            onChange={(event)=>{newinput(event.target.value)}}
            
          />
        </div>

        <button type="submit" className={`btn btn-${color}`} >
          {button}
        </button>
      </form>
    </div>
    {task.map((element)=>{
       index=index+1;
        return (
          
          <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          
            <li class="nav-item active" id="value" contentEditable={edit==true?"true":"false"} />{element.title}
        </ul>
        <form class="form-inline my-2 my-lg-0">
          
          <button class="btn btn-outline-danger my-2 my mx-3-sm-0" type="submit" onClick={(event)=>{event.preventDefault();
            deletetask(task.indexOf(element));}}>Delete</button>
        </form>
        <form class="form-inline my-2 my-lg-0">
          
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(event)=>{event.preventDefault();editTask(task.indexOf(element));}} >Edit</button>
        </form>
      </div>
    </nav>
        </div>
        )
        
    }

    )}
    </>
  )
 
}
