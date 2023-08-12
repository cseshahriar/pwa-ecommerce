import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

class ProductDetails extends Component {
  constructor() {
    super();
  }

  imgOnClick(event) {
    let imgSrc = event.target.getAttribute("src");
    let previewImg = document.getElementById("previewImg");
    ReactDOM.findDOMNode(previewImg).setAttribute("src", imgSrc);
  }
  
  priceOption(price, special_price){
    if(special_price=="na") {
         return (
      <p className="product-price-on-card"> Price : {price}$ </p>
         )
    } else {

         return (
              <p className="product-price-on-card">
                Price : <strike className="text-secondary">{price}$ </strike> {special_price}$ 
                    </p>
         )

    }
  }

  render() {
    let ProductAllData = this.props.data;
    console.log("data len", ProductAllData.product.length);

    if (ProductAllData["product"].length !== 0) {
      let title = ProductAllData["product"][0]["title"];
      let brand = ProductAllData["product"][0]["brand"];
      let category = ProductAllData["product"][0]["category"];
      let subcategory = ProductAllData["product"][0]["subcategory"];
      let image = ProductAllData["product"][0]["image"];

      let price = ProductAllData["product"][0]["price"];
      let product_code = ProductAllData["product"][0]["product_code"];
      let remark = ProductAllData["product"][0]["remark"];
      let special_price = ProductAllData["product"][0]["special_price"];
      let star = ProductAllData["product"][0]["star"];

      let image_one = ProductAllData["details"][0]["image_one"];
      let image_two = ProductAllData["details"][0]["image_two"];
      let image_three = ProductAllData["details"][0]["image_three"];
      let image_four = ProductAllData["details"][0]["image_four"];
      let color = ProductAllData["details"][0]["color"];
      let size = ProductAllData["details"][0]["size"];

      let product_id = ProductAllData["details"][0]["product_id"];
      let short_description = ProductAllData["details"][0]["short_description"];
      let description = ProductAllData["details"][0]["description"];

      var colorDiv = "d-none";

      if (color != "na") {
        let ColorArray = color.split(",");
        var ColorOption = ColorArray.map((ColorList, i) => {
          return <option value={ColorList}> {ColorList} </option>;
        });
        colorDiv = "";
      } else {
        colorDiv = "d-none";
      }

      var sizeDiv = "d-none";
      if (size != "na") {
        let SizeArray = size.split(",");
        var SizeOption = SizeArray.map((SizeList, i) => {
          return <option value={SizeList}> {SizeList} </option>;
        });
        sizeDiv = "";
      } else {
        sizeDiv = "d-none";
      }

      return (
        <Fragment>
          <Container fluid={true} className="BetweenTwoSection">
            <Row className="p-2">
              <Col
                className="shadow-sm bg-white pb-3 mt-4"
                md={12}
                lg={12}
                sm={12}
                xs={12}
              >
                <Row>
                  <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                    <img
                      id="previewImg"
                      className="bigimage"
                      src={image_one}
                      alt=""
                    />
                    <Container className="my-3">
                      <Row>
                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img
                            onClick={this.imgOnClick}
                            className="w-100 smallimage product-sm-img"
                            src={image_one}
                            alt=""
                          />
                        </Col>
                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img
                            onClick={this.imgOnClick}
                            className="w-100 smallimage product-sm-img"
                            src={image_two}
                            alt=""
                          />
                        </Col>
                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img
                            onClick={this.imgOnClick}
                            className="w-100 smallimage product-sm-img"
                            src={image_three}
                            alt=""
                          />
                        </Col>
                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                          <img
                            onClick={this.imgOnClick}
                            className="w-100 smallimage product-sm-img"
                            src={image_four}
                            alt=""
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Col>

                  <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                    <h5 className="Product-Name">{title}</h5>
                    <h6 className="section-sub-title">{short_description}</h6>
                
                    { this.priceOption(price, special_price) }

                    <h6 className="mt-2">Category : <b>{category}</b>  </h6>          
                    <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>

                    <div className={colorDiv}>
                      <h6 className="mt-2"> Choose Color </h6>
                      <select className="form-control form-select">
                        <option>Choose Color</option>
                        {ColorOption}
                      </select>
                    </div>

                    <div className={sizeDiv}>
                      <h6 className="mt-2"> Choose Size </h6>
                      <select className="form-control form-select">
                        <option>Choose Size</option>
                        {SizeOption}
                      </select>
                    </div>

                    <div className="">
                      <h6 className="mt-2"> Choose Quantity </h6>
                      <select className="form-control form-select">
                        <option>Choose Quantity</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                      </select>
                    </div>

                    <h6 className="mt-2">Quantity</h6>
                    <input className="form-control text-center w-50" type="number" />

                    {/* actions */}
                    <div className="input-group mt-3">
                      <button className="btn site-btn m-1 ">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add To Cart
                      </button>
                      <button className="btn btn-primary m-1">
                        {" "}
                        <i className="fa fa-car"></i> Order Now
                      </button>
                      <button className="btn btn-primary m-1">
                        {" "}
                        <i className="fa fa-heart"></i> Favorite
                      </button>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="" md={6} lg={6} sm={12} xs={12}>
                    <h6 className="mt-2">DETAILS</h6>
                    <p>{description}</p>
                  </Col>


                  <Col className="" md={6} lg={6} sm={12} xs={12}>
                    <h6 className="mt-2">REVIEWS</h6>
                    <p className=" p-0 m-0">
                      <span className="Review-Title">Shahriar Hosen</span>{" "}
                      <span className="text-success">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>

                    <p className=" p-0 m-0">
                      <span className="Review-Title">Shahriar Hosen</span>{" "}
                      <span className="text-success">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>

                    <p className=" p-0 m-0">
                      <span className="Review-Title">Shahriar Hosen</span>{" "}
                      <span className="text-success">
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                        <i className="fa fa-star"></i>{" "}
                      </span>{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    } else {
      return (
        <h2 className="text-center text-danger py-3">Data din not found!</h2>
      );
    }
  }
}

export default ProductDetails;
