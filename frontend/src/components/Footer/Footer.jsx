import React from 'react';
import './footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

const quick___links=[
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/about',
        display: 'About'
    },
    {
        path:'/tours',
        display: 'Tours'
    },
]

const quick___links2=[
    {
        path:'/gallery',
        display: 'Gallery'
    },
    {
        path:'/login',
        display: 'Login'
    },
    {
        path:'/register',
        display: 'Register'
    },
]
 
const Footer = () => {

const year = new Date().getFullYear ()

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md="4">
                        <div className='logo'>
                           <img src={logo} alt="logo" />
                           <p>Bee anywhere</p>

                           <div className="social__links d-flex align-items-center gap-4 ">
                             <span>
                                <Link to= '#'><i class="ri-facebook-circle-fill"></i></Link>
                             </span>
                             <span>
                                <Link to= '#'><i class="ri-instagram-line"></i></Link>
                             </span>
                             <span>
                                <Link to= '#'><i class="ri-github-fill"></i></Link>
                             </span>
                             <span>
                                <Link to= '#'><i class="ri-youtube-fill"></i></Link>
                             </span>
                           </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <h5 className='footer__link-title'>Discover</h5>

                        <ListGroup className='footer__quick-link'>
                            {
                            quick___links.map((item,index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md="4">
                    <h5 className='footer__link-title'>Quick Links</h5>

                    <ListGroup className='footer__quick-link'>
                            {
                            quick___links2.map((item,index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md="4"> 
                    <h5 className='footer__link-title'>Contact</h5>

                   <ListGroup className='footer__quick-link'>
                
                    <ListGroupItem key={index} className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex alig-items-center gap-2'>
                            <span><i class="ri-mail-fill"></i></span>
                            Email:
                        </h6>
                        <p className='mb-0'>globehive@gmail.com</p>
                 </ListGroupItem>
                 <ListGroupItem key={index} className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex alig-items-center gap-2'>
                            <span><i class="ri-phone-fill"></i></span>
                            Call Us:
                        </h6>
                        <p className='mb-0'>222-222-2222</p>
                 </ListGroupItem>
            </ListGroup>               
        </Col>
           <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright {year}, developed by Visionary Squad. All rights reserved</p>
           </Col> 
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;