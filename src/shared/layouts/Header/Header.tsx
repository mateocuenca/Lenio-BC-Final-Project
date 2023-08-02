//External dependencies
import { useNavigate } from "react-router";

//Internal dependencies
import SearchBar from "../../../features/SearchBar/components/SearchBar";
import { OutlineFavBtn } from "../../components/OutlineFavBtn";

//Stylesheets
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <img
        src="src/assets/marvel-logo.svg"
        alt="Marvel Logo"
        className={styles["logo-marvel"]}
        onClick={handleClick}
      />
      <div>
        <SearchBar />
        <OutlineFavBtn />
      </div>
    </header>
  );
};

export { Header };
