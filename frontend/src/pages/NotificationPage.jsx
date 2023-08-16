import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'

// components
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Notification from '../components/Notification/Notification'

import AppURL from '../api/AppURL'
import axios from 'axios'


class NotificationPage extends Component {
     componentDidMount() {
          window.scroll(0,0);
     }

     render() {
          return (
            <Fragment> 
               <div className="Desktop">
                    <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
                    <NavMenuMobile />  
               </div>                       

               <Notification /> 

               <div className="Desktop">
                    <FooterDesktop/>
               </div>

               <div className="Mobile">
                    <FooterMobile/>
               </div>

            </Fragment>
          )
     }
}

export default NotificationPage