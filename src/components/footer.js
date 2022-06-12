export const Footer = ({ isDarkMode, setIsDarkMode }) => {
    console.log("isDarkMode", isDarkMode)
  return (
    <footer>
      <div>App Footer</div>
      <div onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark" : "Light"}
      </div>
    </footer>
  );
};
