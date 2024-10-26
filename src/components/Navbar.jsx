import React from "react";

const Navbar = () => {
  const navComponents = ["Home", "Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div className="nav-bar">
      {navComponents.map((navComponent) => (
        <div className="nav-component">{navComponent}</div>
      ))}
    </div>
  );
};

export default Navbar;
