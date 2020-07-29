import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/layouts/header/header.section';
import ContactForm from '../../components/contactform/contactform';
import './addcontact.page.scss';

const AddContactPage = (props) => {

  return (
    <Container className="addcontact">
      <Header />
      <ContactForm />
    </Container>
  )
};

export default AddContactPage;