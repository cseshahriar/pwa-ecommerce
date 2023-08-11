import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// components import
import HomeSlider from "./HomeSlider";
import MegaMenu from "./MegaMenu";
import SliderLoading from '../PlaceHolder/SliderLoading';

import AppURL from '../../api/AppURL';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';


class HomeTop extends Component {
  
  constructor(){
    super();

    // state
    this.state ={
      categories: [],
      sliders: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount(){
      // get categories
      axios.get(AppURL.getCategories).then(response =>{ 
        this.setState({categories:response.data});
      }).catch(error=>{
        toast.error("Something Went Wrong",{
          position: "bottom-center"
        });
      });

      // get sliders
      axios.get(AppURL.getHomeSliders).then(response => { 
        this.setState({
            sliders:response.data, isLoading:"d-none", mainDiv:" "
          }
        );
      }).catch(error=>{});
  }

  render() {
    return (
      <Fragment>
        <SliderLoading isLoading={this.state.isLoading} />
        
        <div className={this.state.mainDiv}>
          <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row>
              <Col lg={3} md={3} sm={12}>
                <MegaMenu data={this.state.categories} />
              </Col>

              <Col lg={9} md={9} sm={12}>
                <HomeSlider sliders={this.state.sliders} />
              </Col>
            </Row>
          </Container>
        </div>

        <ToastContainer />
      </Fragment>
    );
  }
}

export default HomeTop;
