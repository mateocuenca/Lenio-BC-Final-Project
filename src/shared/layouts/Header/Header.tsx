//Internal dependencies
import { OutlineFavBtn } from "../../components/atoms/OutlineFavBtn";

//Stylesheets
import styles from "./Header.module.css";

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
        <OutlineFavBtn />
      </div>
    </header>
  );
};

export { Header };
