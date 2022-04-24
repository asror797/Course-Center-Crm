
import {Route,Routes} from 'react-router-dom'
import Groups from './groups';
import Students from './students';
import Teachers from './teachers';
import Courses  from './courses';
import Home from './login';
import AddCourse from './courseAdd';
import AddGroup from './groupAdd';
import EditCourse from './editcourse';
import TeacherAdd from './teacheradd';
import AddStudent from './studentsAdd';
import Delete from './delete';

function Content() {
   return (
      <>
         <div className="content">
            <Routes>
               <Route path="/" element = {<Home/>}></Route>
               <Route path="/students" element={<Students/>}></Route>
               <Route path="/teachers" element={<Teachers/>}></Route>
               <Route path="/groups" element={<Groups/>}></Route>
               <Route path="/courses" element={<Courses/>}></Route>
               <Route path='/delete/:id' element={<Delete/>}></Route>
               <Route path="/new-student" element={<AddStudent/>}></Route>
               <Route path="/new-course" element={<AddCourse/>}></Route>
               <Route path="/new-group" element={<AddGroup/>}></Route>
               <Route path="/edit-course/:id" element={<EditCourse/>}></Route>
               <Route path="/new-teacher" element={<TeacherAdd/>}></Route>
            </Routes>
         </div>
      </>
   ); 
}

export default Content;