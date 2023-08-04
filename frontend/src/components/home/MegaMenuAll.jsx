import React, { Component } from "react";
import AppURL from '../../api/AppURL';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class MegaMenuAll extends Component {
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

  MenuItemClick = (event) => {
    event.target.classList.toggle("active");
    let panel = event.target.nextElementSibling;
    if(panel.style.maxHeight){
         panel.style.maxHeight = null;
    }else{
         panel.style.maxHeight= panel.scrollHeight+ "px"
    }
  }

  render() {
    
    // generate categoriesView
    // generate categoriesView
    const categoriesView = this.state.categories.map((category, i) => {
      return <div key={i}>
         <button onClick={this.MenuItemClick} className="accordionAll">
            <img
              alt={category.category_name}
              className="accordionMenuIconAll"
              src={category.category_image}
            />
            &nbsp; {category.category_name}
          </button>

          <div className="panelAll">
            <ul>
              {
                category.sub_categories.map((subcategory, i) => {
                  return <li key={i}><a href={`/${subcategory.subcategory_name}/${subcategory.id}`} className="accordionItem">{subcategory.subcategory_name}</a></li>
                })
              }
            </ul>
          </div>

      </div>;
    })

    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          {categoriesView}
        </div>
      </div>
    );
  }
}

export default MegaMenuAll;
