import React from 'react';
import { Link } from 'react-router-dom';
import ambit_logo from '../assets/images/Logo_Transparent.png';
import ambit_logo_text from '../assets/images/Logo_Text.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

class Nav extends React.Component {
  
  render() {

    return (
      <div >
          
            <Link className="nav-link"
              to="/"
              className="navbar-brand"
              style={{ marginRight: 50, marginTop: 4 , float: "left", marginLeft :5}}
            >
              <Col>
                <Row><img className="logo_ambit" src={ambit_logo} alt="logo" href="/" ></img></Row>
                <Row><img className="logo_ambit_text" src ={ambit_logo_text} alt="logo" href="/"></img></Row>
              </Col>
            
            </Link>
            <Link className="nav-link"
              to="/signup"
              className="navbar-brand"
              style={{ float: 'right', marginRight: 50, color : "white", fontSize:17, marginTop: 4 }}
            >Sign up
            </Link>

            <Link className="nav-link" to="/signin" className="navbar-brand" style={{ float: 'right', marginRight: 40, color : "white"  }}>
              <button type="button" class="btn btn-warning btn-circle btn-xl">Sign in</button>
            </Link>     

      </div>
    );
  }
}

export default Nav;
