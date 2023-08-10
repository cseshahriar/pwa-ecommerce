import React, { Component } from 'react'
import { Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'

import AppURL from '../api/AppURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import withRouter from '../withRouter';

class ProductCategoryPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: '',
      products: [],
    };
  }

  componentDidMount() {
    window.scroll(0,0)

    const {category} = this.props.params;
    this.setState({category:category})
    console.log('category', category, this.state.category);
 
    axios.get(AppURL.getProductByCategory(category)).then(response =>{
        let StatusCode = response.status;
        if(StatusCode == 200){
          this.setState({products: response.data});
        } 
    }).catch(error=>{
      toast.error("Something Went Wrong",{
        position: "bottom-center"
      });
    });
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

                <Category category={this.state.category} products={this.state.products} /> 

                <div className="Desktop">
                  <FooterDesktop/>
                </div>

                <div className="Mobile">
                  <FooterMobile/>
                </div>
              <ToastContainer/>
          </Fragment>
          )
     }
}

export default withRouter(ProductCategoryPage)

// export default (props) => (
//   <ProductCategoryPage {...props} params={useParams()} /> 
// );