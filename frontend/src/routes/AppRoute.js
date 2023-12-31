import React, { Component, Fragment } from 'react'
// router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';

import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';

import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';

import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';

import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';

import axios from 'axios'
import AppURL from '../../src/api/AppURL';
import NavMenuDesktop from '../components/common/NavMenuDesktop';

class AppRoute extends Component {
  constructor() {
    super();
    this.state={
      user:{}
    }
  }

  setUser = (user) => {
    this.setState({user: user})
  }

  componentDidMount() {
    axios.get(AppURL.user).then(response =>{
      this.setUser(response.data);
    }).catch(error=> {
    });
  }

  render() {
    return (
       <Fragment>
            <BrowserRouter>
                <NavMenuDesktop user={this.user} setUser={this.setUser} />
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/login" element={<UserLoginPage/>} />
                    <Route path="/register" element={<RegisterPage  /> } />
                    <Route path="/forget" element={<ForgetPasswordPage /> } />
                    <Route path="/reset/:id" element={<ResetPasswordPage /> } />
                    <Route 
                      path="/profile"
                      element={<ProfilePage user={this.user} setUser={this.setUser} 
                    /> } />

                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/purchase" element={<PurchasePage/>} />
                    <Route path="/privacy" element={<PrivacyPage/>} />
                    <Route path="/refund" element={<RefundPage/>} />
                    <Route path="/about" element={<AboutPage/>} />

                    <Route path="/productdetails/:id" element={<ProductDetailsPage/>} />
                    <Route path="/productcategory/:category" element={<ProductCategoryPage/>} />
                    <Route 
                      path="/products/subcategory/:category/:subcategory" 
                      element={<ProductSubCategoryPage/>} 
                    />
                    <Route 
                      path="/productbysearch/:searchKey" 
                      element={<SearchPage/>} 
                    />

                    <Route path="/notification" element={<NotificationPage/>} />
                    <Route path="/favourite" element={<FavouritePage/>} />
                    <Route path="/cart" element={<CartPage/>} />


                </Routes>
            </BrowserRouter>
       </Fragment>
    )
  }
}

export default AppRoute