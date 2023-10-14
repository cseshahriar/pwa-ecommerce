import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, Navigate } from 'react-router-dom'
import Login from "../../assets/images/login.png";

import AppURL from '../../api/AppURL';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


class UserLogin extends Component {
  constructor() {
    super();

    this.state={
      email: '',
      password: '',
      message: '',
      loggedIn: false
    }

  }
  
  componentDidMount() {
    window.scroll(0,0);
    // if already logged in 
  }

  formSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(AppURL.userLogin, data)
    .then(response => {
      // response
      console.log(response.data);
      localStorage.setItem('token', response.data.token)
      this.setState({loggedIn: true})

      toast.success("Login Successfully",{
        position: "bottom-center"
      });
    })
    .catch(error => {
      toast.error(error,{
        position: "bottom-center"
      });
    })
  }

  
  render() {
    // check already logged in
    let token = localStorage.getItem('token')
    if(token) {
      toast.success("You are already logged in",{
        position: "bottom-center"
      });
      return <Navigate to={"/profile"} />;
    }

    // after login redirect to profile page
    if(this.state.loggedIn  === true) {
      return <Navigate to={"/profile"} />;
    }

    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> USER SING IN </h4>
                    <input
                      onChange={
                        (e) => this.setState(
                          {
                            email: e.target.value
                          }
                        )
                      } 
                      className="form-control m-2" type="email" placeholder="Enter Your Email" />
                    <input
                      onChange={
                        (e) => this.setState(
                          {
                            password: e.target.value
                          }
                        )
                      } 
                    className="form-control m-2" type="password" placeholder="Enter Your Password" />
                    <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>

                    <br></br> <br></br>
                    <hr />
                    <p> <b> Forget Password? </b><Link><b> Forget Password </b> </Link> </p>

                    <p> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>

                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={Login} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer/>
      </Fragment>
    );
  }
}

export default UserLogin;
