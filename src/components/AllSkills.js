import React from "react";
import SkillBox from "./SkillBox";

function AllSkills(props){
    return (
        <div className="skillsFlex">
            {props.skillBoxes.map((skillbox) => (
                <SkillBox title={skillbox.title} skills={skillbox.skills}/>
            ))}
        </div>
    );
}

export default AllSkills;