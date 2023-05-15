import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured Tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero-content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Explore the World with Unforgettable Journeys'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Unleash Your Wanderlust: Experience the World's Beauty, One Journey at a Time!
                  <span className="highlight"></span>
                </h1>
                <p></p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>

      {/* Services section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we offer?</h5>
              <h2 className="service__title">Experience the excellence of our services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured tours section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
              <div className="hero__img-box">
                {/* <img src={} alt="" /> */}
              </div>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={'Experience'} />
                <h2>Experience the Exciting Experience</h2>
                <p>You'll love it.</p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>0+</span>
                  <h6>Awesome trips</h6>
                </div>
                <div className="counter__box">
                  <span>0+</span>
                  <h6>Customers</h6>
                </div>
                <div className="counter__box">
                  <span>0+</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">Our Exciting Gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Bees Love'} />
              <h2 className="testimonial__title">What Our Customers Say</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;

                 


