import {
  ContactItem,
  ContactText,
  ButtonDeleteContact,
} from './ContactListItemElements';

const ContactListItem = ({ name, number, onContactDelete }) => (
  <ContactItem>
    <ContactText>
      {name}: {number}
    </ContactText>
    <ButtonDeleteContact onClick={onContactDelete}>Delete</ButtonDeleteContact>
  </ContactItem>
);

export default ContactListItem;
