import React, { useState } from "react";

const projectsInfo = [
  {
    title: "DOC-UDI",
    src: "docudi",
    desc: "doc-udi is A QR Based Healthcare Management System, made to implement the concept of UPI in the medical world Each doctor will have a unique QR that the patient has to scan to schedule/start appointments. Once the patient scans the QR, the doctor will have access to all the previous medical records. The new prescription issued will be stored on cloud. Made using Flutter, React, Nodejs, MongoDB, Python",
    link: "https://github.com/orgs/DOC-UDI/repositories"
  },
  {
    title: "No excuses",
    src: "noexcuses",
    desc: "A fitness app made to suggest meals and exercises based on user inputs of his daily routine and intakes. The ML model predicts the work-life balance score using which the diet and exercise plans are decided. Made using Flutter, Nodejs, MongoDB, Python",
    link: "https://github.com/Cypher-Dawgs"
  },
  {
    title: "CheatSheet",
    src: "cheatsheet",
    desc: "A simple note sharing application where students can share their notes and see all the other notes upladed by them and everyone separately. User state is maintained using sessions so that they can view, update and delete their notes. Made using HTML, CSS, Javascript, Php, MySQL, Jquery and XML",
    link: "https://github.com/JAYENDRA06/CheatSheet"
  },
  {
    title: "Inneed",
    src: "inneed",
    desc: "A webapp which can be used by girls when they are in need of sanitary napkins or in case of a distress situation. Users can register themselves on this app as helpers and then their location will be displayed on user interface. Whenever a girl needs sanitary napkins, nearest store loactions and helper locations will be displayed using which they can go to those locations and get help. For now the front-end is made using html,css and javascript, will be developed with ReactJS is future",
    link: "https://github.com/JAYENDRA06/Hackulus_Frontend"
  }
];

function Project() {
  const [count, setCount] = useState(0);
  const maxCount = 4;

  return (
    <div className="projectContainer">
      <img
        src="../../images/arrow.svg"
        className="decArrow"
        onClick={() =>
          count === 0
            ? setCount(maxCount - 1)
            : setCount((count - 1) % maxCount)
        }
        alt="leftArrow"
      />

      <div className="projectComponentOuter">
        <div className="projectComponent">
          <div className="projectHeading">
            <img
              className="cloud1"
              src="../../images/cloud.svg"
              alt="cloudImage"
            />
            <p>{projectsInfo[count].title}</p>
            <img
              className="cloud2"
              src="../../images/cloud.svg"
              alt="cloudImage"
            />
          </div>
          <div className="projectDesc">
            <img
              className="projectImg"
              src={"../../images/projects/" + projectsInfo[count].src + ".png"}
              alt="projectpng"
            />
            <p>{projectsInfo[count].desc}</p>
          </div>
        </div>
      </div>
      <img
        src="../../images/arrow.svg"
        className="incArrow"
        onClick={() => setCount((count + 1) % maxCount)}
        alt="rightArrow"
      />
      <a href={projectsInfo[count].link} className="projectGithub">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}

export default Project;
