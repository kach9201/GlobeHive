import React from 'react';
import '../styles/home.css';


import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured Tours/FeaturedTourList';

const Home = () => {
    return (
        <>
            {/* {hero section} */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero-content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Explore the World with Unforgettable Journeys'} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                    Unleash Your Wanderlust: Experience the World's Beauty, One Journey at a Time!
                                    <span className="highlight"></span>
                                </h1>
                                <p>

                                </p>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <video src={heroVideo} alt="" controls/>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>

                        <SearchBar/>
                    </Row>
                </Container>
            </section>
 {/* {hero section start} */}
 <section>
    <Container>
        <Row>
            <Col lg='3'>
                <h5 className='services__subtitle'> What we offer?</h5>
                <h2 className='service__title'>Experience the excellence of our services </h2>
            </Col>
            <ServiceList />
        </Row>
    </Container>
 </section>

 {/* {tour section start} */}
 <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <Subtitle subtitle={"Explore"}/>
                <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
        </Row>
    </Container>
 </section>
 {/* {tour section end} */}
   </>
    );
};

export default Home;