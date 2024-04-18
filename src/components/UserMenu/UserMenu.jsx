import css from "./UserMenu.module.css";
import { CiLogin } from "react-icons/ci";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.UserBlock}>
      <h2 className={css.userName}> {user && user.name}</h2>
      <button className={css.btn} onClick={handleClick} type="button">
        <CiLogin
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </button>
    </div>
  );
};

export default UserMenu;
