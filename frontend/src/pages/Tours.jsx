import React from 'react';
import CommonSection from '../shared/commonSection';
import TourCard from '../shared/tourCard';
import SearchBar from '../shared/searchBar';
import Newsletter from '../shared/newsletter';
import '../styles/tour.css';
import tourData from '../assets/data/tours';
import { Container } from 'reactstrap';
 
const Tours = () => {
    return (
     <>
     <CommonSection title={"All Tours"} />
     <section >
         <Container>

           <Row>

            <SearchBar/>

        </Row>
      </Container>
     </section>

     <section>
        
         <Container>
            <Row>

         </Row>
         </Container>
         </section>
     </>   
    )
}

export default Tours;