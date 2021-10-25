import React from 'react';
import  Filter  from '../../components/Filter/Filter';
import  Contacts  from '../../components/Contacts/Contacts';
import  Form  from '../../components/Form/Form';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from "../../redux/contacts/contacts-slice";
import Loader from "react-loader-spinner";

export default function ContactsView() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <Form />
      <Filter />
      {isFetching && (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {contacts && (
        <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </>
  );
}