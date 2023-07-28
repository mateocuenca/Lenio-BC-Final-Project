//Internal dependencies
import { HomePage } from "../../../features/Home/containers/HomePage";

//Stylesheets
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
};

export { Main };
