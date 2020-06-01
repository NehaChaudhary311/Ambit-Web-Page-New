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
          <p>When your favourite author writes your{''} 
          <Typical
          loop={Infinity}
          wrapper="center"
        steps={['articles.', 930, 'essays.', 930, 'journals.',930,]}
        
      ></Typical>
      </p>
        </div>

    );
    }
}


export default TypicalText;