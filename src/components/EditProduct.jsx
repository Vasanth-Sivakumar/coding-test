import React from "react";
import "../css/main.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "../features/actions";

function EditProduct() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const selectedProduct = productList.find((product) => product.id === id);

    const image = selectedProduct.variation[0].productImage;

  
  const [activeTab, setActiveTab] = useState("general");
  const [productName, setProductName] = useState(selectedProduct.productName);
  const [category, setCategory] = useState(selectedProduct.category);
  const [status, setStatus] = useState(selectedProduct.status);
  const [price, setPrice] = useState(selectedProduct.variation[0].price);
  const [stock, setStock] = useState(selectedProduct.variation[0].stock);

  const navigate = useNavigate();
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const product = {
    id: selectedProduct.id,
    productName: productName,
    category: category,
    status: status,
    variation: [ {
      price: price,
      stock: stock,
      productImage: image
     }
    ]
  }

  const handleEditProduct = () => {
    dispatch(editProduct(product));
    navigate("/product");
  };

  return (
    <div className="app">
      <TopBar />
      <div className="page-wrapper">
        <SideBar />
        <div className="content-area-wrapper">
          <div className="content-area-wrapper">
            <form className="content-wrapper" onSubmit={handleEditProduct}>
              <div className="filter_wrapper  d-block d-sm-none">
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
                    />
                  </div>
                </div>
              </div>
              <div className="card nav_pills_card nav_pills_card_new">
                <div className="card-body">
                  <div className="heading_wrapper heading_right_content">
                    <h1 className="head_title">Edit Product</h1>
                    <div className="btn_wrapper">
                      <button
                        type="button"
                        className="theme-btn btn-outline-secondary"
                      >
                        Discard
                      </button>
                      <button
                        type="submit"
                        className="theme-btn theme-btn-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                  <ul
                    className="nav nav-pills pl-4 mb-0 nav_pills_wrapper"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "general" ? "active" : ""
                        }`}
                        id="pills-general-tab"
                        data-toggle="pill"
                        data-target="#pills-general"
                        type="button"
                        role="tab"
                        aria-controls="pills-general"
                        aria-selected="true"
                        onClick={() => handleTabClick("general")}
                      >
                        General
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "variation" ? "active" : ""
                        }`}
                        id="pills-variation-tab"
                        data-toggle="pill"
                        data-target="#pills-variation"
                        type="button"
                        role="tab"
                        aria-controls="pills-variation"
                        aria-selected="false"
                        onClick={() => handleTabClick("variation")}
                      >
                        Variation
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "general" ? "show active" : ""
                  }`}
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                >
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Basic Info</div>
                        <div className="form-group">
                          <label for="productName">
                            <span className="text-danger">*</span> Product Name
                          </label>
                          <input
                            type="name"
                            name="productName"
                            className="form-control"
                            id="productName"
                            value={productName}
                            onChange={(event) =>
                              setProductName(event.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label for="Description">Description</label>
                          <textarea
                            type="text"
                            id="Description"
                            className="form-control"
                            name="description"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Stock & Pricing</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="price">
                                <span className="text-danger">*</span> Price
                              </label>
                              <input
                                type="text"
                                name="price"
                                className="form-control"
                                id="price"
                                value={price}
                                onChange={(event) =>
                                  setPrice(event.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="comparePrice">
                                <span className="text-danger">*</span> Stock
                              </label>
                              <input
                                type="text"
                                name="comparePrice"
                                className="form-control"
                                id="comparePrice"
                                value={stock}
                                onChange={(event) =>
                                  setStock(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for=" costPerItem">Cost per item</label>
                              <input
                                type="text"
                                name="costPerItem"
                                className="form-control"
                                id="costPerItem"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="taxRate">Tax rate</label>
                              <input
                                type="text"
                                name="taxRate"
                                className="form-control"
                                id="taxRate"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Organization</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="productName">
                                <span className="text-danger">*</span> Category
                              </label>
                              <select
                                className="form-control"
                                id="productName"
                                value={category}
                                onChange={(event) =>
                                  setCategory(event.target.value)
                                }
                              >
                                <option value="">Select</option>
                                <option value="clothe">Clothe</option>
                                <option value="bags">Bags</option>
                                <option value="shoes">Shoes</option>
                                <option value="watches">Watches</option>
                                <option value="device">Devices</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="Description">
                                <span className="text-danger">*</span> Status
                              </label>
                              <select
                                className="form-control"
                                id="productName"
                                value={status}
                                onChange={(event) =>
                                  setStatus(event.target.value)
                                }
                              >
                                <option value="">Select</option>
                                <option value="In stock">In stock</option>
                                <option value="Limited stock">
                                  Limited stock
                                </option>
                                <option value="Out of stock">
                                  Out of stock
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "variation" ? "show active" : ""
                  }`}
                  id="pills-variation"
                  role="tabpanel"
                  aria-labelledby="pills-variation-tab"
                >
                  <div className="card nav_pills_card">
                    <div className="card-body">
                      <div>
                        <div className="form-title">Variants</div>
                        <p>
                          Add A Custome Variat Options For Your Product, Like
                          Different Sizes Or Colors.
                        </p>
                        <div className="">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group">
                                <label for=" productName">
                                  <span className="text-danger">*</span> Variant
                                </label>
                                <input
                                  type="text"
                                  name="variant"
                                  className="form-control"
                                  id="productName"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label for=" productName">
                                  <span className="text-danger">*</span> Price
                                </label>
                                <input
                                  type="text"
                                  name="variantPrice"
                                  className="form-control"
                                  id="productName"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label for=" productName">
                                  <span className="text-danger">*</span> Stock
                                  keeping unit
                                </label>
                                <input
                                  type="text"
                                  name="variantPrice"
                                  className="form-control"
                                  id="productName"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group uploader-wrapper">
                          <label for="Description">
                            <span className="text-danger">*</span> Upload Image
                          </label>
                          <div className="uploader-wrapper-inner">
                            <img
                              src="../../images/thumbnails/picture.svg"
                              alt="pictures"
                            />
                            <input type="file" />
                            Click or drag file to upload
                          </div>
                        </div>

                        <div className="isMinus">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group">
                                <label for=" productName">
                                  <span className="text-danger">*</span> Variant
                                </label>
                                <input
                                  type="text"
                                  name="variant"
                                  className="form-control"
                                  id="productName"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label for=" productName">
                                  <span className="text-danger">*</span> Price
                                </label>
                                <input
                                  type="text"
                                  name="variantPrice"
                                  className="form-control"
                                  id="productName"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label for=" productName">
                                  <span className="text-danger">*</span> Stock
                                  keeping unit
                                </label>
                                <input
                                  type="text"
                                  name="variantPrice"
                                  className="form-control"
                                  id="productName"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <span className="removeSpan">-</span>
                        </div>
                        <div className="form-group uploader-wrapper">
                          <label for="Description">
                            <span className="text-danger">*</span> Upload Image
                          </label>
                          <div className="uploader-wrapper-inner">
                            <img
                              src="../../images/thumbnails/picture.svg"
                              alt="pictures"
                            />
                            <input type="file" />
                            Click or drag file to upload
                          </div>
                        </div>
                        <button className="uploader-add-btne" type="button">
                          Add field
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <footer className="site_footer">
            <div className="copy-text-wrapper">
              Copyright 2023 bitcot All rights reserved.
            </div>
            <div className="footer-links-wrapper">
              <Link>Terms &amp; Conditions </Link>{" "}
              <span className="mx-2">|</span>
              <Link>Privacy Policy </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
