import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SigninPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    render() {
        return(
            <div className="sign-in-up-background">
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h3 className="display-4 font-weight-light">Member Login</h3> 
                    </Col>
            </Row>
            <Content>
                <Form>
                <Form.Group>
                    <Form.Label htmlFor="email">Email ID</Form.Label>
                    <Form.Control id="email" name="email" type="text"  />
                </Form.Group>


                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control id="password" name="password" type="password"  />
                </Form.Group>

                <Button className="d-inline-block" variant="primary" type="submit" >
                Login
                </Button>
                <p className="dont-have-account">
                    <a href='/signup'>Do not have an account?Sign Up</a>
                </p>
                <p className="forgot-password">
                    Forgot <a href="#">password?</a>
                </p>

                </Form>
            </Content> 
            </div>
        );
    }

}

export default SigninPage;