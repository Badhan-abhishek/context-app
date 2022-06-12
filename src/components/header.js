import { useDarkMode } from "../context/dark-mode";

export const Header = () => {
  const { isDark } = useDarkMode();
  return (
    <header>
      <div>App header</div>
      <div>{isDark ? "Dark" : "Light"}</div>
    </header>
  );
};
