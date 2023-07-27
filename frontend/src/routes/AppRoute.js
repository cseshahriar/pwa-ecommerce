import React, { Component, Fragment } from 'react'
// router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import HomePage from '../pages/HomePage';

class AppRoute extends Component {
  
  render() {
    return (
       <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
       </Fragment>
    )
  }
}

export default AppRoute