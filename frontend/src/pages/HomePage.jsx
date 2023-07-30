import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Components imports
import FeaturedProducts from '../components/home/FeaturedProducts'

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <FeaturedProducts />
      </Fragment>
    )
  }
}

export default HomePage