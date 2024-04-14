import React from "react";
import css from "./FilterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";

const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const changeInput = (e) => {
    const word = e.target.value.trim();
    dispatch(setFilter(word));
  };

  return (
    <div className={css.wrapp}>
      <input
        className={css.input}
        placeholder="Find contacts by name"
        type="text"
        onChange={changeInput}
        value={filter}
      />
    </div>
  );
};

export default FilterForm;
