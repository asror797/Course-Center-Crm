import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddCourse() {
   const [course_name,setName] = useState()
   const [course_title,setTitle] = useState()
   let history = useNavigate()
   const goHome = () => {
      history("/courses");
   };

   return(
      <>
         <div className="wrapper">
           <div className="wrapper_itm">
              <h2>Add Course</h2>
               <input 
                  onChange={e=>{
                     setName(e.target.value)
                  }}
                  type="text" 
                  placeholder="Course Name" />
               <input 
                  onChange={e=>{
                     setTitle(e.target.value)
                  }}
                  type="text" 
                  placeholder="Course Title" />
               <button 
                  onClick={()=>{
                     fetch('http://localhost:5000/courses',{
                        method:"POST",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           course_name:course_name,
                           course_title:course_title
                        })
                     })
                     .then(res=>res.json())
                     .then(msg=>{
                        console.log(msg)
                        goHome()
                     })
                  }}
                  className="button-7">
                  Add course
               </button>
           </div>
         </div>
      </>
   );
}

export default AddCourse;