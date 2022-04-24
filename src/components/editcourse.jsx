import {useParams,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'

function EditCourse() {
   const {id} = useParams()

   const [values,setValue] = useState([])
   const [editedName,setName] = useState()
   const [editedTitle,setTitle] = useState()

   const history = useNavigate()
   function goHome(){
      history("/courses")
   }

   useEffect(()=>{
      fetch(`http://localhost:5000/courses/${id}`)
         .then(res=>res.json())
         .then(data=>setValue(data))
   },[])

   return(
      <>
         <div className="wrapper">
           <div className="wrapper_itm">
               <input 
                  type="text" 
                  onChange={e=>{
                     setName(e.target.value)
                  }} 
                  placeholder={values[0] ? values[0].course_name : undefined}/>
               <input 
                  type="text" 
                  onChange={e=>{
                     setTitle(e.target.value)
                  }}
                  placeholder={values[0]? values[0].course_title : undefined}/>
               <button 
                  onClick={()=>{
                     fetch('http://localhost:5000/courses',{
                        method:"PUT",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           course_name:editedName,
                           course_id:id,
                           course_title:editedTitle
                        })
                     })
                     .then(res=>res.json())
                     .then(data=>console.log(data))
                     goHome()
                  }}
                  className='button-7'>
                  Edit course
               </button>
            </div>
         </div>
      </>
   );
}

export default EditCourse;