import React from "react";

const VideoStream = () => {
  return (
    <div className="m-10">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/-_5dLLUbXNc?si=8xUSC-mGWNJnhLod"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoStream;
