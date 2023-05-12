import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import "./tour-card.css";

const TourCard = ({ photo, city, featured, reviews, id, title, price }) => {
    return (
      <div className="tour__card">
        <Card>
          <div className="tour__img">
            <img src={photo} alt="tour-img" />
            {featured && <span>Featured</span>}
          </div>
        </Card>
  
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-5-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i> {avgRating} <span>({reviews.length})</span>
            </span>
          </div>
  
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              <span>{price} /per person/</span>
            </h5>
            <button className="btn booking__btn">
                  <Link to={`/tours/${id}`} >Book Now</Link>
            </button>
          </div>
        </CardBody>
      </div>
    );
  };

export default TourCard;