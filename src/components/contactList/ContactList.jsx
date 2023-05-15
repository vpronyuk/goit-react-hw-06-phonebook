import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';

import ContactItem from 'components/contactItem/ContactItem';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    const filter = state.filter.trim().toLowerCase();
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
