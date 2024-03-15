import css from "./SearchBox.module.css";

const SearchBox = ({ value, changeInput }) => {
  return (
    <label className={css.label}>
      Find Contacts by name
      <input
        type="text"
        value={value}
        placeholder="Search"
        onChange={changeInput}
      />
    </label>
  );
};

export default SearchBox;
