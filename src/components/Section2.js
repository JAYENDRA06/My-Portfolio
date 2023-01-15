import React from "react";
import AllSkills from "./AllSkills";
import Background2 from "./Background2";

const skillBoxes = [
    {
      title: "Full-stack Dev",
      skills: ["node JS", "react JS", "HTML, CSS, JS"]
    },
    {
      title: "Designing",
      skills: ["graphic designing", "ui/ux desiging", "video editing"]
    },
    {
      title: "Problem solving",
      skills: ["c++", "Java"]
    }
]

function Section2(){
    return(
        <div className="section2" id="skills">
            <h1>My Skills</h1>
            <AllSkills skillBoxes={skillBoxes} />
            <Background2 />
        </div>
    );
}

export default Section2;