import React, { Component, Fragment } from "react";
import HomeSlider from "./HomeSlider";
import { Container, Row, Col } from "react-bootstrap";

import AppURL from '../../api/AppURL';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';

class HomeTopMobile extends Component {

  constructor(){
    super();

    // state
    this.state ={
      categories: [],
      sliders: []
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

      axios.get(AppURL.getHomeSliders).then(response =>{ 
        this.setState({sliders:response.data});
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
          <Row className="p-0 m-0 overflow-hidden">
            <Col lg={12} md={12} sm={12}>
              <HomeSlider sliders={this.state.sliders} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTopMobile;
