import React, { Component } from 'react'
import { Fragment } from 'react'
import axios from 'axios'
import AppURL from '../api/AppURL'

import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SubCategory from '../components/ProductDetails/SubCategory'

import withRouter from '../withRouter';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProductSubCategoryPage extends Component {
     constructor({match}){
          super();
          
          this.state = { 
            category:'',
            subCategory:'',
            products:[] 
          }
     }

    componentDidMount(){
        window.scroll(0,0)
        // alert(this.state.Category);
        
        const {category, subcategory} = this.props.params;
        this.setState({category:category})
        this.setState({subCategory:subcategory})
        const url =  AppURL.getProductBySubCategory(category, subcategory)
 
        axios.get(url).then(response =>{
            this.setState({products:response.data});         
        }).catch(error => {
            toast.error("Something Went Wrong", {
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

               <SubCategory 
                category={this.state.category} 
                subCategory={this.state.subCategory} 
                products={this.state.products} 
               />


               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

                <ToastContainer />
          </Fragment>
          )
     }
}


export default withRouter(ProductSubCategoryPage)