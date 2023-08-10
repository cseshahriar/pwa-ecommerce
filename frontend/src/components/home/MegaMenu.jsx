import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MegaMenu extends Component {

  constructor(props) {
    super();
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
    // get categories from props
    const categories = this.props.data; // data is props name
    
    // generate categoriesView
    const categoriesView = categories.map((category, i) => {
      return <div key={i}>
         <button onClick={this.MenuItemClick} className="accordion">
            <img
              alt={category.category_name}
              className="accordionMenuIcon"
              src={category.category_image}
            />
            &nbsp; {category.category_name}
          </button>

          <div className="panel">
            <ul>
              {
                category.sub_categories.map((subcategory, i) => {
                  return <li key={i}>
                    <Link 
                      to={`/products/subcategory/${category.category_name}/${subcategory.subcategory_name}`}
                      className="accordionItem" >{subcategory.subcategory_name} </Link>
                    </li>
                })
              }
            </ul>
          </div>

      </div>;
    })


    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          {categoriesView}
        </div>
      </div>
    );
  }
}

export default MegaMenu;
