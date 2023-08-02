//Internal dependencies
import { MainRoutes } from "../../routes/Routes";

//Stylesheets
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <MainRoutes />
    </main>
  );
};

export { Main };
