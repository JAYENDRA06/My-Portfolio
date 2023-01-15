import React from "react";

function SkillBox(props){
    return(
        <div className="skillBox">
            <h3>{props.title}</h3>
            <div className="skills">{props.skills.map((skill) => <p>{skill}</p>)}</div>
        </div>
    );
}

export default SkillBox;