import { selectContacts } from '../../redux/contactsSlice';
import { selectName } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filteredName = useSelector(selectName);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filteredName.toLowerCase()));
    
    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList