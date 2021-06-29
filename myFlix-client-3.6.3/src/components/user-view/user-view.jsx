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
      disableForm: "disabled"
    };
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
            <Card.Text>Name:  <input id="name" type="text" value={user.Name} disabled={this.state.disableForm}></input>
           </Card.Text>
            <Card.Text>Username: <input id="name" type="text" value={user.Username} disabled={this.state.disableForm}></input></Card.Text>
            <Card.Text>Email: <input id="name" type="text" value={user.Email} disabled={this.state.disableForm}></input></Card.Text>
            <Card.Text>Birthdate: <input id="name" type="text" value={user.Birthdate} disabled={this.state.disableForm}></input></Card.Text>
            <Card.Text><button type="button" onClick={()=>this.enableForm()}> Edit</button> </Card.Text>
            <Card.Text><button>Save</button> </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    );
  }
}
