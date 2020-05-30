import React from 'react';
import Typical from 'react-typical';
 

class TypicalText extends React.Component{
    render(){
        const typeTextStyle = {
            padding: 15,
            fontFamily: "monospace",
            fontSize: 22,
            textAlign: "center"
          };
    
    
    return(
        <div style ={typeTextStyle}>
          <p>When Shakespeare writes your{''} 
          <Typical
          loop={Infinity}
          wrapper="center"
        steps={['articles.', 1000, 'essays.', 1000, 'journals.', 1000,]}
        
      ></Typical>
      </p>
        </div>

    );
    }
}


export default TypicalText;