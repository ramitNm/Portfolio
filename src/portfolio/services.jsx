import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesSection = styled.section`
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 5px;
  position: relative;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.i`
  font-size: 2rem;
  color: #333;
`;

const ServiceTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
`;

const BackToHomeLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: absolute; 
  top: 20px; 
  left: 20px; 
  z-index: 1000; 
  &:hover {
    text-decoration: underline;
`;

const ArrowIcon = styled.i`
  margin-right: 5px;
`;

function Services() {
  return (
    <ServicesSection style={{backgroundColor: "#558DCA"}}>
       <BackToHomeLink to="/">
        <ArrowIcon className="fas fa-arrow-left"></ArrowIcon>
        Back to Home
      </BackToHomeLink>
      <h2>Web Development Services</h2>
      <ServicesContainer>
        <ServiceCard>
          <ServiceIcon className="fas fa-code"></ServiceIcon>
          <ServiceTitle>Responsive Web Design</ServiceTitle>
          <ServiceDescription>
            We create websites that look great on all devices, from mobile to desktop.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon className="fas fa-cogs"></ServiceIcon>
          <ServiceTitle>Custom Web Dev.</ServiceTitle>
          <ServiceDescription>
            Tailored solutions for your specific business needs, from e-commerce to CMS.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon className="fas fa-paint-brush"></ServiceIcon>
          <ServiceTitle>UI/UX Design</ServiceTitle>
          <ServiceDescription>
            Intuitive and user-friendly designs that enhance the user experience.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon className="fas fa-database"></ServiceIcon>
          <ServiceTitle>Database Integration</ServiceTitle>
          <ServiceDescription>
            Seamless integration of databases to power your web applications.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon className="fas fa-cloud"></ServiceIcon>
          <ServiceTitle>Cloud Hosting</ServiceTitle>
          <ServiceDescription>
            Secure and reliable hosting solutions to keep your website running smoothly.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon className="fas fa-mobile-alt"></ServiceIcon>
          <ServiceTitle>Mobile-Friendly Dev.</ServiceTitle>
          <ServiceDescription>
            Optimized development for mobile devices to reach a broader audience.
          </ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
    </ServicesSection>
  );
}

export default Services;
