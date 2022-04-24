import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'


function Delete() {
   const {id} = useParams()
   const [delItme,setData] = useState([])
   useEffect(()=>{
      fetch(`http://localhost:5000/courses?id=${id}`)
         .then(res=>res.json())
         .then(data=>setData(data))
   },[])
   return(
      <>
         <div className="wrapper wrp">
               <ul>
                  {
                     delItme.map(m => {
                        return(
                           <li key={m.course_id} className="student_card">
                              <div className="stdn_div">
                                 <p>{m.course_name}</p>
                                 <p>{m.course_title}</p>
                                 <div className="btns_card">
                                    <Link className='button-7' to="/courses">Cancel</Link>
                                    <button 
                                       onClick={()=>{
                                          fetch(`http://localhost:5000/courses`,{
                                             method:"DELETE",
                                             headers:{
                                                "Content-Type":"application/json"
                                             },
                                             body:JSON.stringify({
                                                course_id:id
                                             })
                                          })
                                          .then(res=>res.json())
                                          .then(edata=>{
                                             console.log(edata)
                                             // edata.data
                                          })
                                       }}
                                       className='button-9'>
                                       Delete
                                    </button>
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

export default Delete;