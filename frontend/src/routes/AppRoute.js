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
                </Routes>
            </BrowserRouter>
       </Fragment>
    )
  }
}

export default AppRoute