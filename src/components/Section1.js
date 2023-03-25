import React from "react";
import Background1 from "./Background1";
import Socials from "./Socials";
import { useAnimation } from "framer-motion";

const description =
  "I am a third year CSE undergrad at vit vellore.i completed my +2 from montfort inter college. my life revolves around learning, coding and coffee but sometimes i need a therapy session of playing football or watching anime , watching Chistopher Nolan’s moives.";

function Section1() {
  const imgAnimation = useAnimation();
  const winWidth = window.innerWidth;

  const handleMouseMove = e => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    const offsetFactor = 15
    const sunSize = winWidth*6/100;
    imgAnimation.start({
      x: winWidth > 700 ? moveX / offsetFactor - sunSize : -sunSize,
      y:  winWidth > 700 ? moveY / offsetFactor : 0
    })
  }

  return (
    <section className="section1" id="home" onMouseMove={e => handleMouseMove(e)}>
      <Socials />
      <Background1 imgAnimation={imgAnimation} />
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

export default Section1;