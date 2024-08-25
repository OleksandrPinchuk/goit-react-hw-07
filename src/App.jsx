import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';
import { selectFilteredContacts } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
      dispatch(fetchContacts())
  }, [dispatch]);
  
  const handleDelete = (id) => {
      dispatch(deleteContact(id))
  };

  return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      <ContactList contacts={contacts} handleDelete={handleDelete} />
      </div>
  )
};

export default App;
