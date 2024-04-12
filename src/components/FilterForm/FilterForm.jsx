import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";

const FilterForm = () => {
  const dispatch = useDispatch();

  console.log(getFilters);
  const filter = useSelector(getFilters);

  const changeInput = (e) => {
    const word = e.target.value.trim();
    dispatch(setFilter(word));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={changeInput}
        value={filter}
        placeholder="Search"
      />
    </label>
  );
};

export default FilterForm;
