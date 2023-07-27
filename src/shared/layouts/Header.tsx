import styles from "./Header.module.css";
import { AiOutlineStar } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <img
        src="src/assets/marvel-logo.svg"
        alt="Marvel Logo"
        className={styles["logo-marvel"]}
      />
      <div>
        <form>
          <input type="text" id="search" name="search" placeholder="Search" />
        </form>
        <button className={styles["btn-favourite"]}>
          <AiOutlineStar />
        </button>
      </div>
    </header>
  );
};

export default Header;
