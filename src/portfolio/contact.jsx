import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ContactHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ContactInfo = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const ContactLabel = styled.b`
  font-weight: bold;
  color: #007bff;
`;

const ContactImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
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

const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const EmailIcon = styled.i`
  margin-right: 5px;
`;

const PhoneLink = styled.a`
  color: #007bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PhoneIcon = styled.i`
  margin-right: 5px;
`;

const Contact = () => {
  const internetImageUrl = 'https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej-1520x800.webp'; // Replace with your image URL

  return (
    <ContactContainer style={{ backgroundColor: "#41B3A3" }}>
      <BackToHomeLink to="/">
        <ArrowIcon className="fas fa-arrow-left"></ArrowIcon>
        Back to Home
      </BackToHomeLink>
      <ContactImage src={internetImageUrl} alt="Contact" />
      <ContactHeader>Contact Me</ContactHeader>
      <ContactInfo>
        <p>
          <ContactLabel>Email:</ContactLabel>
          <EmailLink href="mailto:ramitkumargupta@gmail.com">
            <EmailIcon className="fas fa-envelope"></EmailIcon>
            ramitkumargupta@gmail.com
          </EmailLink>
        </p>
        <p>
          <ContactLabel>Phone:</ContactLabel> 
          <PhoneLink href="tel:8208313418">
            <PhoneIcon className="fas fa-phone-alt"></PhoneIcon>
            8208313418, 9098336559
          </PhoneLink>
        </p>
      </ContactInfo>
      <ContactInfo>
        <p>
          <ContactLabel>Address:</ContactLabel>
        </p>
        <p>Flat No. 606 Orion Galaxy Apartment,</p>
        <p>Divya Vihar Colony, Jakhya</p>
        <p>Indore, Madhya Pradesh 453555</p>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;
