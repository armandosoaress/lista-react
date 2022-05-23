import React, { useState } from 'react'
import Tasks from './componentes/Tasks'


const App = () => {
const [lista, setTasks] = useState(
  [ 
    {
      id:'1',
      title:'tarefa 1',
      completed:false,
    },
    {
      id:'2',
      title:'tarefa 2',
      completed:true,
    },
    {
      id:'3',
      title:'tarefa 3',
      completed:true,
    }
  ]

)
 return(
   <>
          <div className="container">
               <Tasks tasks={lista} />
         </div>
   </>
       )
}

export default App