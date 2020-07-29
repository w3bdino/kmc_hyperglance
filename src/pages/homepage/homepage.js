import React from 'react';
import { Container } from 'react-bootstrap';
import ContactLists from '../../components/contacts/contact.lists';
import Header from '../../components/layouts/header/header.section';
import SearchForm from '../../components/searchform/searchform'
import './homepage.scss';

const HomePage = (props) => {

  return (
    <Container className="homepage">
      <Header>
        <SearchForm />
      </Header>
      <ContactLists />
    </Container>
  )
};

export default HomePage;