import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SuggestedProduct from "../components/ProductDetails/SuggestedProduct";
import SliderLoading from "../components/PlaceHolder/SliderLoading";

import AppURL from "../api/AppURL";
import withRouter from "../withRouter";
import axios from "axios";

class ProductDetailsPage extends Component {
  constructor() {
    super();

     // state
     this.state = {
          id: null,
          ProductData: [],
          isLoading: "",
          mainDiv: "d-none",
    };
  }

  componentDidMount() {
     window.scroll(0, 0);
     
     const id = this.props.params.id;
     this.setState({ id: parseInt(id) });
     
     axios
      .get(AppURL.getProductDetails(id))
      .then((response) => {
          console.log('ProductDetailsPage', response.data);
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  render() {
     if (this.state.mainDiv == "d-none") {
          return (
               <Fragment>
                    <div className="Desktop">
                         <NavMenuDesktop />
                    </div>

                    <div className="Mobile">
                         <NavMenuMobile />
                    </div>

                    <SliderLoading isLoading={this.state.isLoading} />

                    <div className="Desktop">
                         <FooterDesktop />
                    </div>

                    <div className="Mobile">
                         <FooterMobile />
                    </div>
          </Fragment>
          );
    } else {
          return (
               <Fragment>
                    <div className="Desktop">
                         <NavMenuDesktop />
                    </div>

                    <div className="Mobile">
                         <NavMenuMobile />
                    </div>

                    <ProductDetails data={this.state.ProductData} />
                    <SuggestedProduct />

                    <div className="Desktop">
                         <FooterDesktop />
                    </div>

                    <div className="Mobile">
                         <FooterMobile />
                    </div>
               </Fragment>
      );
    }
  }
}

export default withRouter(ProductDetailsPage);
