import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'

function TeacherAdd() {
   const [courses,setCourses] = useState([])
   const [teacherName,setName] = useState([])
   const [course,setCourse] = useState([])

   useEffect(()=>{
      fetch('http://localhost:5000/courses')
         .then(res=>res.json())
         .then(data=>setCourses(data))
   },[])

   const history = useNavigate()

   function goHome() {
      history("/teachers")
   }

   return(
      <>
         <div className="wrapper">
         <div className="wrapper_itm">
              <h2>New Teacher</h2>
               <input 
                  type="text" 
                  onChange={e=>{
                     setName(e.target.value)
                  }}
                  placeholder="Teacher name" />
               
               <select 
                  className='select'
                  defaultValue={'Select'}
                  onChange={e=>{
                     setCourse(e.target.value)
                  }}>
                  <option 
                     disabled
                     selected>
                     choose
                  </option>
                  {
                     courses.map(m=>{
                        return(
                           <option value={m.course_id} key={m.course_id} >{m.course_name}</option>
                        );
                     })
                  }

               </select>

               <button 
                  onClick={()=>{
                     fetch('http://localhost:5000/teachers',{
                        method:"POST",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           teacher_name:teacherName,
                           course_id:course
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

export default TeacherAdd;