import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function AddStudent() {
   const [studentName,setName] = useState()
   const [groupId,setGrId] = useState()
   const [courses,setCourse] = useState([])
   const [groups,setDataGr] = useState([])
   let [cousrseId,setCourseId] = useState()

   useEffect(()=>{
      fetch('http://localhost:5000/courses')
         .then(res=> res.json())
         .then(crsData => setCourse(crsData))
   },[])

   useEffect(()=>{
      console.log(courses,cousrseId)

      if(courses[0]) {
         // let firtsId = courses[0].course_id
         console.log(cousrseId)
         fetch(`http://localhost:5000/groups?id=${cousrseId}`)
         .then(res=>res.json())
         .then(data=>{
            setDataGr(data)
            console.log(data);
         })
      }
   },[cousrseId])

   const navigate = useNavigate()

 

  
   return(
      <div className="wrapper">
         <div className="wrapper_itm">
            <h2>Student Add</h2>
            <input 
               onChange={e=>{
                  setName(e.target.value)
               }}
               type="text" 
               placeholder="Student name" />
            <select 
               onChange={e=>{
                  setCourseId(e.target.value)
                  console.log(cousrseId)
               }}>
               {/* <option 
                  selected 
                  disabled 
                  key={6999}>
                  Choose course 
               </option> */}
               {
                  courses.map(m=>{
                     return(
                        <option 
                           key={m.course_id} 
                           value={m.course_id}>
                           {m.course_name}
                        </option>
                     );
                  })
               }
            </select>


            <select
               onChange={e=>{
                  setGrId(e.target.value)
               }}>

               <option key={45415} selected disabled> choose groups</option>
               {
                  groups.map(m=>{
                     return(
                        <option key={m.group_id} value={m.group_id}>
                           {m.group_name}
                        </option>
                     );
                  })
               }
            </select>

            <button 
               onClick={()=>{
                  fetch('http://localhost:5000/students',{
                     method:"POST",
                     headers:{
                        "Content-Type":"application/json"
                     },
                     body:JSON.stringify({
                        studnet_name:studentName,
                        group_id:groupId
                     })
                  })
                  .then(res=>res.json())
                  .then(addStn=>{
                     console.log(addStn)
                     if(addStn[0]) {
                        navigate("/students")
                     }
                  })
               }}
               className='button-7'
               >Add student
            </button>
         </div>
      </div>
   );
}

export default AddStudent;