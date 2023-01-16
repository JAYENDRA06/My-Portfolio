import React, { useState } from "react";

const projectsInfo = [
  {
    title: "DOC-UDI",
    src: "docudi",
    desc: "doc-udi is A QR Based Healthcare Management System, made to implement the concept of UPI in the medical world Each doctor will have a unique QR that the patient has to scan to schedule/start appointments. Once the patient scans the QR, the doctor will have access to all the previous medical records. The new prescription issued will be stored on cloud. Made using Flutter, React, Nodejs, MongoDB, Python",
    link: "https://github.com/DOC-UDI/doc-udi-backend"
  },
  {
    title: "ddsvcs-UDI",
    src: "docudi",
    desc: "doc-udi is A QR Based Healthcare Management System, made to implement the concept of UPI in the medical world Each doctor will have a unique QR that the patient has to scan to schedule/start appointments. Once the patient scans the QR, the doctor will have access to all the previous medical records. The new prescription issued will be stored on cloud. Made using Flutter, React, Nodejs, MongoDB, Python",
    link: "https://github.com/DOC-UDI/doc-udi-backend"
  },
];

function Project() {
  const [count, setCount] = useState(0);
  const maxCount = 2;

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
