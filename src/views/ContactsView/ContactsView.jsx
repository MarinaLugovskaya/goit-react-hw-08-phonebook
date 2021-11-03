import React from 'react';
import Filter from '../../components/Filter/Filter';
import Contacts from '../../components/Contacts/Contacts';
import Form from '../../components/Form/Form';

export const ContactsView = () => {
  return (
    <div>
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
};
