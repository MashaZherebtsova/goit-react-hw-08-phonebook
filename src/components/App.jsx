import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';

export function App() {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}> Contacts</h2>
      <Filter />
      <ContactsList />
      <Toaster />
    </>
  );
}
