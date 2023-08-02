import React, { Component, Fragment } from 'react'

// Components imports
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

import AppURL from '../api/AppURL'
import axios from 'axios'

class HomePage extends Component {
  // create and get visitor details
  GetVisitorDetails =() => {
    try{
      axios.get(AppURL.VisitorDetails).then().catch()
    } catch(error) {
      console.error('Error:', error.message);
    }
  }

  componentDidMount() {
    window.scroll(0,0);
    this.GetVisitorDetails();
  }


  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
            <NavMenuMobile />  
            <HomeTopMobile />
        </div>  

          <FeaturedProducts />
          <NewArrival />
          <Categories />
          <Collection />

          <div className="Desktop">
            <FooterDesktop/>
          </div>

          <div className="Mobile">
              <FooterMobile/>
          </div>

      </Fragment>
    )
  }
}

export default HomePage