import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import changeFilter from '../contacts/contacts-actions';
import { fetchContacts, addContacts, deleteContacts } from '../contacts/contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) =>  [...action.payload],
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, actions) => actions.payload,
});

export default combineReducers({
  items,
  filter,
});
