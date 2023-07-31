import React, { Component, Fragment } from 'react'
// router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';

class AppRoute extends Component {
  
  render() {
    return (
       <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<UserLoginPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                </Routes>
            </BrowserRouter>
       </Fragment>
    )
  }
}

export default AppRoute