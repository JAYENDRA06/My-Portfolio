import React, {useState, useEffect} from "react";

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

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav style={{ top: visible ? '0' : '-100px' }}>
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
