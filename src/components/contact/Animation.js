import React from 'react';
import Zoom from 'react-reveal/Zoom';
import contact from '../../images/contact.jpg';

const Animation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
               <Zoom>
                <div>
                    <span>Send Me A Message</span>
                
                </div>
                </Zoom>
            </div>
            <div className="right">
            <Zoom>      
                    <div style={{
                        background:`url(${contact}) no-repeat`}}>
                        </div>
            </Zoom>
            </div>

        </div>
      );
}
 
export default Animation;