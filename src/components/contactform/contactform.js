import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { connect } from 'react-redux';
import ReactDatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { addContactRequest } from '../../redux/contacts/contacts.actions';
import "react-datepicker/dist/react-datepicker.css";
import './contactform.scss';

const ContactForm = ({ addContact }) => {
  const { register, errors, handleSubmit, control } = useForm();
  const history = useHistory();

  const onSubmit = data => { 
    addContact(data);
    history.push('/')
  };

  return (
    <Container className="contactform">
      <h1>Add Contact</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <label>Title</label>
        <select name="title" ref={register}>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Mrs">Mrs</option>
        </select>
        
        <label>First Name</label>
        <input name="firstName" ref={register({ required: true })} />
        <span className="inputerror">{errors.firstName && "First name is required"}</span>
        
        <label>Last Name</label>
        <input name="lastName" ref={register({ required: true })} />
        <span className="inputerror">{errors.lastName && "Last name is required"}</span>
        
        <label>Gender</label>
        <select name="gender" ref={register}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        
        <label>Email</label>
        <input name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
        })}
        />
        <span className="inputerror">{errors.email && errors.email.message}</span>
        
        <label>Phone</label>
        <input name="phone" ref={register({ 
          required: true, 
          pattern: {
            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i,
            message: "invalid phone number format"
          } })} 
        />
        <span className="inputerror">{errors.phone && errors.phone.message}</span>
        
        <label>Birthday</label>
        <Controller
        control={control}
        name="birthday"
        render={({ onChange, onBlur, value}) => (
          <div className="datewrap">
          <FontAwesomeIcon className="calendaricon d-flex align-items-center" icon="calendar-alt" />
          <ReactDatePicker
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
          </div>
        )}
      />
      <hr />
        <div className="actionbuttons">
          <Button variant="success" type="submit" className="mr-1">Submit</Button>
          <Button variant="success">Back</Button>
        </div>
      </form>
    </Container>  
  );
};
 
const mapDispatchToProps = dispatch => ({
  addContact: (contact) => dispatch(addContactRequest(contact))
});
  
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
  
export default connect('', mapDispatchToProps)(ContactForm);
