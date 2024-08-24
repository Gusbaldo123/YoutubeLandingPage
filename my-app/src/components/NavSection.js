import React, { useEffect } from "react";
import infos from "../infos/video.json";
import SideBarButton from "../components/SideBarButton";
import SideMinimalBarButton from "../components/SideMinimalBarButton";
import "./NavSection.css";

function NavSection({ isSidebarActive }) {
  
  useEffect(() => {
    const videoSection = document.querySelector(".videoSection");
    if (videoSection) {
      videoSection.style.width = isSidebarActive ? "85%" : "90%";
    }
  }, [isSidebarActive]);

  if (isSidebarActive) {
    return (
      <div className="sideBar">
        {infos.navBar.map((element, index) => (
          <SideBarButton key={index} >{{ "content": element, "index": index }}</SideBarButton>
        ))}
        <hr />
        <p>Desenvolvido como estudo e portfólio por Gusbaldo</p>
      </div>
    );
  } else {
    return (
      <div className="sideMinimalBar">
        {infos.navBar.map((element, index) => (
          <SideMinimalBarButton key={index}>{{ "content": element, "index": index }}</SideMinimalBarButton>
        ))}
      </div>
    );
  }
}

export default NavSection;
