import React, { useState } from "react";
import HeadSection from "../components/HeadSection";
import NavSection from "../components/NavSection";
import VideoSection from "../components/VideoSection";
import "./Youtube.css";

function Youtube() {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const ToggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <HeadSection isSidebarActive={isSidebarActive} ToggleSidebar={ToggleSidebar} />
      <div className="pageBody">
        <NavSection isSidebarActive={isSidebarActive} />
        <VideoSection />
      </div>
    </>
  );
}

export default Youtube;
