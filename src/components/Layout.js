import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

/* <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}> Contacts</h2>
      <Filter />
      <ContactsList />
      <Toaster />
    </> */
