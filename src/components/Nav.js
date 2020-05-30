import React from 'react';
import { Link } from 'react-router-dom';
//import './Landing.css';
//import Navbar from 'react-bootstrap/Navbar';

class Nav extends React.Component {
  
  render() {

    return (
      <div >
            <Link className="nav-link"
              to="/signup"
              className="navbar-brand"
              style={{ float: 'right', marginRight: 50, color : "white", fontSize:17, marginTop: 4 }}
            >Sign up
            </Link>
            <Link className="nav-link"
              to="/signin"
              className="navbar-brand"
              style={{ float: 'right', marginRight: 40, color : "white"  }}
            ><button type="button" class="btn btn-warning btn-circle btn-xl">Sign in</button>
            </Link>
            

      </div>
    );
  }
}

export default Nav;
