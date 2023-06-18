import React, { useEffect } from 'react';
import css from '../components/App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operation';

import { selectToken } from 'redux/auth/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.title}> Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />

      <Toaster />
    </div>
  );
}
