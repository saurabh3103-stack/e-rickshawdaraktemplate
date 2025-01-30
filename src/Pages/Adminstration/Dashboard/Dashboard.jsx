import React from "react";
import Brandcrump from "../../../Component/Brandcrump";

function Dashboard() {
  const cards = [
    { label: "Total E-Rickshaw", value: "20,000", icon: "fas fa-car", bgClass: "bg-cyan" },
    { label: "QR Allowed", value: "15,000", icon: "fa-solid fa-award", bgClass: "bg-purple" },
    { label: "Total Routes", value: "5,000", icon: "fluent fa-route", bgClass: "bg-info" },
    { label: "Total Zone", value: "42,000", icon: "solar fa-globe", bgClass: "bg-success-main" },
    { label: "Today Challan", value: "30,000", icon: "fa6-solid fa-file-invoice-dollar", bgClass: "bg-red" }
  ];

  const orders = [
    { id: "OR9842", item: "Call of Duty IV", status: "Shipped", badgeClass: "badge-success", popularity: "90,80,90,-70,61,-83,63" },
    { id: "OR1848", item: "Samsung Smart TV", status: "Pending", badgeClass: "badge-warning", popularity: "90,80,-90,70,61,-83,68" },
    { id: "OR7429", item: "iPhone 6 Plus", status: "Delivered", badgeClass: "badge-danger", popularity: "90,-80,90,70,-61,83,63" },
    { id: "OR7532", item: "Samsung Smart TV", status: "Processing", badgeClass: "badge-info", popularity: "90,80,-90,70,-61,83,63" }
  ];

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="container-fluid">
          <Brandcrump pageName="Dashboard" title="Administration Dashboard" url="/dashboard" breadcrumb="" />

          {/* Cards Section */}
          <div className="row row-cols-xxxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
            {cards.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <div className={`info-box ${item.bgClass}`}>
                  <span className="info-box-icon elevation-1">
                    <i className={item.icon}></i>
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">{item.label}</span>
                    <span className="info-box-number">{item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Latest Orders Section */}
          <div className="row">
            <div className="col-6">
              <div className="mt-3">
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Latest User</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Popularity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <tr key={index}>
                              <td><a href="pages/examples/invoice.html">{order.id}</a></td>
                              <td>{order.item}</td>
                              <td><span className={`badge ${order.badgeClass}`}>{order.status}</span></td>
                              <td><div className="sparkbar" data-color="#00a65a" data-height="20">{order.popularity}</div></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Today Challan Table */}
            <div className="col-6">
              <div className="mt-3">
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Today Challan</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Popularity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <tr key={index}>
                              <td><a href="pages/examples/invoice.html">{order.id}</a></td>
                              <td>{order.item}</td>
                              <td><span className={`badge ${order.badgeClass}`}>{order.status}</span></td>
                              <td><div className="sparkbar" data-color="#00a65a" data-height="20">{order.popularity}</div></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
