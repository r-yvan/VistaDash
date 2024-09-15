import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children: ReactNode }) => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
