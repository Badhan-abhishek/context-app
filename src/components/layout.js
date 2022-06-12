import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export default function Layout() {
  return (
    <div style={{ padding: "30px" }}>
      <Header />
      <hr />
      <div>Layout</div>
      <hr />
      <Footer />
    </div>
  );
}
