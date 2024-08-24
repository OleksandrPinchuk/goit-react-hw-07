import css from './Contact.module.css'
import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    
    return (
        <li className={css.item}>
            <div className={css.box}>
                <div className={css.name}>
                    <TiUser className={css.svg} />
                    <p>{contact.name}</p>
                </div>
                <div className={css.name}>
                    <TiPhone className={css.svg} />
                    <p>{contact.phone}</p>
                </div>
            </div>
            <button type='button' onClick={()=>dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
    )
}

export default Contact