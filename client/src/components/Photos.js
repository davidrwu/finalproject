import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getPrivateData } from '../utils/API';
import styled from 'styled-components';


const Image = styled.img`
  width: 33.33%;
`;

class Photos extends Component {

  constructor() {
    super();
    this.state = { me: [] };
  }

  getPhotos() {
    getPrivateData().then((me) => {
      this.setState({ me });
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {

    const { me } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Photos</h3>
        <hr/>
          <Image src={require('../assets/IMG_3536.JPG')}/>
          <Image src={require('../assets/IMG_0813.JPG')}/>
          <Image src={require('../assets/IMG_28321.jpg')}/>
          <Image src={require('../assets/IMG_0984.jpg')}/>
          <Image src={require('../assets/IMG_07311.jpg')}/>
          <Image src={require('../assets/IMG_24521.jpg')}/>
          <Image src={require('../assets/IMG_3433.JPG')}/>
          <Image src={require('../assets/IMG_10181.jpg')}/>
          <Image src={require('../assets/IMG_0972.JPG')}/>

      </div>
    );
  }
}

export default Photos;
