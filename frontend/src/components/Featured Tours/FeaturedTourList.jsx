import React from 'react';
import { Col } from 'reactstrap';
import TourCard from '../../shared/TourCard'; // Fix import path
import tourData from "../../assets/data/tours";

const FeaturedTourList = () => { // Remove '=' from function declaration
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
