import { useDarkMode } from "../context/dark-mode";
import { ChangeMode } from "./change-mode";

export const Footer = () => {
  const { isDark } = useDarkMode();
  return (
    <footer>
      <div>App Footer</div>
      <div>{isDark ? "Dark" : "Light"}</div>
      <ChangeMode />
    </footer>
  );
};
