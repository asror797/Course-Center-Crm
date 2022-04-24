import {Link} from 'react-router-dom'

function Sidebar() {
   return(
     <div className="sidebar">
        <p className="dash_text">Dashboard</p>
        <p>Menu</p>
        <ul className="menu_lst">
           <li><Link to="students">Students</Link></li>
           <li><Link to="teachers">Teachers</Link></li>
           <li><Link to="groups">Groups</Link></li>
           <li><Link to="courses">Courses</Link></li>
        </ul>
     </div>
   );
}

export default Sidebar;