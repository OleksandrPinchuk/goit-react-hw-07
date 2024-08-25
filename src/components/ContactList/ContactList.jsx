import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selectors';

const ContactList = ({contacts, handleDelete}) => {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <ul className={css.list}>
            {loading && <h2>loading..</h2>}
            {error && <h2>{error}</h2>}
            {contacts && contacts.map(contact => (
                <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default ContactList