import React from "react";

const Brandcrump = ({ pageName, title, url, breadcrumb }) => {
    return (
        <>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h5 class="m-0">{title}</h5>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href={url}>{pageName}</a></li>
                    {breadcrumb && (
                        <>
                        <li>/</li>
                        <li class="breadcrumb-item">{breadcrumb}</li>
                        </>
                    )}
                    
                    </ol>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Brandcrump;
