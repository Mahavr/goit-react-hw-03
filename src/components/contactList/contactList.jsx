import { Contact } from "../contact/contact";
import css from "./contactList.module.css";
export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.list}>
      {items.map((contact) => (
        <Contact
          key={contact.id}
          value={contact}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
};
