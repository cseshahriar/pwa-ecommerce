import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import CollectionLoading from '../PlaceHolder/CollectionLoading';

class Collection extends Component {
  constructor() {
    super();

    // state
    this.state = {
      products: [],
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.getProductByRemark("collection"))
      .then((response) => {
        this.setState({ 
          products: response.data, 
          isLoading:"d-none",
          mainDiv:" " 
        });
      })
      .catch((error) => {});
  }

  render() {
    const productView = this.state.products.map((product, i) => {
      if (product.special_price == "na") {
        return (
          <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link to={`/productdetails/${product.id}`}>
              <Card className="image-box card">
                <img
                  className="center"
                  src={product.image}
                  alt={product.title}
                />
                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price : ${product.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Link className="text-link" to={`/productdetails/${product.id}`}>
              <Card className="image-box card">
                <img
                  className="center"
                  src={product.image}
                  alt={product.title}
                />
                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price :{" "}
                    <strike className="text-secondary">${product.price}</strike>{" "}
                    ${product.special_price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <CollectionLoading  isLoading={this.state.isLoading} />

        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2> PRODUCT COLLECTION</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>{productView}</Row>
          </Container>
        </div>

        <ToastContainer />
      </Fragment>
    );
  }
}

export default Collection;
