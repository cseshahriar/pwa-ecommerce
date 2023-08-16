import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

import AppURL from "../../api/AppURL";
import axios from 'axios'

class Notification extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      isLoading : '',
      mainDiv : 'd-none',
      notifications : [],
      message:"",
      title:"",
      date:"",
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show:true });
    let message = event.target.getAttribute("data-message");
    let title = event.target.getAttribute("data-title");
    let date = event.target.getAttribute("data-date");
    this.setState({
      message: message,
      title: title,
      date: date
    })
  };

  componentDidMount() {
    axios.get(AppURL.getNotifications)
    .then(response => {
         this.setState({
              notifications : response.data, 
              isLoading : 'd-none',
              mainDiv : ''
         })
    })
    .catch(error => {
         console.log('notification api errors ', error);
    })
  }

  render() {
    const NotificationList = this.state.notifications;
    const notificationView = NotificationList.map((notification, i)=>{
      return   <Col key={i} className="p-1 " md={6} lg={6} sm={12} xs={12}>
          <Card onClick={this.handleShow} className="notification-card">
            <Card.Body>
                <h6>{notification.title}</h6>
                <p className="py-1  px-0 text-primary m-0">
                  <i className="fa  fa-bell"></i>   Date: {notification.date} | Status: Unread</p>
                <Button 
                  data-title={notification.title}
                  data-date={notification.date}
                  data-message={notification.message}
                  className="btn btn-danger">Details 
                </Button>
            </Card.Body>
            </Card>
        </Col>
        })

    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
            { notificationView }
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6><i className="fa fa-bell"></i> Date: {this.state.date}</h6>
          </Modal.Header>
          <Modal.Body>
            <h6> {this.state.title}</h6>
            {this.state.message}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
