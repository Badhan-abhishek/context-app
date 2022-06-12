import { useState } from "react";
import "./App.css";
import Layout from "./components/layout";

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div>
      <Layout setIsDark={setIsDark} isDark={isDark} />
    </div>
  );
}

export default App;
