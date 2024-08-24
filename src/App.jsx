import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
// import initialContacts from './initialContacts.json'
import css from './App.module.css'

// const allContacts = () => {
//   const storedContacts = localStorage.getItem('contacts');
//   return storedContacts ? JSON.parse(storedContacts) : initialContacts;
// };

function App() {

  // const [contacts, setContacts] = useState(allContacts);
  // const [searchName, setSearchName] = useState('');
  
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);
  
  // const addContact = (newContact) => {
  //   setContacts([...contacts, newContact])
  // }

  // const deleteContact = (contactId) => {
  //     setContacts((contacts) =>
  //     contacts.filter((contact) => contact.id !== contactId)
  //   );
  // }

  // const handleSearch = (value) => { setSearchName(value) };

  // const filteredContacts = contacts.filter((contact) => 
  //   contact.name.toLowerCase().includes(searchName.toLowerCase())
  // );

  return (

      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
  )
}

export default App
