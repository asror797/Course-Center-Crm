import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react'


function Groups() {

   const [data,setData] = useState([])
   useEffect(()=>{
      fetch('http://localhost:5000/groups')
         .then(res=>res.json())
         .then(arr=>setData(arr))
   },[])
   return (
      <>
         <div className="wrapper">
            <div className="student_header">
               <p>Groups</p>
               <Link className='button-3' to="/new-group">Add Group</Link>
            </div>
            <ul className="students_lst">
               {
                  data.map(m=>{
                     return(
                        <li key={m.group_id} className="student_card">
                           <div className="stdn_div">
                              <p>{m.group_name}</p>
                              <p>{m.course_name}</p>
                              <p>{m.teacher_name}</p>
                              <div className="btns_card">
                                 <Link className='button-7' to="/">Edit</Link>
                                 <Link className='button-9' to="/">Del</Link>
                              </div>
                           </div>
                        </li>
                     );
                  })
               }
               {/* <li className="student_card">
                  <div className="stdn_div">
                     <p>Umar Zairov</p>
                     <p>Web dasturlash</p>
                     <div className="btns_card">
                        <button className="button-7">Edit</button>
                        <button className="button-24">Del</button>
                     </div>
                  </div>
               </li> */}
            </ul>
         </div>
      </>
   );
}

export default Groups;