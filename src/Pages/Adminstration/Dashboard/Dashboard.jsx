import React from "react";
import Brandcrump from "../../../Component/Brandcrump";

function Dashboard() {
  const cards = [
    { label: "Total E-Rickshaw", value: "20,000", icon: "fas fa-car", bgClass: "bg-cyan" },
    { label: "QR Allowed", value: "1,000", icon: "fa-solid fa-award", bgClass: "bg-purple" },
    { label: "Total Routes", value: "2,00", icon: "fluent fa-route", bgClass: "bg-info" },
    { label: "Total Zone", value: "6", icon: "solar fa-globe", bgClass: "bg-success-main" },
    { label: "Today Challan", value: "9,00", icon: "fa6-solid fa-file-invoice-dollar", bgClass: "bg-red" }
  ];

  const orders = [
    { id: "OR9842", item: "UP78 AX0256", status: "Paid", badgeClass: "badge-success",amount:"200Rs.", popularity: "01-01-2025" },
    { id: "OR1848", item: "UP78 AX0256", status: "Pending", badgeClass: "badge-warning",amount:"500Rs.", popularity: "01-01-2025" },
    { id: "OR7429", item: "UP78 AX0256", status: "Pending", badgeClass: "badge-warning",amount:"100Rs.", popularity: "01-01-2025" },
    { id: "OR7532", item: "UP78 AX0256", status: "Pending", badgeClass: "badge-warning",amount:"500Rs.", popularity: "01-01-2025" }
  ];
  const neworders = [
    { id: "OR9842", item: "UP78 AX0256", status: "Paid", badgeClass: "badge-success",amount:"200Rs.", popularity: "01-01-2025" },
    { id: "OR1848", item: "UP78 AX0256", status: "Pending", badgeClass: "badge-warning",amount:"500Rs.", popularity: "01-01-2025" },
    { id: "OR7429", item: "UP78 AX0256", status: "Pending", badgeClass: "badge-warning",amount:"100Rs.", popularity: "01-01-2025" },
    { id: "OR7532", item: "UP78 AX0256", status: "Pending", badgeClass: "badge-warning",amount:"500Rs.", popularity: "01-01-2025" }
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
                          {neworders.map((neworders, index) => (
                            <tr key={index}>
                              <td><a href="pages/examples/invoice.html">{neworders.id}</a></td>
                              <td>{neworders.item}</td>
                              <td><span className={`badge ${neworders.badgeClass}`}>{neworders.status}</span></td>
                              <td><div className="sparkbar" data-color="#00a65a" data-height="20">{neworders.popularity}</div></td>
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
                            <th>Challan Number</th>
                            <th>Vehicle Number</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <tr key={index}>
                              <td><a href="pages/examples/invoice.html">{order.id}</a></td>
                              <td>{order.item}</td>
                              <td>{order.amount}</td>
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
