import React, { useEffect } from "react";

export const TidycalEmbed = () => {
  // const tidycalUrl = `carlosazaustre/videollamada-30-minutos`;

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://tidycal.com/js/embed.js");
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    // <div
    //   id="tidycal-embed"
    //   data-path={tidycalUrl}
    //   style={{ width: "100%", height: "600px" }}
    // ></div>
    <iframe
      width="300px"
      height="800px"
      scrolling="no"
      style={{ overflow: "hidden", border: 0, margin: "0 auto" }}
      src="https://tidycal.com/carlosazaustre/videollamada-30-minutos"
    ></iframe>
  );
};
