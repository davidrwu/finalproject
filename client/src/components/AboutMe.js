import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getMyData } from '../utils/API';

import Container from "./Container";


class AboutMe extends Component {

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
        <h3 className="text-center">About Me</h3>
        <hr/>
        <Container>
        { me.map((profile, index) => (
              <div className="col-sm-12" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> 
                    <span className="btn">{ profile.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { profile.profile } </p>
                    <p className="summary"> { profile.detail } </p>
                    <p> { profile.profile1 } </p>
                    <p className="summary"> { profile.detail1 } </p>
                    <p> { profile.profile2 } </p>
                    <p className="summary"> { profile.detail2 } </p>
                    <p > { profile.profile3 } </p>
                  </div>
                </div>
              </div>
          ))}

          <div className="col-sm-12">
            { isLoggedIn() ?
            <div className="jumbotron text-center">
              <h2>View Photos</h2>
              <Link className="btn btn-lg btn-success" to='/special'> Photos </Link>
            </div> : <div className="jumbotron text-center"><h2>Get Access to my Photos by Logging In</h2></div>
            }
          </div>
          </Container>
      </div>
    );
  }
}

export default AboutMe;
