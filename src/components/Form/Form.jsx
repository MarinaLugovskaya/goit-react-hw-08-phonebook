import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContacts } from '../../redux/contacts/contacts-operations';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import css from '../Form/Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const formSubmitHandler = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (formSubmitHandler) {
      return alert(`${name} is already exists in contact list`);
    }

    if (name !== '' || number !== '') {
      dispatch(addContacts({ name, number }));
      setName('');
      setNumber('');
      return;
    }
    return alert('fill out the form');
  };

  return (
    <>
      <section className={css.container}>
        <div className={css.login}>
          <h1 className={css.title}>Phonebook</h1>
          <form onSubmit={handleSubmit} className={css.signin}>
            <input
              className={css.signinInput}
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              placeholder="name"
            />

            <input
              className={css.signinInput}
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              placeholder="number"
            />

            <button className={css.submit} type="submit" name="commit" value="Login">
              Add contact
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
};
