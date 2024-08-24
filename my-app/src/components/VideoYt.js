import React, { useState } from "react";

function VideoYt({ children }) {
  const videoContent = children.content;
  const [clicked, setClicked] = useState(false);

  const videoClick = () => {
    console.log("VideoClick");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 350); // 200ms para a transição
    window.open(videoContent.link, '_self');
  };

  const channelClick=() =>{
    console.log("ChannelClick");
  }

  return (
    <div className={`video ${clicked ? "clicked" : ""} ${children.index}`} onClick={videoClick}>
      <img src={videoContent.thumb} alt="Youtube Thumb" className="imgThumb" />
      <div className={"videoContent"}>
        <img src={videoContent.icon} alt="Channel Icon" className="imgChannel" onClick={channelClick}/>
        <div className={"videoDescription"}>
          <h3>{videoContent.title}</h3>
          <p onClick={channelClick}>{videoContent.channelName}</p>
          <p>{videoContent.views} • {videoContent.date}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoYt;
