import React, {useState, useEffect} from 'react';
import { useNavigate, Link} from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const [usrId , setUsrId]= useState(null);
  useEffect(() => {
    const storedUserType = localStorage.getItem('user_type') || 'guest'; // Default to 'guest'
    const storeusrId = localStorage.getItem('user_id') || '0'; // Default to '0'
    setUsrId(storeusrId);
    setUserType(storedUserType);
  }, []);
  console.log(usrId);
  return (
    <>
    <nav className="main-header navbar navbar-expand navbar-dark">
      {/* Left navbar links */}
      <ul className="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">
          <img src="https://img.icons8.com/?size=20&id=11167&format=png&color=ffffff"/>
            {/* <i className="far fa-comments"></i> */}
            <span className="badge badge-danger navbar-badge">3</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <i className="fas fa-expand-arrows-alt"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            <i className="fas fa-th-large"></i>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
