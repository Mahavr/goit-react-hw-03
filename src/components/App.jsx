import { useState, useEffect } from "react";
import { ContactList } from "./contactList/contactList";
import { SearchBox } from "./searchBox/serachBox";
import { ContactForm } from "./contactForm/contactForm";
import css from"./App.module.css";
const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [search, setSearch] = useState("");

  const visibleUsers = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onChange={setSearch} />
      <ContactList items={visibleUsers} onDelete={deleteContact} />
    </div>
  );
}

export default App;
