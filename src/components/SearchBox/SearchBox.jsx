import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilters } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);
  const changeInput = (e) => {
    const word = e.target.value.trim();
    dispatch(setFilter(word));
  };

  return (
    <label className={css.label}>
      Find Contacts by name
      <input
        type="text"
        value={filter}
        placeholder="Search"
        onChange={changeInput}
      />
    </label>
  );
};

export default SearchBox;
