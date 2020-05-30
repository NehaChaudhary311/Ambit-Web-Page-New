import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

class ProofReaderResultsPage extends React.Component {
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
            Proof Reader Results</label>
            <br></br>
            <Row>
                <Col>
                    <textarea cols ="100" rows="12" value={this.state.value} onChange={this.handleChange} />
                </Col>
                <Col>
                    <div className="mb-2">
                        {['right'].map((direction) => (
                        <>
                            <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id='author-filter-btn'
                            drop={direction}
                            title= 'Author Filter'
                            >
                            <Dropdown.Item eventKey="1">William Shakepeare</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Haruki Murakami</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Gabriel Garcia Marquez</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Franz Kafka</Dropdown.Item>
                            </DropdownButton>{' '}
                        </>
                        ))}
                    </div>
                    <div className="mb-2">
                        {['right'].map((direction) => (
                        <>
                            <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id='virality-btn'
                            drop={direction}
                            title= 'Virality'
                            >
                            <Dropdown.Item eventKey="1">Tweet</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Blog</Dropdown.Item>
                            </DropdownButton>{' '}
                        </>
                        ))}
                    </div>
                    
                    <Button className="mb-2">Goals</Button>{' '}
                </Col>
                
            </Row>
        </Form>
      );
    }
  }

  export default ProofReaderResultsPage;