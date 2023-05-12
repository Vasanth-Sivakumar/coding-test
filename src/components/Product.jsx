import React, { useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import "../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../features/actions";

const Product = () => {
  const productList = useSelector((state) => state.productList);
  const [toggle, setToggle] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const handleToggle = (index) => {
    if (toggle === index) {
      setToggle(null);
    } else {
      setToggle(index);
    }
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId),
    setToggle(null));
  };

  return (
    <React.Fragment>
      <TopBar />
      <div className="page-wrapper">
        <SideBar />
        <div className="content-area-wrapper">
          <div className="content-wrapper">
            <div className="filter_wrapper  d-block d-sm-none">
              <div className="filet_left_content">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img
                        src="images/icons/magnifying-glass.png"
                        alt="search"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control input_modify"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="heading_wrapper d-flex flex-wrap">
              <h1 className="head_title">Product List</h1>
              <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">E-Commerce</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product List
                  </li>
                </ul>
              </nav>
            </div>
            <div className="card products_blc">
              <div className="card-body">
                <div className="filter_wrapper">
                  <div className="filet_left_content">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                            alt="search"
                          />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control input_modify"
                        placeholder="Search"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                      />
                    </div>
                    <select
                      className="custom-select input_modify"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="All">All</option>
                      <option value="clothe">Clothes</option>
                      <option value="bags">Bags</option>
                      <option value="shoes">Shoes</option>
                      <option value="watches">Watches</option>
                      <option value="device">Devices</option>
                    </select>
                  </div>
                  <div class="filter_btn_wrapper">
                    <Link
                      className="btn theme-btn-primary theme-btn"
                      to="/addproduct"
                    >
                      Add Product
                    </Link>
                  </div>
                </div>
                <div className="app_table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <label className="checkbox_container text-uppercase">
                            {" "}
                            ID
                          </label>
                        </th>
                        <th scope="col" className="th_didivder">
                          Products
                          <span className="filter-order-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="13"
                              viewBox="0 0 11 13"
                            >
                              <g
                                id="Group_22146"
                                data-name="Group 22146"
                                transform="translate(-501 -126.5)"
                              >
                                <path
                                  id="Icon_ionic-md-arrow-dropdown"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,13.5,14.5,19,20,13.5Z"
                                  transform="translate(492 120.5)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                                <path
                                  id="Icon_ionic-md-arrow-dropdown-2"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,19l5.5-5.5L20,19Z"
                                  transform="translate(492 113)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </th>
                        <th scope="col" className="th_didivder">
                          Category
                          <span className="filter-order-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="13"
                              viewBox="0 0 11 13"
                            >
                              <g
                                id="Group_22146"
                                data-name="Group 22146"
                                transform="translate(-501 -126.5)"
                              >
                                <path
                                  id="Icon_ionic-md-arrow-dropdown"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,13.5,14.5,19,20,13.5Z"
                                  transform="translate(492 120.5)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                                <path
                                  id="Icon_ionic-md-arrow-dropdown-2"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,19l5.5-5.5L20,19Z"
                                  transform="translate(492 113)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </th>
                        <th scope="col" className="th_didivder">
                          Price
                          <span className="filter-order-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="13"
                              viewBox="0 0 11 13"
                            >
                              <g
                                id="Group_22146"
                                data-name="Group 22146"
                                transform="translate(-501 -126.5)"
                              >
                                <path
                                  id="Icon_ionic-md-arrow-dropdown"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,13.5,14.5,19,20,13.5Z"
                                  transform="translate(492 120.5)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                                <path
                                  id="Icon_ionic-md-arrow-dropdown-2"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,19l5.5-5.5L20,19Z"
                                  transform="translate(492 113)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </th>
                        <th scope="col" className="th_didivder">
                          Stock
                          <span className="filter-order-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="13"
                              viewBox="0 0 11 13"
                            >
                              <g
                                id="Group_22146"
                                data-name="Group 22146"
                                transform="translate(-501 -126.5)"
                              >
                                <path
                                  id="Icon_ionic-md-arrow-dropdown"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,13.5,14.5,19,20,13.5Z"
                                  transform="translate(492 120.5)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                                <path
                                  id="Icon_ionic-md-arrow-dropdown-2"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,19l5.5-5.5L20,19Z"
                                  transform="translate(492 113)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </th>
                        <th scope="col" className="th_didivder">
                          Status
                          <span className="filter-order-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="13"
                              viewBox="0 0 11 13"
                            >
                              <g
                                id="Group_22146"
                                data-name="Group 22146"
                                transform="translate(-501 -126.5)"
                              >
                                <path
                                  id="Icon_ionic-md-arrow-dropdown"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,13.5,14.5,19,20,13.5Z"
                                  transform="translate(492 120.5)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                                <path
                                  id="Icon_ionic-md-arrow-dropdown-2"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,19l5.5-5.5L20,19Z"
                                  transform="translate(492 113)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </th>
                        <th scope="col" className="th_didivder">
                          Action
                          <span className="filter-order-link">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11"
                              height="13"
                              viewBox="0 0 11 13"
                            >
                              <g
                                id="Group_22146"
                                data-name="Group 22146"
                                transform="translate(-501 -126.5)"
                              >
                                <path
                                  id="Icon_ionic-md-arrow-dropdown"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,13.5,14.5,19,20,13.5Z"
                                  transform="translate(492 120.5)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                                <path
                                  id="Icon_ionic-md-arrow-dropdown-2"
                                  data-name="Icon ionic-md-arrow-dropdown"
                                  d="M9,19l5.5-5.5L20,19Z"
                                  transform="translate(492 113)"
                                  fill="rgba(69,85,96,0.2)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList
                        .filter((product) =>
                          product.productName
                            .toLowerCase()
                            .includes(searchKeyword.toLowerCase())
                        )
                        .filter(
                          (product) =>
                            selectedCategory === "All" ||
                            product.category === selectedCategory
                        )
                        .map((product, index) => (
                          <tr key={toString(product.id)}>
                            <td>
                              <label className="checkbox_container text-uppercase">
                                {product.id}
                              </label>
                            </td>
                            <td>
                              <div className="media align-items-center">
                                <div className="product_thumb">
                                  <img
                                    src={product.variation[0].productImage}
                                    alt="Images"
                                  />
                                </div>
                                <div className="media-body product_des">
                                  <h6 className="product_name">
                                    {product.productName}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td className="text_primary">{product.category}</td>
                            <td>${product.variation[0].price}</td>
                            <td>{product.variation[0].stock}</td>
                            <td>{product.status}</td>
                            <td className="actions">
                              <div
                                className={`dropdown dropdown_wrapper ${
                                  toggle === index ? "show" : ""
                                }`}
                              >
                                <button
                                  className="dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  onClick={() => handleToggle(index)}
                                >
                                  <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                    alt="Donts"
                                  />
                                </button>
                                <div
                                  className={`dropdown-menu dropdown-menu-right ${
                                    toggle === index ? "show" : ""
                                  }`}
                                >
                                  <Link
                                    className="dropdown-item"
                                    to={`/editproduct/${product.id}`}
                                  >
                                    Edit Product
                                  </Link>
                                  <button className="dropdown-item" onClick={() => handleDelete(product.id)}>
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <footer className="site_footer">
              <div className="copy-text-wrapper">
                Copyright 2023 bitcot All rights reserved.
              </div>
              <div className="footer-links-wrapper">
                <Link>Terms &amp; Conditions </Link> <span class="mx-2">|</span>
                <Link>Privacy Policy </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
