import React, { useState, useEffect } from "react";
import Brandcrump from"../../../Component/Brandcrump";
import AddZone from "./AddZone";
import ZoneListing from "./ZoneListing";

const Zone = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Get user type from localStorage (or any global state)
    const type = localStorage.getItem('user_type');
    setUserType(type);
  }, []);

  return (
    <div class="content-wrapper">
      <Brandcrump 
        pageName="Dashboard" 
        title="Zone" 
        url="/dashboard" 
        breadcrumb="Zone" 
      />    

      {/* Render components based on user type */}
      {userType === 'administration' && (
        <>
          <section class="content">
            <div class="container-fluid">
              <AddZone />
            </div>
          </section>
          <section class="content">
            <div class="container-fluid">
              <ZoneListing />
            </div>
          </section>
        </>
      )}

      {(userType === 'admin' || userType === 'subadmin') && <ZoneListing />}
    </div>
  );
};

export default Zone;
