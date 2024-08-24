import React from "react";

function SideBarButton({ children }) {
  const link = children.content.link;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={`sideBarButton ${children.index}`} onClick={handleClick}>
      <img src={children.content.icon} alt="" />
      <p>{children.content.text}</p>
    </div>
  );
}

export default SideBarButton;
