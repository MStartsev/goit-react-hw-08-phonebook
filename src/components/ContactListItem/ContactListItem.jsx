import {
  ContactItem,
  ContactText,
  ButtonDeleteContact,
} from './ContactListItemElements';

function ContactListItem({ name, number, onContactDelete }) {
  return (
    <ContactItem>
      <ContactText>
        {name}: {number}
      </ContactText>
      <ButtonDeleteContact onClick={onContactDelete}>
        Delete
      </ButtonDeleteContact>
    </ContactItem>
  );
}

export default ContactListItem;
