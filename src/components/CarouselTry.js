import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class CarouselTry extends React.Component{
    render(){
        const myStyle = {
            paddingTop: 40,
            paddingBottom : 40,
            paddingLeft : 100,
            paddingRight : 100,
            //backgroundColor: "white",
            color: "black",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
          };
    
    
    return(
        <div>
            <Container fluid={true} style={myStyle}>
                <Row> 
                    <Col><Button href="/proofreader">Proof Reading</Button></Col>
                    <Col><Button>Author Filter</Button></Col>
                    <Col><Button>Virality</Button></Col>
                    <Col><Button>Goals</Button></Col>   
                </Row>
            </Container>
        </div>

    );
    }
}
export default CarouselTry;