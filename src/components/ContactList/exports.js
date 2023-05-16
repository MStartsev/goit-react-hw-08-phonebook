export { useMemo } from 'react';
export { useDispatch, useSelector } from 'react-redux';

export { deleteContact } from '../../redux/contactsSlice';
export { getContacts, getFilter } from '../../redux/selectors';

export { default as ContactListItem } from '../ContactListItem/ContactListItem';
export { default as css } from './ContactList.module.css';
