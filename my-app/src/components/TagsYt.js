import React, { useState, useEffect } from "react";

function TagsYt({ data }) {
  const [selectedTag, setSelectedTag] = useState(data.tags[0]);

  function tagClick(tag) {
    setSelectedTag(tag);
  }

  useEffect(() => {
    // Ensure that the first tag is selected initially
    setSelectedTag(data.tags[0]);
  }, [data.tags]);

  return (
    <>
      <button className="tagNext">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path></svg>
      </button>
      <div className="tagVisibility">
      {data.tags.map((tag, index) => (
        <button
          key={index}
          className={`tag ${index} ${selectedTag === tag ? " clicked" : ""}`}
          onClick={() => tagClick(tag)}
        >
          {tag}
        </button>
      ))}
      </div>
      <button className="tagNext">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
      </button>
    </>
  );
}

export default TagsYt;
