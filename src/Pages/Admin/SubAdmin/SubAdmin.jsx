import React from "react";
import Brandcrump from "../../../Component/Brandcrump";
import AddSubAdmin from "./AddSubAdmin";
import SubAdminList from "./SubAdminList";
const SubAdmin = () => {
    return(
        <>
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                <Brandcrump
                    pageName="Dashboard" 
                    title="Sub Admin" 
                    url="/dashboard" 
                    breadcrumb="Sub Admin" 
                />
                <AddSubAdmin/>
                <SubAdminList/>
            </div>
            </div>
            </div>
        </>
    );  
}
export default SubAdmin;