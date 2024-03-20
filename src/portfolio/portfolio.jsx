import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HeroSection = styled.section`
  background: #f4f4f4;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 50;
  font-size: 20px;
  color: white;
`;

const AboutSection = styled.section`
  padding: 2rem;
  background: #bdc1c6;
`;

const ServicesSection = styled.section`
  padding: 2rem;
  background: #558dca;
`;

const ContactSection = styled.section`
  padding: 2rem;
  background: #41b3a3;
`;

const Footer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
`;

function Portfolio() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ color: "red" }}>Ramit's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" style={{ color: "#007bff" }}>Home</Nav.Link>
              <Nav.Link href="/about" style={{ color: "#007bff" }}>About</Nav.Link>
              <Nav.Link href="/services" style={{ color: "#007bff" }}>Services</Nav.Link>
              <Nav.Link href="/contact" style={{ color: "#007bff" }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <HeroSection style={{ backgroundImage: `URL("https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww")`, backgroundSize: "cover" }}>
        <HeroContent>
          <h1>Welcome to Ramit's Portfolio</h1>
          <p>Welcome to the digital realm where ideas come to life through innovative web solutions.</p>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <h2>About Me</h2>
        <p>Hi, I am Ramit Kumar Gupta, a passionate tech enthusiast on a mission to bridge innovation with web development excellence, with a strong foundation in Cloud and AI.</p>
      </AboutSection>

      <ServicesSection>
        <h2>Services</h2>
        <p>Transforming ideas into captivating digital experiences through innovative web development solutions.</p>
      </ServicesSection>

      <ContactSection>
        <h2>Contact Me</h2>
        <p>Email: ramitkumargupta@gmail.com</p>
        <p>Phone: 8208313418</p>
      </ContactSection>

      <Footer>
        <p>&copy; 2024 Ramit's Portfolio</p>
      </Footer>
    </div>
  );
}

export default Portfolio;
