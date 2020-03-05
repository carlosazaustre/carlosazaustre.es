import React from "react"

const styles = {
  wrapper: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
    marginBottom: "2em",
    height: 0
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
};

export default ({ videoId, playlist }) => {
  return (
    <div className="video" style={styles.wrapper}>
      {videoId && (
        <iframe
          title={videoId}
          style={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          loading="lazy"
        />
      )}

      {playlist && (
        <iframe
          title={videoId}
          style={styles.iframe}
          src={`https://www.youtube.com/embed/videoseries?list=${playlist}`}
          frameBorder="0"
          loading="lazy"
        />
      )}
    </div>
  );
};
