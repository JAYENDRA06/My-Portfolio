import React from "react";

function Socials() {
  const socialsArray = [
    {
      socialLink: "https://github.com/JAYENDRA06",
      socialIcon: "fa-brands fa-github",
    },
    {
      socialLink: "https://www.linkedin.com/in/jayendra-awasthi-938152213/",
      socialIcon: "fa-brands fa-linkedin",
    },
    {
      socialLink: "https://www.instagram.com/jay.awasthi06/",
      socialIcon: "fa-brands fa-square-instagram",
    },
    {
      socialLink: "https://www.behance.net/jayendraawasthi",
      socialIcon: "fa-brands fa-square-behance",
    },
  ];

  return (
    <ul className="socials">
      {socialsArray.map((social) => (
        <li>
          <a href={social.socialLink}>
            <i className={social.socialIcon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
