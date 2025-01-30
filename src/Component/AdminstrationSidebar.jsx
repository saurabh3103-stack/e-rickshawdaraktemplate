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
                <li className="nav-item menu-open">
                  <Link  to="administration/dashboard" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link">
                    <i className="nav-icon fas fa-user"></i>
                    <p>
                      Vehicle
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/administration/add_user" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Add Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="administration/users" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Expire Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="administration/users" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Active Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="administration/users" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Pending Vehicle</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/administration/users" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>All Vehicle</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="administration/route" className="d-flex align-items-center gap-1 nav-link">
                    <i className="nav-icon fa-solid fa-route text-light"></i>
                    <span>Routes</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-user"></i>
                    <p>
                      Verifier
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                  <li class="nav-item">
                      <Link to="administration/verifier" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Verifier</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="administration/add-verifier" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Add Verifier</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/administration/zone" className="nav-link">
                    <i className="nav-icon fa fa-location-dot text-light"></i>
                    <p>Zone</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/fine-charges" className="nav-link">
                    <i className="nav-icon fa fa-file-invoice-dollar text-light"></i>
                    <p>Fine & Charges</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/challan" className="nav-link">
                    <i className="nav-icon far fa-file text-light"></i>
                    <p>Challan</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/all-report" className="nav-link">
                    <i className="nav-icon far fa-file text-light"></i>
                    
                    <p>Report</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fa fa-wallet text-light"></i>
                    <p>Transcation</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/admin" className="nav-link">
                    <i className="nav-icon far fa-user text-light"></i>
                    <p>Admin</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/administration/sub-admin" className="nav-link">
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
      {/* <section className="sidebar">
        <button type="button" className="sidebar-close-btn">
          <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
        </button>
        <div>
          <Link to="/administration/dashboard" className="sidebar-logo" style={{fontSize:"1.9rem",fontWeight:"700",lineHeight:"1",alignItems:"center"}}>
            E-Rickshaw Management
          </Link>
        </div>
        <div className="sidebar-menu-area bg-primary">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li>
              <Link
                to="administration/dashboard"
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="icon text-lg"
                ></iconify-icon>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* Vehicle Dropdown */}
            {/* <li className={`dropdown ${openDropdown === "vehicle" ? "open" : ""}`}>
              <Link to="javascript:void(0)"
                onClick={() => toggleDropdown("vehicle")}
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="twemoji:taxi"
                  className="icon text-lg "
                ></iconify-icon>
                <span>Vehicle</span>
              </Link>
              <ul
                className={`sidebar-submenu ${
                  openDropdown === "vehicle" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link to="/administration/users">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>
                    Vehicle
                  </Link>
                </li>
                <li>
                  <Link to="/administration/add_user">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto"></i>
                    Add Vehicle
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* Routes */}
            {/* <li>
              <Link
                to="administration/route"
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="bx:bx-map"
                  className="icon text-lg"
                ></iconify-icon>
                <span>Routes</span>
              </Link>
            </li> */}
            {/* Verifier Dropdown */}
            {/* <li
              className={`dropdown ${openDropdown === "verifier" ? "open" : ""}`}
            >
              <Link
              to="javascript:void(0)"
                onClick={() => toggleDropdown("verifier")}
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="ic:baseline-person"
                  className="icon text-lg"
                  ></iconify-icon>
                <span>Verifier</span>
              </Link>
              <ul
                className={`sidebar-submenu ${
                  openDropdown === "verifier" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link to="administration/verifier">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>
                    Verifier
                  </Link>
                </li>
                <li>
                  <Link to="administration/add-verifier">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto"></i>
                    Add Verifier
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`dropdown ${openDropdown === "zone" ? "open" : ""}`}
            >
              <Link
              to="javascript:void(0)"
                onClick={() => toggleDropdown("zone")}
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="twemoji:round-pushpin"
                  className="icon text-lg white-icon"
                ></iconify-icon>
                <span>Zone</span>
              </Link>
              <ul
                className={`sidebar-submenu ${
                  openDropdown === "zone" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link to="/administration/zone">
                  <i className="ri-circle-fill circle-icon" style={{ fontSize: '24px', color: '#007bff', width: 'auto', height: 'auto' }}></i>
                  Zone
                  </Link>
                </li>
                <li>
                  <Link to="/administration/zone-head">
                  <i className="ri-circle-fill circle-icon" style={{ fontSize: '24px', color: '#007bff', width: 'auto', height: 'auto' }}></i>
                  Zone Head
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`dropdown ${openDropdown === "finecharge" ? "open" : ""}`}
            >
              <Link
              to="javascript:void(0)"
                onClick={() => toggleDropdown("finecharge")}
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="twemoji:receipt"
                  className="icon text-lg white-icon"
                ></iconify-icon>
                <span>Fine/Charges</span>
              </Link>
              <ul
                className={`sidebar-submenu ${
                  openDropdown === "finecharge" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link to="/administration/add-fine-charges">
                  <i className="ri-circle-fill circle-icon" style={{ fontSize: '24px', color: '#007bff', width: 'auto', height: 'auto' }}></i>
                  Add Fine/Charges
                  </Link>
                </li>
                <li>
                  <Link to="/administration/fine-charges">
                  <i className="ri-circle-fill circle-icon" style={{ fontSize: '24px', color: '#007bff', width: 'auto', height: 'auto' }}></i>
                  Fine/Charges
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="administration/challan"
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="twemoji:receipt"
                  className="icon text-lg"
                ></iconify-icon>
                <span>Challan</span>
              </Link>
            </li>
            <li
              className={`dropdown ${openDropdown === "report" ? "open" : ""}`}
            >
              <Link
              to="javascript:void(0)"
                onClick={() => toggleDropdown("report")}
                className="d-flex align-items-center gap-1 "
              >
                <iconify-icon
                  icon="bx:bx-clipboard"
                  className="icon text-lg"
                ></iconify-icon>
                <span>Report</span>
              </Link>
              <ul
                className={`sidebar-submenu ${
                  openDropdown === "report" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link to="administration/today-report">
                    <i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i>
                    Today
                  </Link>
                </li>
                <li>
                  <Link to="administration/all-report">
                    <i className="ri-circle-fill circle-icon text-warning-main w-auto"></i>
                    All Report
                  </Link>
                </li>
              </ul>
            </li>
            <li>
                <Link to="administration/admin" className="d-flex align-items-center gap-1 ">
                    <iconify-icon
                      icon="ic:baseline-person"
                      className="icon text-lg"></iconify-icon>
                    <span>Admin</span>
                  </Link>
              </li>
              <li>
                <Link to="administration/sub-admin" className="d-flex align-items-center gap-1 ">
                    <iconify-icon
                      icon="ic:baseline-person"
                      className="icon text-lg"></iconify-icon>
                    <span>Sub Admin</span>
                  </Link>
              </li>
          </ul> */}
        {/* </div> */}
      {/* </section> */} 
    </>
  );
}

export default AdminstrationSidebar;
