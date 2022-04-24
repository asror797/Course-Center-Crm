import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function Students() {

   const [students,setStudent] = useState([])

   useEffect(()=>{
      fetch('http://localhost:5000/students')
      .then(res=>res.json())
      .then(stdntData => {
         setStudent(stdntData)
      })
   },[])

   return(
         <div className="wrapper">
            <div className="student_header">
               <p>Students</p>
               <Link className='button-3' to="/new-student">Add Student</Link>
            </div>
            <ul className="students_lst">
               {
                  students.map(m=>{
                     return(
                        <li key={m.student_id} className="student_card">
                           <div className="stdn_div">
                              <p>{m.studnet_name}</p>
                              <p>{m.group_name}</p>
                              <div className="btns_card">
                                 <Link to="/" className='button-7'>Edit</Link>
                                 <Link to="/" className='button-9'>Del</Link>
                              </div>
                           </div>
                        </li>
                     );
                  })
               }
            </ul>
         </div>
   );
}

export default Students;