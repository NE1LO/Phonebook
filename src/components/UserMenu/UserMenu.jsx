import css from "./UserMenu.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.UserBlock}>
      <h2 className={css.userName}>Welcome {user.name}</h2>
      <button onClick={handleClick} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
