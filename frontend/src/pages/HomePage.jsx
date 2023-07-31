import React, { Component, Fragment } from 'react'

// Components imports
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <NavMenuDesktop/>
          <HomeTop />
          <FeaturedProducts />
          <NewArrival />
          <Categories />
          <Collection />
      </Fragment>
    )
  }
}

export default HomePage