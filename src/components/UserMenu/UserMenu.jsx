import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.UserBlock}>
      <h2>Welcome UserName</h2>
      <button type="button">Log out</button>
    </div>
  );
};

export default UserMenu;
