import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
function AddGroup() {

   const history = useNavigate()

   function goHome() {
      history("/groups")
   }

   const [grpName,setGrpName] = useState()
   const [grpTeacher,setGrpTeacher] = useState()
   const [grpCourse,setGrpCourse] = useState()

   const [Data,setData] = useState([])
   const [Teachers , setTeacher] = useState([])
   useEffect(()=>{
      fetch('http://localhost:5000/courses')
         .then(res=>res.json())
         .then(data=>setData(data))
   },[])

   useEffect(()=>{
      fetch('http://localhost:5000/teachers')
         .then(res=>res.json())
         .then(teachers=>setTeacher(teachers))
   },[])
   return(
      <>
         <div className="wrapper">
            <div className="wrapper_itm">
               <h2>Create group</h2>
               <input 
                  onChange={e=>{
                     setGrpName(e.target.value)
                  }}
                  type="text" 
                  placeholder='Group name' />
               <select
                  onChange={e=>{
                     setGrpCourse(e.target.value)
                  }}>
                     <option key={456} disabled selected>Choose course</option>
                  {
                     Data.map(m=>{
                        return(
                           <option key={m.course_id} value={m.course_id}>{m.course_name}</option>
                        );
                     })
                  }
               </select>
               <select 
                  onChange={e=>{
                     setGrpTeacher(e.target.value)
                  }}>

                     <option key={654} disabled selected>Choose teacher</option>
                  {
                     Teachers.map(m=>{
                        return(
                           <option key={m.teacher_id} value={m.teacher_id}>{m.teacher_name}</option>
                        );
                     })
                  }
               </select>
               <button
                  onClick={()=>{
                     fetch('http://localhost:5000/groups',{
                        method:"POST",
                        headers:{
                           "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                           group_name:grpName,
                           teacher_id:grpTeacher,
                           course_id:grpCourse
                        })
                     })
                     .then(res=>res.json())
                     .then(resData=>{
                        console.log(resData)
                        goHome()
                     })
                  }}
                  className='button-7'>
                  Create Group
               </button>
            </div>
         </div>
      </>
   );
}

export default AddGroup;