import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <p className={styles.text}>{name}: {number}</p>
      <button onClick={handleDelete} className={styles.button}>Delete</button>
    </li>
  );
};

export default Contact;
