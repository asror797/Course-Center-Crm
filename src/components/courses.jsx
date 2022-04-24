import {useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
function Courses() {

   const [data , setData] = useState([])

   useEffect(()=>{
      fetch('http://localhost:5000/courses')
         .then(res=>res.json())
         .then(courses => setData(courses))
   },[])


   function deleteCourse() {
      fetch('http://localhost:5000/courses',{
         method:"DELETE",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({course_id:5})
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)})
   }


   return (
      <>
         <div className="wrapper">
            <div className="student_header">
               <p>Courses</p>
               <Link className='button-3' to='/new-course'>Add course</Link>
            </div>
            <ul className="students_lst">
               {
                  data.map(m=>{
                     return(
                        <li key={m.course_id} className="student_card">
                           <div className="stdn_div">
                              <p>{m.course_name}</p>
                              <p>{m.course_title}</p>
                              <div className="btns_card">
                                 <Link to={`/edit-course/${m.course_id}`} className="button-7">Edit</Link>
                                 <Link to={`/delete/${m.course_id}`} className="button-9">Del</Link>
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

export default Courses;