import React from "react"

export default ({ videoId, playlist }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      {videoId && (
        <iframe
          title={videoId}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
        />
      )}

      {playlist && (
        <iframe
          title={videoId}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/videoseries?list=${playlist}`}
          frameBorder="0"
        />
      )}
    </div>
  );
};
