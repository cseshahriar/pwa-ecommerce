import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import AppURL from '../../api/AppURL';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';

import CategoryLoading from '../PlaceHolder/CategoryLoading';

class Categories extends Component {
  constructor(){
    super();
    // state
    this.state ={
      categories: [],
      isLoading:"",
      mainDiv:"d-none"
    }
  }

  componentDidMount(){
    axios.get(AppURL.getCategories).then(response =>{ 
          this.setState({
            categories:response.data,
            isLoading:"d-none",
            mainDiv:" "
          });

    }).catch(error=>{});
  }

  render() {
       // generate categoriesView
       const categoriesView =  this.state.categories.map((category, i) => {
        return <Col key={i.toString()} className="p-0 mb-3" xl={2} lg={2} md={2} sm={6} xs={6}>
           <Link className="text-link" to={"/productcategory/"+category.category_name}>   
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img
                className="center"
                src={category.category_image}
                alt={category.category_name}
              />
              <h5 className="category-name">{category.category_name}</h5>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      })

    return (
      <Fragment>
        <CategoryLoading isLoading={this.state.isLoading} />

        <div className={this.state.mainDiv}>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            {categoriesView}
          </Row>
        </Container>
        </div>
        
        <ToastContainer />

      </Fragment>
    );
  }
}

export default Categories;
