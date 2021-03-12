import React from "react";

const styles = {
  wrapper: {
    backgroundColor: "#ffe47a",
    textAlign: "center",
    padding: "0.75em 1em",
  },
  link: {
    display: "block",
    width: "100%",
    textDecoration: "none",
  },
};

export default () => (
  <div style={styles.wrapper}>
    <a
      style={styles.link}
      href="https://leanpub.com/aprendiendo-javascript/c/COVID19"
    >
      <span role="img" aria-label="ebook">
        📔
      </span>{" "}
      Consigue desde aquí mi eBook <em>"Aprendiendo JavaScript"</em> por sólo $5
      con el cupón <strong>COVID19</strong>
      <span role="img" aria-label="ebook">
        📔
      </span>
    </a>
  </div>
);
