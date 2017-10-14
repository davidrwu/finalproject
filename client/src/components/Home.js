import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getMyData } from '../utils/API';
import styled from 'styled-components';

const Image = styled.img`
  width: 70%;
`;

class Home extends Component {
  

constructor() {
    super()
    this.state = { me: [] };
  }

  getProfile() {
    getMyData().then((me) => {
      this.setState({ me });
    });
  }

  componentDidMount() {
    this.getProfile();
  }

  render() {

    const { me }  = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Travel Guru</h3>
        <hr/>
          <div className="text-center">
          <Image src={require('../assets/flight.JPG')} alt="flight"/>
          </div>
      </div>
    );
  }
}

export default Home;
