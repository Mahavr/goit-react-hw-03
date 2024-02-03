import css from "./searchBox.module.css"
export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.searchBox}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
