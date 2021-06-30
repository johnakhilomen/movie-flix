import React, {Component} from 'react';
import { useState } from 'react';
import axios from 'axios';

import { UserFavoriteMovies } from '../user-favorite-movies/user-favorite-movies';

import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { match } from 'micromatch';

import './user-view.scss';

export class UserView extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      movies: [],
      favMovies: [],
      disableForm: "disabled",
      name: "",
      username: "",
      birthdate: "",
      email: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  // componentDidMount() {
  //   let accessToken = localStorage.getItem('token');
  //   if (accessToken !== null) {
  //     this.setState({
  //       user: JSON.parse(localStorage.getItem('user')),
  //     });
  //     this.getMovies(accessToken);
  //   }
  // }

  handleUserInput(evt) {
  this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  enableForm()
  {
    this.setState({
      disableForm: ""
    })
  }
  render() {
    const { user, onBackClick, favMovies } = this.props;
    console.log('user-render: ' + favMovies);
    return (
      <Row>
        <Col>
          <Card.Body>
            <h2>User Info:</h2>
            <Card.Text>Name:  
              <input name="name" type="text" placeholder={user.Name} value={this.state.name} disabled={this.state.disableForm}
              ref="searchStringInput"
              onChange={this.handleUserInput}></input>
           </Card.Text>
            <Card.Text>Username: <input name="username" type="text" value={this.state.username} placeholder={user.Username} disabled={this.state.disableForm} onChange={this.handleUserInput}></input></Card.Text>
            <Card.Text>Email: <input name="email" type="text" value={this.state.email} placeholder={user.Email} disabled={this.state.disableForm} onChange={this.handleUserInput}></input></Card.Text>
            <Card.Text>Birthdate: <input name="birthdate" type="text" value={this.state.birthdate} placeholder={user.Birthdate} disabled={this.state.disableForm} onChange={this.handleUserInput}></input></Card.Text>
            <Card.Text><button type="button" onClick={()=>this.enableForm()}> Edit</button> </Card.Text>
            <Card.Text><button>Save</button> </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    );
  }
}
