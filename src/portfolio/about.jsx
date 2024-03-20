import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutSection = styled.section`
  padding: 2rem;
  background: #f9f9f9;
  position: relative;
  border-radius: 8px;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  text-align: left;
`;

const AboutImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
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
  }
`;

const ArrowIcon = styled.i`
  margin-right: 5px;
`;

const PhoneIcon = styled.i`
  margin-right: 5px;
  color: #007bff;
  cursor: pointer;
`;

const ServicesLink = styled(Link)`
  color: #007bff;
  text-decoration: underline;
`;

function About() {
  // Replace the image URL with an appropriate "About Me" image from the internet
  const aboutImageUrl = 'https://t3.ftcdn.net/jpg/00/79/29/94/240_F_79299400_brgNm7oENpx9Y8RJsVXPInaFIlRpX6sy.jpg';

  const handlePhoneClick = () => {
    // Modify the phone number as needed
    const phoneNumber = '8208313418';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <AboutSection>
      <BackToHomeLink to="/">
        <ArrowIcon className="fas fa-arrow-left"></ArrowIcon>
        Back to Home
      </BackToHomeLink>
      <AboutContainer>
        <AboutImage src={aboutImageUrl} alt="About Me" />

        <AboutContent>
          <h2>About Me</h2>
          <p>
            Hi there! I am Ramit Kumar Gupta, currently pursuing my B.Tech specialized in Computer Science and Business Systems from NMIMS Indore.
          </p>
          <p>
            During my studies, I had the opportunity to do two enriching internships. The first one was in the cloud computing domain from NIELIT Haridwar, Government of India. This experience provided me with valuable insights into the world of cloud technologies.
          </p>
          <p>
            The second internship was in the web development domain from C-DAC Hyderabad, Government of India. Here, I honed my skills in web development and gained hands-on experience in creating dynamic web applications.
          </p>
          <p>
            These internships were instrumental in the development of my final year project named "KeeProp". It was a culmination of my learnings and practical experience, showcasing my ability to apply theoretical knowledge to real-world projects.
          </p>
          <p>
            Alongside my degree, I have also pursued certifications in AWS, AI, and Data Science using Python from various platforms like Coursera, edX, and Infosys Springboard. These certifications have further deepened my understanding of Cloud and AI technologies, which I believe are the future.
          </p>
          <p>
            I am passionate about Cloud and AI and have always focused my efforts on enhancing my skills in these domains. I am constantly learning and exploring new technologies to stay updated with the latest trends.
          </p>
          <p>
            Thank you for visiting my portfolio!
          </p>
          {/* Clickable Phone Icon */}
          <p>
            <PhoneIcon className="fas fa-phone-alt" onClick={handlePhoneClick}></PhoneIcon> 8208313418
          </p>
          <p>
            Please do visit my <ServicesLink to="/services">services page</ServicesLink> for more information.
          </p>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
