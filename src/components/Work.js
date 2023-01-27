import React, {useState} from "react";

const workExp = [
    {
        time: "16th july 2021 - 16th aug 2021",
        position: "Web-dev intern",
        company: "compendious medworks",
        desc: "Worked with the web dev team on internal projects involving the usage of languages like HTML, CSS ,JS and Php with Bootstrap"
    },
    {
        time: "January 2022 - January 2023",
        position: "Design Head",
        company: "ISA-VIT",
        desc: "Mentored core members on design and web development. Designed user interfaces for internal projects and designed poster for publicity"
    }
]

function Work(props) {

    const [clickCount, setClickCount] = useState(0);
    const countOfWork = 2;

 return(
    <div className="workComponent">
        <img src="../../images/arrow2.svg" alt="carousel-left-arrow" className="workLeftArrow" onClick={() => clickCount===0 ? setClickCount(countOfWork-1) : setClickCount((clickCount-1)%countOfWork)} />
        <div className="workInfo">
            <p>
                {workExp[clickCount].time}
            </p>
            <div className="positionDiv">
                <h1>{workExp[clickCount].position}</h1>
                <p>{workExp[clickCount].company}</p>
            </div>
            <p>{workExp[clickCount].desc}</p>
        </div>
        <img src="../../images/arrow2.svg" alt="carousel-left-arrow" className="workRightArrow" onClick={() => setClickCount((clickCount+1)%countOfWork)} />
    </div>
 );
}

export default Work;