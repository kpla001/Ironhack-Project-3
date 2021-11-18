import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "./Profile.css";
import service from "../../services/service";
import Ingredients from "../Ingredients/Ingredients";
import Recipe from "../Recipe/Recipe";
import Cookbooks from "../Cookbooks/Cookbooks";
import UserCookbooks from "../UserCookBook/userCookbooks";

export default class Profile extends Component {
  state = {
    ingredients: [],
    recipes: [],
    cookbooks: [],
    isOpenModal: false,
    cookbookName: "",
    description: "",
  };

  componentDidMount() {
    service.getUserCookBooksById(this.props.user._id).then((data) => {
      // console.log("This is our data ------------------------", data);
      // console.log("Props: ====================", this.props);
      this.setState({ cookbooks: data.user.cookbooks });
    });
  }

  handleModal = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal }, () => {
      console.log(this.state);
    });
  };

  handleOnInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name);

    this.setState({ [name]: value }, () => console.log(this.state));
  };

  handleOnSubmit = () => {
    const { cookbookName, description } = this.state;
    const { _id } = this.props.user;

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/cookbooks`, {
        title: cookbookName,
        author: _id,
        description: description,
      })
      .then((response) => {
        const { data } = response;
        this.setState({ cookbooks: data.cookbooks });
      })
      .then(this.handleModal);
  };

  handleDelete = (cookbook) => {
    service.deleteCookbook(cookbook._id).then(() => {
      const cookbooks = this.state.cookbooks.filter(
        (b) => b._id !== cookbook._id
      );
      this.setState({ cookbooks: cookbooks });
    });
  };

  render() {
    // console.log(this.props.user);
    //------------------------------------Line 49 link needs title{this.props.cookbooks.title}
    return (
      <div>
        <main className="container">
          <UserCookbooks
            cookbooks={this.state.cookbooks}
            handleDelete={this.handleDelete}
          />
          <h1>Welcome, {this.props.user.username}</h1>
          <div className="userCookbooks">
            Cookbooks:
            <br></br>
            <button onClick={this.saveCookBookToDb}>Make a Cookbook</button>
          </div>

          <Button
            variant="primary"
            style={{ backgroundColor: "#299640" }}
            onClick={this.handleModal}
          >
            <b>Create New CookBook</b>
          </Button>

          <Modal show={this.state.isOpenModal} onHide={this.handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create a CookBook</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form id="create-a-cookbook">
                <Form.Group className="mb-3" controlId="cookbookForm">
                  <Form.Label>Cookbook Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="cookbookName"
                    placeholder="Cookbook Name"
                    onChange={this.handleOnInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cookbookForm">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleOnInputChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModal}>
                Close
              </Button>

              <Button onClick={this.handleOnSubmit}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </main>
        {/* <Cookbooks cookbooks={this.state.cookbooks} /> */}
      </div>
    );
  }
}
