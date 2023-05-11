import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Product from './components/Product'
import EditProduct from './components/EditProduct';
import { useSelector } from "react-redux";

function App() {

  const userStatus = useSelector((state) => state.user);

  const UnauthorizedAccess = () => {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 ">
      <div className="container pb-5">
        <h1 className="mt-5">Unauthorized Access</h1>
        <p>Please log in or sign up to access this page</p>
        <div className="row pt-2">
          <div className="col-md-6">
            <Link to="/login" className="btn btn-primary mr-2">Login</Link>
            <Link to="/" className="btn btn-secondary">Sign Up</Link>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={userStatus === null ? <UnauthorizedAccess /> : <Product />} />
          <Route path="/addproduct" element={userStatus === null ? <UnauthorizedAccess /> : <AddProduct />} />
          <Route path="/editproduct/:id" element={userStatus === null ? <UnauthorizedAccess /> : <EditProduct />} />   
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
