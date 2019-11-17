import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="body">

                <div className="body__blockOne">
                    <div><h2>An example of a MERN application</h2>
                </div>
                    </div>
                    <div className="body__blockTwo">
                        <div className="body__blockTwo--element"><a href="https://afternoon-taiga-12245.herokuapp.com/">
                            <img src="./images/messageapp.jpg" style={{ height: '60vh', width: '60vw', padding: '5rem 5rem' }} xalt="image of Mern" ></img></a>

                        </div>
                        <div className="body__blockTwo--element">
                            <h4>Vist the Site at Heroku</h4>
                            A MERN full stack message application, that can be view either by clicking on the image or https://afternoon-taiga-12245.herokuapp.com</div>
                    </div>

                    <div className="body__blockThree">
                    <div className="body__blockThree--elementOne">
                        <img src="./images/login.jpg" style={{ height: '60vh', width: '60%', padding: '5rem 5rem' }} xalt="image of Mern Site" ></img></div>
                      
                      <div className="body__blockThree--elementTwo">
                          <h4>Secure backEnd</h4>
                       The application has a secure back-end that an Admin user can log into
                        to access many forms that allows both images and messages to be uploaded via a text-editor to specific pages of the
                        front-end. Images are pushed to a 3rd party storage database separate from the message. Once logged in as Admin you can 
                        delete messages by going to the specific front end message and clicking the admin view only delete button.</div>
                    </div>

                    <div className="body__blockFour">
                        <div className="body__blockFour--elementOne">
                         <img src="./images/engagement.jpg" style={{height: '100%', width: '100%'}} xalt="image of Mern Site" ></img></div>
                         
                        <div className="body__blockFour--elementTwo">
                            <h4>D3.js Dynamic Charts</h4>
                            The site also includes several D3.js graphs and charts that can also be
                        updated via the backend forms. New results are saved to the database which are then through Redux routed to the
                        front end of the website.</div>
                    </div>

                    </div>
            
                );
           }
       }
        
export default Body;