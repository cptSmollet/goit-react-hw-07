import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading } from './redux/contactsSlice';
import Loader from './components/Loader/Loader';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
};

export default App;



