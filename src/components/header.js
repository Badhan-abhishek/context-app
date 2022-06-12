export const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header>
      <div>App header</div>
      <div onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark" : "Light"}
      </div>
    </header>
  );
};
