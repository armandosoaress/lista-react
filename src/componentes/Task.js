import React from 'react'

const Task = ({task}) => {
    
    return (
        <div>
          <h6>{task.id}</h6>  
        <h4>{task.title}</h4>
        </div>
    )   
    };
    export default Task