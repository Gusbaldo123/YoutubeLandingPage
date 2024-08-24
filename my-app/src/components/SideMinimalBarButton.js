import React from "react";

function SideMinimalBarButton({ children }) {
  const link = children.content.link;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className={`sideMinimalBarButton ${children.index}`} onClick={handleClick}>
      <img src={children.content.icon} alt="" />
    </div>
  );
}

export default SideMinimalBarButton;