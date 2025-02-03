import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../public/Update/css/remixicon.css';
function AdminSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };
  const handleLogout = () => {
    localStorage.removeItem('session');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_email');
    navigate('/login');
  };
  
  return (
    <>
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
              {/* Brand Logo */}
              <Link to="/admin/dashboard" className="brand-link">
                <span className="brand-text font-weight-light"> E-Rickshaw Management</span>
              </Link>
              {/* Sidebar */}
              <div className="sidebar">            
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li className="nav-item">
                      <Link  to="/admin/dashboard" 
                        className={`nav-link ${location.pathname === "/admin/dashboard" ? "active" : ""}`}>
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                          Dashboard
                        </p>
                      </Link>
                    </li>
                    <li className={`nav-item ${location.pathname.includes("/admin/vehicle") ? "menu-open" : ""}`}>
                      <a href="#" class="nav-link">
                        <i className="nav-icon fas fa-user"></i>
                        <p>
                          Vehicle
                          <i className="fas fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <Link to="/admin/add_user"    
                          className={`nav-link ${location.pathname === "/admin/add_user" ? "active" : ""}`}
                          >
                            <i className="far fa-circle nav-icon"></i>
                            <p>Add Vehicle</p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="admin/users"                       
                          className={`nav-link ${location.pathname === "/admin/expire_vehicle" ? "active" : ""}`}
                          >
                            <i className="far fa-circle nav-icon"></i>
                            <p>Expire Vehicle</p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="admin/users"                       
                          className={`nav-link ${location.pathname === "/admin/active_vehicle" ? "active" : ""}`}
                          >
                            <i className="far fa-circle nav-icon"></i>
                            <p>Active Vehicle</p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="admin/users"                       
                          className={`nav-link ${location.pathname === "/admin/pending_vehicle" ? "active" : ""}`}
                          >
                            <i className="far fa-circle nav-icon"></i>
                            <p>Pending Vehicle</p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/admin/users"                       
                          className={`nav-link ${location.pathname === "/admin/all_vehicle" ? "active" : ""}`}
                          >
                            <i className="far fa-circle nav-icon"></i>
                            <p>All Vehicle</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="admin/route"                   
                      className={` nav-link ${location.pathname === "/admin/route" ? "active" : ""}`}>
                        <i className="nav-icon fa-solid fa-route text-light"></i>
                        <p>Routes</p>
                      </Link>
                    </li>
                    <li className={`nav-item ${location.pathname.includes("/admin/verifier") ? "menu-open" : ""}`}>
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-user"></i>
                        <p>
                          Verifier
                          <i class="fas fa-angle-left right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                      <li class="nav-item">
                          <Link to="admin/verifier"                       
                          className={`nav-link ${location.pathname === "/admin/verifier" ? "active" : ""}`}
                          >
                            <i class="far fa-circle nav-icon"></i>
                            <p>Verifier</p>
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="admin/add-verifier" 
                            className={`nav-link ${location.pathname === "/admin/add-verifier" ? "active" : ""}`}>
                            <i class="far fa-circle nav-icon"></i>
                            <p>Add Verifier</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/zone"                   
                      className={`nav-link ${location.pathname === "/admin/zone" ? "active" : ""}`}
                      >
                        <i className="nav-icon fa fa-location-dot text-light"></i>
                        <p>Zone</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/fine-charges"                   
                      className={`nav-link ${location.pathname === "/admin/fine-charges" ? "active" : ""}`}
                      >
                        <i className="nav-icon fa fa-file-invoice-dollar text-light"></i>
                        <p>Fine & Charges</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/challan"                   
                      className={`nav-link ${location.pathname === "/admin/challan" ? "active" : ""}`}
                      >
                        <i className="nav-icon far fa-file text-light"></i>
                        <p>Challan</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/all-report"                   
                      className={`nav-link ${location.pathname === "/admin/all-report" ? "active" : ""}`}
                      >
                        <i className="nav-icon far fa-file text-light"></i>
                        
                        <p>Report</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#"                   
                      className={`nav-link ${location.pathname === "/admin/transaction" ? "active" : ""}`}
                      >
                        <i className="nav-icon fa fa-wallet text-light"></i>
                        <p>Transcation</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/sub-admin"                   
                      className={`nav-link ${location.pathname === "/admin/sub-admin" ? "active" : ""}`}
                      >
                        <i className="nav-icon far fa-user text-light"></i>
                        <p>Sub Admin</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                          className="nav-link"
                            onClick={handleLogout}
                            href="javascript:void(0)"
                          >
                          <i className="nav-icon fa fa-right-from-bracket text-light"></i>
                          <p>Logout</p>
                    </Link>
                    </li>
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div>
              {/* /.sidebar */}
          </aside>
          
      
      
    </>
  );
}

export default AdminSidebar;
