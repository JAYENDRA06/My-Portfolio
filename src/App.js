import React, { useState, useEffect } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import ProgressBar from "./components/ProgressBar";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const windowWidth = window.innerWidth;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          { windowWidth > 970 ? <Navbar /> : null }
          <ProgressBar />

          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </>
      )}
    </>
  );
}

export default App;
