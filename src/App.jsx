import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminHome from './Admin/homepage/AdminHome';
import Adnavbar from './Admin/Adnavbar/Adnavbar';
import Adminorders from './Admin/Adminorders/Adminorders';
import Adminprofile from './Admin/Adminprofile/Adminprofile';
import Searchproducts from './screens/searchproducts/Searchproducts';
import ProductAddPage from './Admin/AdminProducts/Productadd';
import UserManagement from './Admin/AdminUserman/UserManagement';

import SignUp from './LogSin/SignUp';
import Login from './LogSin/Login';
import Navbar from './screens/navbar/Navbar';
import HomePage from './screens/Homepage/HomePage';
import ProductList from './screens/Productscreens/ProductList';
import Cart from './screens/Productscreens/Cart';
import Orderdetails from './screens/Order/Orderdetails';
import ProfilePage from './screens/profiledetails/ProfilePage';
import Orderhistory from './screens/Order/Orderhistory';
import Userhistory from './Admin/AdminUserman/Userhistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/prodlist" element={<ProductList />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adprod" element={<ProductAddPage />} />
        <Route path="/orderdet" element={<Orderdetails />} />
        <Route path="/myorders" element={<Orderhistory />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/adhome" element={<AdminHome />} />
        <Route path="/adnavbar" element={<Adnavbar />} />
        <Route path="/adorders" element={<Adminorders />} />
        <Route path="/adprof" element={<Adminprofile />} />
        <Route path="/seprodlist" element={<Searchproducts />} />
        <Route path="/userman" element={<UserManagement />} />
        <Route path="/aduserhis" element={<Userhistory />} />

      </Routes>
    </Router>
  );
};

export default App;
