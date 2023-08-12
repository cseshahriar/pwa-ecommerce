import React, { Component } from "react";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

class SubCategory extends Component {
  render() {
    const { products, category, subCategory } = this.props;

    const productView = products.map((product, i) => {
      if (product.special_price == "na") {
        return (
          <Col key={i} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link to={"/productdetails/"+product.id}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={product.image} alt="" />
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
          <Col key={i} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Link to={"/productdetails/"+product.id}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={product.image} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">{product.title}</p>
                  <p className="product-price-on-card">
                    Price :{" "}
                    <strike className="text-secondary">${product.price}</strike> $
                    {product.special_price}
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
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              {" "}
              {category} / {subCategory}{" "}
            </h2>
          </div>
          <Row>{productView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SubCategory;
