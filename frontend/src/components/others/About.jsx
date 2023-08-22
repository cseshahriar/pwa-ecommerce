import React, { Component, Fragment } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import AppURL from '../../api/AppURL';
import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'; 

class About extends Component {

  constructor() {
    super();
    
    this.state = {
      about: "",
      loaderDiv:"",
      mainDiv:"d-none"
    };
  }

  componentDidMount() {
    axios.get(AppURL.getSiteInfo).then(response =>{
         let StatusCode = response.status;
         if(StatusCode == 200){
              let JsonData = (response.data);
              this.setState({
                about:JsonData.about, 
                loaderDiv:"d-none",
                mainDiv:""
              });
         } 

    }).catch(error=> {
      toast.error("Something Went Wrong",{
        position: "bottom-center"
      });

    });
}

  createMarkup = () => {
    return {__html: this.state.about};
  }

  render() {
    return (
      <Fragment>
        <Container>
          
          <div className="breadbody">
            <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="/about">About</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

              <div className={this.state.loaderDiv}>

                <div className="ph-item">
                  <div className="ph-col-12">        
                    <div className="ph-row">           
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div className="ph-item">
                  <div className="ph-col-12">        
                    <div className="ph-row">           
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">About Us Page </h4>
                <p className="section-title-contact" 
                  dangerouslySetInnerHTML={this.createMarkup()}>
                </p>
              </div>
          </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default About;
