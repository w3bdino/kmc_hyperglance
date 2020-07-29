import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchContactsStart, removeContact } from '../../redux/contacts/contacts.actions';
import { Container, ListGroup } from 'react-bootstrap';
import LoadingSpinner from '../spinner/loadingspinner';
import './contact.list.scss';

const ContactLists = ({ 
  contactlists, 
  isLoading, 
  fetchContactLists, 
  filterkeyword, 
  deleteContact }) => {

  useEffect(() => {
    if(contactlists.length === 0){
      fetchContactLists(10);
    }
  }, [fetchContactLists, contactlists]);

  if(isLoading) return <LoadingSpinner />

  // header search form
  const filteredContacts = contactlists.filter(contact =>
    contact.fullname.toLowerCase().includes(filterkeyword.toLowerCase())
  );

  function countLessThan(numbers, threshold){
    const getLessThan = numbers.filter((number) => number < threshold);
    return getLessThan.length;
  }

  console.log(countLessThan([1, 3, 3, 4, 8], 5));
  console.log(countLessThan([7, 8, 9, 9, 10], 9));
  return (
    <Container className="contactlists">
      <ListGroup>
        {filteredContacts.map(contact => 
        <ListGroup.Item key={contact.login.uuid} className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="avatar" alt="" src={contact.picture.thumbnail} />
            <div className="contactname">
              <h4>{contact.name.title} {contact.name.first} {contact.name.last}</h4>
              <span className="contactnum">Phone: {contact.phone}</span>
            </div>
          </div>

          <div className="iconscontainer align-middle">
            <FontAwesomeIcon onClick={() => deleteContact(contact.login.uuid)} className="icon" icon="trash-alt" />
            <Link to="/contactdetail"><FontAwesomeIcon className="icon gotoarrow" icon="angle-right" /></Link>
          </div>
        </ListGroup.Item>
        )}          
      </ListGroup>
    </Container>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchContactLists: (pagenum) => dispatch(fetchContactsStart(pagenum)),
  deleteContact: (id) => dispatch(removeContact(id))
});

const mapStateToProps = ({ contacts }) => ({
  contactlists: contacts.contactlists,
  isLoading: contacts.isFetching,
  filterkeyword: contacts.filterkeyword,
});

ContactLists.propTypes = {
  fetchContactLists: PropTypes.func,
  contactlists: PropTypes.array,
  isLoading: PropTypes.bool,
  deleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactLists);

