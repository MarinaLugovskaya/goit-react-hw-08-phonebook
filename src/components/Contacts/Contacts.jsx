import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContacts } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import css from '../Contacts/Contacts.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onClick = id => dispatch(deleteContacts(id));

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li className={css.item} key={contacts.id}>
            <p className={css.text}>
              {contact.name}: {contact.number}
            </p>

            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                color="error"
                className={css.button}
                onClick={() => onClick(contact.id)}
                type="button"
              >
                Delete
              </Button>
            </Stack>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
