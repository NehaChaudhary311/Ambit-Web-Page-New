import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class ProofReaderPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      //this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('Submitted: ' + this.state.value);
      //event.preventDefault();
    }
  
    render() {
        
      return (
        <div className = "proof-read-background">
          <Form onSubmit={this.handleSubmit} className ="proof-reader">
          <div align="left">
            <label>
              Check you English text for grammar, spelling, and punctuation errors with our free grammar checker.
            </label>
            <br></br>
            <div align="justify" >
              <textarea  rows="10" cols="110" placeholder="Write something here..."></textarea>
            </div>
                        <br></br>
            
            <Button variant="secondary" type="submit" value="Submit" href="/proofreaderresults">Proof Read</Button>
          </div>
            
        </Form>
        </div>
        
      );
    }
  }

  export default ProofReaderPage;