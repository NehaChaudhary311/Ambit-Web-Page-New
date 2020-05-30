import React from 'react';
import Typical from 'react-typical';
 

class TypicalText extends React.Component{
    render(){
        const typeTextStyle = {
            padding: 15,
            fontFamily: "monospace",
            fontSize: 35,
            textAlign: "center"
          };
    
    
    return(
        <div style ={typeTextStyle}>
             <Typical
        steps={['Do more with your writing ', 1000, 'Enhance the scope of your writing', 1000]}
        loop={Infinity}
        wrapper="center"
      ></Typical>
        </div>

    );
    }
}


export default TypicalText;