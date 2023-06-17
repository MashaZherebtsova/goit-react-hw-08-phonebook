import React from 'react';

import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operation';

export function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} id={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <button
              className={css.contactListBtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
