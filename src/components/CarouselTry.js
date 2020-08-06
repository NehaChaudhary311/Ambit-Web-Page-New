import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class CarouselTry extends React.Component{
    render(){
        const myStyle = {
            paddingTop: 150,
            paddingBottom : 40,
            paddingLeft : 220,
            paddingRight : 100,
            //backgroundColor: "white",
            color: "black",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 35,
            textAlign: "center"
          };
        const description = {
            fontSize : 15,
            color : "white",
            paddingTop : 20
        };
        const comingsoon = {
            fontSize : 13,
            color : "white",
            paddingTop : 0.2
        };
    
    return(
        <div>
            <Container fluid={true} style={myStyle}>
                <Row> 
                    <Col>
                        <Button variant="secondary" size="lg" href="/proofreader">Proof Reading</Button>
                        <p style ={description}>Correct your grammar, spelling and punctuation with our AI-powered system.</p>
                    </Col>
                    
                    <Col>
                        <Button variant="secondary" size="lg">Author Filter</Button>
                        <p style ={description}>Change your writng into the style of your preferred author.</p>
                    </Col>

                    <Col>
                        <Button href="/comingsoon" variant="secondary" size="lg">Virality</Button>
                        <p style ={description}>Add viral writing features to your tweet and blog.</p>
                        <p style ={comingsoon}>(Coming Soon)</p>
                    </Col>
                    <Col>
                        <Button href="/comingsoon" variant="secondary" size="lg">Goals</Button>
                        <p style ={description}>Convert your writing for a specific goal like negotiation, admiration, sales pitch etc.</p>
                        <p style ={comingsoon}>(Coming Soon)</p>                    
                    </Col>   
                </Row>
            </Container>
        </div>

    );
    }
}
export default CarouselTry;