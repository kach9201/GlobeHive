import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
  {
    title: 'Weather Forecast',
    desc: 'Get weather forecast for your city',
    imgUrl: weatherImg,
  },
  {
    title: 'Guide',
    desc: 'Get guide for your city',
    imgUrl: guideImg,
  },
  {
    title: 'Customization',
    desc: 'Customize your trip',
    imgUrl: customizationImg,
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="4" md="6" sm="12" className= "mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
