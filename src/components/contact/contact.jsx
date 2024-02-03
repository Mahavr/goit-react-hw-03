import css from "./contact.module.css";
import { AiOutlineContacts, AiOutlinePhone } from "react-icons/ai";
export const Contact = ({ value: { name, number }, onDelete }) => {
  return (
    <li className={css.item}>
      <div>
        <div className={css.itemsWrapper}>
          <AiOutlineContacts size="25px " color="#f0efea" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.itemsWrapper}>
          <AiOutlinePhone size="25px" color="#f0efea" />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
