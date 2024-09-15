import React from "react";

const VideoStream = () => {
  return (
    <div className="m-10">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/-_5dLLUbXNc?si=8xUSC-mGWNJnhLod"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoStream;
