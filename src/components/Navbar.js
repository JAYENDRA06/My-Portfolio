import React from "react";

function Navbar() {
  const navContent = [
    {
      navName: "Home",
      navLink: "#home"
    },
    {
      navName: "Skills",
      navLink: "#skills"
    },
    {
      navName: "Projects",
      navLink: "#projects"
    },
    {
      navName: "Work Experience",
      navLink: "#work"
    },
    {
      navName: "Contact me",
      navLink: "#contact"
    }
  ];

  return (
    <nav>
      <ul>
        {navContent.map((content) => (
          <li key={content.navName}>
            <a href={content.navLink}>{content.navName}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
