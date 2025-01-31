import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../public/Update/css/remixicon.css';

function AdminstrationSidebar() {

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <Link to="/" className="brand-link">
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
                  <Link  to="administration/dashboard" 
                    className={`nav-link ${location.pathname === "/administration/dashboard" ? "active" : ""}`}>
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname.includes("/administration/vehicle") ? "menu-open" : ""}`}>
                  <a href="#" class="nav-link">
                    <i className="nav-icon fas fa-user"></i>
                    <p>
                      Vehicle
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/administration/add_user"    
                      className={`nav-link ${location.pathname === "/administration/add_user" ? "active" : ""}`}
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Add Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="administration/users"                       
                      className={`nav-link ${location.pathname === "/administration/expire_vehicle" ? "active" : ""}`}
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Expire Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="administration/users"                       
                      className={`nav-link ${location.pathname === "/administration/active_vehicle" ? "active" : ""}`}
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Active Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="administration/users"                       
                      className={`nav-link ${location.pathname === "/administration/pending_vehicle" ? "active" : ""}`}
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Pending Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/administration/users"                       
                      className={`nav-link ${location.pathname === "/administration/all_vehicle" ? "active" : ""}`}
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>All Vehicle</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="administration/route"                   
                  className={`d-flex align-items-center gap-1  nav-link ${location.pathname === "/administration/route" ? "active" : ""}`}>
                    <i className="nav-icon fa-solid fa-route text-light"></i>
                    <span>Routes</span>
                  </Link>
                </li>
                <li className={`nav-item ${location.pathname.includes("/administration/verifier") ? "menu-open" : ""}`}>
                  <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>
                      Verifier
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                  <li class="nav-item">
                      <Link to="administration/verifier"                       
                      className={`nav-link ${location.pathname === "/administration/verifier" ? "active" : ""}`}
                      >
                        <i class="far fa-circle nav-icon"></i>
                        <p>Verifier</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="administration/add-verifier" 
                        className={`nav-link ${location.pathname === "/administration/add-verifier" ? "active" : ""}`}>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Add Verifier</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/administration/zone"                   
                  className={`nav-link ${location.pathname === "/administration/zone" ? "active" : ""}`}
                  >
                    <i className="nav-icon fa fa-location-dot text-light"></i>
                    <p>Zone</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/fine-charges"                   
                  className={`nav-link ${location.pathname === "/administration/fine-charges" ? "active" : ""}`}
                  >
                    <i className="nav-icon fa fa-file-invoice-dollar text-light"></i>
                    <p>Fine & Charges</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/challan"                   
                  className={`nav-link ${location.pathname === "/administration/challan" ? "active" : ""}`}
                  >
                    <i className="nav-icon far fa-file text-light"></i>
                    <p>Challan</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/all-report"                   
                  className={`nav-link ${location.pathname === "/administration/all-report" ? "active" : ""}`}
                  >
                    <i className="nav-icon far fa-file text-light"></i>
                    
                    <p>Report</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#"                   
                  className={`nav-link ${location.pathname === "/administration/transaction" ? "active" : ""}`}
                  >
                    <i className="nav-icon fa fa-wallet text-light"></i>
                    <p>Transcation</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/admin"                   
                  className={`nav-link ${location.pathname === "/administration/admin" ? "active" : ""}`}
                  >
                    <i className="nav-icon far fa-user text-light"></i>
                    <p>Admin</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/sub-admin"                   
                  className={`nav-link ${location.pathname === "/administration/sub-admin" ? "active" : ""}`}
                  >
                    <i className="nav-icon far fa-user text-light"></i>
                    <p>Sub Admin</p>
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

export default AdminstrationSidebar;
