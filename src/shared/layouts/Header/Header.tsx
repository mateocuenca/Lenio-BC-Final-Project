//External dependencies
import { useNavigate } from "react-router";

//Internal dependencies
import Logo from "../../../assets/marvel-logo.svg";
import SearchBar from "../../../features/SearchBar/components/SearchBar";
import { OutlineFavBtn } from "../../components/OutlineFavBtn";

//Stylesheets
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const goToFavorites = () => {
    navigate("/favourites");
  };

  return (
    <header>
      <img
        src={Logo}
        alt="Marvel Logo"
        className={styles["logo-marvel"]}
        onClick={handleClick}
      />
      <div>
        <SearchBar />
        <OutlineFavBtn onClick={goToFavorites} />
      </div>
    </header>
  );
};

export { Header };
