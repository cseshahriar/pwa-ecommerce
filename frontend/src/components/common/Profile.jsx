import React, { Component } from "react";
import { Fragment } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state={
      user: null
    }
  }

  componentDidMount() {
  }

  render() {
    let name;
    let email;
    if(this.props.user) {
      name = this.props.user.name;
      email = this.props.user.name;
    }
    console.log('name', name);
  
    return (
      <Fragment>
        <div className="container py-5">
          <h1> User Profile Page </h1>
          <ul className="list-group">
            <li className="list-group-item">Name :  {name}</li>
            <li className="list-group-item">Email :  {email}</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Profile;