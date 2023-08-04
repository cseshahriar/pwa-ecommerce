import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";

import AppURL from '../../api/AppURL';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class HomeTop extends Component {
  
  constructor(){
    super();

    // state
    this.state ={
      categories: []
    }
  }

  componentDidMount(){
      axios.get(AppURL.getCategories).then(response =>{ 
            this.setState({categories:response.data});

      }).catch(error=>{
        toast.error("Something Went Wrong",{
          position: "bottom-center"
        });
      });
  }


  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.categories} />
            </Col>

            <Col lg={9} md={9} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default HomeTop;
