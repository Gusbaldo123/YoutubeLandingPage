import React from "react";

import infos from "../infos/video.json";
import TagsYt from "./TagsYt";
import VideoYt from "../components/VideoYt";

import "./VideoSection.css";

function VideoSection()
{
  return (
    <section className="videoSection">
      <div className="tagList">
        <TagsYt data={infos}/>
      </div>
      <div className="videoList">
      {
          infos.videos.map((element, index) => 
          <VideoYt>{{"content":element, "index": index}}</VideoYt>)
          /*Fill screen with videos*/
      }
      </div>
    </section>
  );
}

export default VideoSection;