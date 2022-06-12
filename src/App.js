import "./App.css";
import { ChangeMode } from "./components/change-mode";
import Layout from "./components/layout";
import { DarkModeProvider } from "./context/dark-mode";

function App() {
  return (
    <div>
      <DarkModeProvider>
        <ChangeMode />
        <Layout />
      </DarkModeProvider>
    </div>
  );
}

export default App;
