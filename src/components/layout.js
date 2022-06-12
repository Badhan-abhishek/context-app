import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout({ isDark, setIsDark }) {
  return (
    <div style={{ padding: "30px" }}>
      <Header isDarkMode={isDark} setIsDarkMode={setIsDark} />
      <hr />
      <div>Layout</div>
      <hr />
      <Footer isDarkMode={isDark} setIsDarkMode={setIsDark} />
    </div>
  );
}
