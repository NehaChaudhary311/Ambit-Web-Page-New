import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';


//import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import ProofReaderPage from './pages/ProofReaderPage';
import ProofReaderResultsPage from './pages/ProofReaderResultsPage';



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ambit',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Welcome'
          },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
  render() {
    return (
      <div>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} style={{width:100}} />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <Router>
    
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/signin" render={() => <SigninPage />} />
          <Route path="/signup" render={() => <SignupPage />} />
          <Route path="/proofreader" render={() => <ProofReaderPage />} />
          <Route path="/proofreaderresults" render={() => <ProofReaderResultsPage />}/>
      </Router>

      </div>
      
    );
  }
}

export default App;
