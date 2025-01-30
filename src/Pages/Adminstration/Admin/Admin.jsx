import React from "react";
import Brandcrump from"../../../Component/Brandcrump";
import AddAdmin from "./AddAdmin";
import AdminList from "./AdminList";

const Admin = () => {
    return(
        <>
        <div class="content-wrapper">
            <Brandcrump
                pageName="Dashboard" 
                title="Admin User" 
                url="/dashboard" 
                breadcrumb="Admin User" 
            />
            <section class="content">
                <div class="container-fluid">
                    <AddAdmin/>
                </div>
            </section>
            <section class="content">
                <div class="container-fluid">
                <AdminList/>
                </div>
            </section>
            </div>
        </>
    );  
}
export default Admin;