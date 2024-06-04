import { useContext } from "react";
import Header from "../Header/Header";
import { ThemeContext } from "../utils/theme";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
    </div>
  )
}

export default Layout;
