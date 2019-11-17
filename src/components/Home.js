import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Steven from '../images/steven.jpg';
import PlayerCard from './UI/playerCard';
import Slider from "react-slick";
import javasc from '../images/javascript.jpg';
import sass from '../images/sass.png';
import reduxImg from '../images/reactredux.webp';
import springImg from '../images/spring.png';
import reactImg from '../images/react.png';
import webdev from '../images/webdev.jpg';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, borderRadius: '10px', display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", borderRadius: '10px', background: "green" }}
            onClick={onClick}
        />
    );
}

class Home extends Component {

    state = {
        cards: [
            {
                bottom: 90,
                left: 130
            },
            {
                bottom: 80,
                left: 100
            },
            {
                bottom: 70,
                left: 70
            },
            {
                bottom: 60,
                left: 40
            }
        ]
    }

    showAnimateCards = () => (
        this.state.cards.map((card, i) => (
            <Animate
                key={i}
                show={this.props.show}

                start={{
                    left: 40,
                    bottom: 40
                }}

                enter={{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: { duration: 200, ease: easePolyOut }
                }}

            >
                {({ left, bottom }) => {
                    return (
                        <div className="card-relative">
                            <div
                                style={{
                                    position: 'relative',
                                    left,
                                    bottom,

                                }}>
                                <PlayerCard
                                    number="1"
                                    name="Steven Webster"
                                    lastname="07846335854"
                                    bck={Steven}
                                />
                            </div>
                        </div>
                    )
                }}
            </Animate>
        ))
    )

    componentDidMount = () => {

    }

    render() {
        var settings = {
            //   nextArrow: <SampleNextArrow />,
            //     prevArrow: <SamplePrevArrow />,
            dots: true,
            infinite: true,
            autoplaySpeed: 10000,
            speed: 1500,
            accessibility: true,

            slidesToShow: 1,
            fade: true,
            pauseOnHover: true,
            autoplay: true,
            rows: 1,
            accessibility: true
        };


        return (
            <div className="home">


                <div className="home__left">
                    <PlayerCard
                        number=""
                        name="Steven Webster"
                        lastname="07846335854"
                        bck={Steven}
                    />

                </div>
                <div className="home__right">



                    <Slider {...settings}>
                        <div>
                            <div className="home__right--inner">
                                <h3><img src={webdev} alt="computer" style={{ height: '100px', paddingLeft: '50px', borderRadius: '5px', width: '200px' }} xalt="image of pc" /></h3>
                                I am a self taught developer, who started learning programming as a hobby
                                and have more recently started to apply for a professional role.
            
                                The site contains information about myself including projects, type of skill set
                                and details about how to contact me.
                    </div>
                        </div>
                        <div>
                            <h3><img src={javasc} alt="javascript icon" style={{ height: '200px', paddingLeft: '50px', borderRadius: '5px', width: '200px' }} xalt="image java icon" /></h3>
                            <div><p style={{ padding: '15px' }}>I have excellent knowledge of front and back-end Javascript. I have build full stack applications
                                using the Mongo-Express-React-Node structure.</p></div>
                        </div>
                        <div>
                            <h3><img src={sass} alt="sass icon" style={{ height: '200px', paddingLeft: '50px', borderRadius: '5px', width: '200px' }} xalt="image ofsass icon" /></h3>
                            <div><p style={{ padding: '15px' }}>I have excellent knowledge of using SASS. I build Html structures using the BEM principle and
                                understand concepts of nesting, mixins, functions and variables.
                            </p></div>
                        </div>
                        <div>
                            <h3><img src={reactImg} alt="react icon" style={{ height: '200px', paddingLeft: '50px', borderRadius: '5px', width: '300px' }} xalt="image of react icon" /></h3>
                            <div><p style={{ padding: '15px' }}>I have excellent knowledge of using React. I have built several Front-End applications that use state and props within
                                components. I can integrate Redux within my applications and can connect to backend frameworks such as Node.js/Express and
                                Java Spring.
                            </p></div>
                        </div>
                        <div>
                            <h3><img src={springImg} alt="spring icon" style={{ height: '200px', marginLeft: '-40px', borderRadius: '5px', width: '400px' }} xalt="" /></h3>
                            <div><p style={{ padding: '15px' }}>I have used Java Spring to build REST APi's that are connected to databases such as Mongo.db. I have also integrated
                                private and public routes.
                            </p></div>
                        </div>
                        <div>
                            <h3><img src={reduxImg} alt="redux icon" style={{ height: '300px', marginTop: '-50px', marginBottom: '-50px', paddingLeft: '50px', borderRadius: '5px', width: '400px' }} xalt="" /></h3>
                            <p style={{ padding: '15px' }}>I have a solid understanding of using Redux to manage global state within Applications. I understand using the Redux Store,
                                Actions and Reducers.
                                </p>
                        </div>
                    </Slider>

                </div>

            </div>
        );
    }

}
export default Home;

