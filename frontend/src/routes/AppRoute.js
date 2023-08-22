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

class AppRoute extends Component {
  
  render() {
    return (
       <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/login" element={<UserLoginPage/>} />
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