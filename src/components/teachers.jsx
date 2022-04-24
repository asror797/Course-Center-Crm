import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
function Teachers() {
   const [data,setData] = useState([])

   useEffect(()=>{
      fetch('http://localhost:5000/teachers')
         .then(res => res.json())
         .then(courses => setData(courses))
   })
   return(
      <>
         <div className="wrapper">
            <div className="student_header">
               <p>Teachers</p>
               <Link className='button-3' to="/new-teacher">Add Teacher</Link>
            </div>
            <ul className="students_lst">
               {
                  data.map(m=>{
                     return(
                        <li key={m.teacher_id} className="student_card">
                              <div className="stdn_div">
                                 <p>{m.teacher_name}</p>
                                 <p>{m.course_name}</p>
                                 <div className="btns_card">
                                    <button className="button-7">Edit</button>
                                    <button className="button-9">Del</button>
                                 </div>
                              </div>
                        </li> 
                     );
                  })
               }
            </ul>
         </div>
      </>
   );
}

export default Teachers;