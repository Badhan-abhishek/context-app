import { useDarkMode } from "../context/dark-mode";

export const ChangeMode = () => {
  const { toggleDarkMode } = useDarkMode();
  return <button onClick={toggleDarkMode}>Change Color Mode</button>;
};
