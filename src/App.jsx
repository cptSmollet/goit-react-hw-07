import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox'; 
import { store, persistor } from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="appContainer">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
          <h2 className="subtitle">Contacts</h2>
          <SearchBox /> 
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;

