import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const PlayerCard = (props) => {
    return ( 
        <div className="player_card_wrapper">
            <Zoom>
            <div className="player_card_thmb"
                style={{
                    marginTop:'50px',
                    background:`#f2f9ff url(${props.bck})`,
                    height:'200px'
                }}
            ></div>
            </Zoom>
            <div className="player_card_nfo">
                <div className="player_card_number">
                    {props.number}
                </div>
                <div className="player_card_name">
                    <Fade>
                    <span>{props.name}</span>
                    <span>{props.lastname}</span>
                    </Fade>
                </div>
            </div>

        </div>
     );
}
 
export default PlayerCard;