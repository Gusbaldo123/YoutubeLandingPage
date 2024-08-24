import React from "react";
import SearchBar from "./SearchBar";
import './HeadSection.css';

function HeadSection({ isSidebarActive, ToggleSidebar }) {
  return (
    <section className="headSection">
      <div className="headBox">
        <button className="toggleSidebarButton" onClick={ToggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" fill="white"></path>
          </svg>
        </button>
        <button className="logoButton" onClick={ClickIcon}>
          <img src="/img/imgLogo.png" alt="" />
        </button>
        <SearchBar />
      </div>
    </section>
  );
}

function ClickIcon() {
  window.open("https://www.gusbaldo.com", "_self");
}

export default HeadSection;
