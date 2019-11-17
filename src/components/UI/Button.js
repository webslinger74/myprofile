import React from 'react';

const Button = (props) => {

    
    return ( 
        <div className="Button" id={props.id}  onClick={(event) => props.change(event)} style={{...props}} >
                    {props.value}
        </div>
     );
}
 
export default Button;