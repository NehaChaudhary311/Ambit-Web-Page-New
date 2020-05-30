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
        <Form onSubmit={this.handleSubmit} className ="proof-reader">
          <label>
            Check you English text for grammar, spelling, and punctuation errors with our free grammar checker.
        </label>
            <br></br>
            <textarea cols ="100" rows="12" value={this.state.value} onChange={this.handleChange} />
            <br></br>
          <Button type="submit" value="Submit" href="/proofreaderresults">Proof Read</Button>
        </Form>
      );
    }
  }

  export default ProofReaderPage;