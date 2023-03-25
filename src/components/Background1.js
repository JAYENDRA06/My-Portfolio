import React from "react";
import { motion } from "framer-motion";

function Background1({imgAnimation}) {
  

  return (
    <div className="background1">
      <img alt="i" src="../../images/branch1.svg" className="branch1"></img>
      <img alt="i" src="../../images/branch2.svg" className="branch2"></img>
      <motion.img
        alt="i"
        src="../../images/sun.svg"
        className="sun"
        animate={imgAnimation}
      ></motion.img>

      <img alt="i" src="../../images/samuri.svg" className="samuri"></img>
      <img alt="i" src="../../images/rock1.svg" className="rock1"></img>
      <img alt="i" src="../../images/rock2.svg" className="rock2"></img>
      <img
        alt="i"
        src="../../images/bottomTemple.svg"
        className="bottomTemple"
      ></img>
    </div>
  );
}

export default Background1;
