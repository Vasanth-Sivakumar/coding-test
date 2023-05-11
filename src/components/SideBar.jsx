import { useState } from 'react'
import React from 'react'
import '../css/main.css'
import { Link } from 'react-router-dom';

function SideBar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
  return (
    <aside className={`sidebar-wrapper ${sidebarOpen ? "open" : ""} custom-scrollbar wow fadeInLeft`}>
        <div className="sidebar-content-wrapper">
          <ul className="sidebar-list">
            <li className="sidebar-list-item has-subnav active open" id="listTem">
              <button className="sidebar-link" id="pro_toggle" onClick={handleToggleSidebar}>
                <img src={"../../images/icons/icon-menu.svg"} alt="Product List" />
                <span className="item-text">Ecommerce</span>
              </button>
              <ul>
                <li>
                  <Link to="/product" className="sidebar-link">
                       Product List
                  </Link>
                </li>
                <li>
                  <Link to="/addproduct" className="sidebar-link">
                       Add Product
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default SideBar