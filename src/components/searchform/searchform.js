import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchContact } from '../../redux/contacts/contacts.actions';
import './searchform.scss';

const SearchForm = ({ searchContact }) => {
  const filtercontact = (e) => {
    searchContact(e.target.value)
  }

  return (
    <Form inline>
      <FormControl type="text" onChange={filtercontact} placeholder="Search" />
      <Button variant="success"><FontAwesomeIcon icon={faSearch} /></Button>
    </Form>  
  );
};
  
const mapDispatchToProps = dispatch => ({
  searchContact: (keyword) => dispatch(searchContact(keyword))
});
  
  
SearchForm.propTypes = {
  searchContact: PropTypes.func,
};
  
export default connect('', mapDispatchToProps)(SearchForm);