import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(getUser);

  return (
    <div className={css.UserBlock}>
      <h2>Welcome {user.name}</h2>
      <button type="button">Log out</button>
    </div>
  );
};

export default UserMenu;
