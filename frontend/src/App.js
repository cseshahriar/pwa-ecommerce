import React, { Component, Fragment } from 'react'
import AppRoute from './routes/AppRoute';

export class App extends Component {
  render() {
    return (
     <Fragment>
        <AppRoute />
     </Fragment>
    )
  }
}

export default App