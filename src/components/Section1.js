import React from "react";
import Background1 from "./Background1";
import Socials from "./Socials";

const description =
  "I am a third year CSE undergrad at vit vellore.i completed my +2 from montfort inter college. my life revolves around learning, coding and coffee but sometimes i need a therapy session of playing football or watching anime , watching Chistopher Nolan’s moives.";

function Section1() {

  const mousePosition = useMousePosition();

  return (
    <section className="section1" id="home">
      <Socials />
      <Background1 />
      <div className="outerHeading">
        <div className="heading">
          <h1>Hello Samuri</h1>
          <p>I am Jayendra Awasthi</p>
        </div>
        <div className="description">{description}</div>
      </div>
    </section>
  );
}

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};


export default Section1;
