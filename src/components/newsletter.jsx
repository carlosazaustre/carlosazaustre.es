import React from "react";
import { css } from "emotion";

const styles = {
    form: {
        width: "90%",
        textAlign: "center",
        margin: "0 auto",
    },
    block: {
        display: "flex",
        justifyContent: "space-around"
    },
    input: {
        margin: "1em",
        padding: "1em",
        borderRadius: "5px",
        borderWidth: "0",
        borderColor: "gray",
        fontSize: "10pt",
        width: "45%"
    },
    button: {
        width: "250px",
        margin: "1em",
        padding: "1em",
        backgroundColor: "#333",
        color: "#fff",
        border: 0,
        borderRadius: "5px",
        fontSize: "10pt"
    }
}

export default ({
  title,
  text,
  formId = "e0t6z8",
  submitText = "¡Únete!",
  hash = "v87f6253ef300d8389c2a107d688de385",
  version = "1815658",
  dataCode = "e0t6z8"
}) => (
  <div
    className={css`
      background-color: #fccb0b;
      padding: 1em;
      border-radius: 5px;
    `}
  >
    <h4
      className={css`
        color: #222;
        text-align: center;
        font-size: 1.4em;
      `}
    >
      {title}
    </h4>
    <p
      className={css`
        color: #222;
        text-align: center;
      `}
    >
      {text}
    </p>
    <form
      style={styles.form}
      action={`https://app.mailerlite.com/webforms/submit/${formId}`}
      data-code={dataCode}
      method="post"
      target="_blank"
    >
      <div style={styles.block}>
        <input
          type="text"
          style={styles.input}
          data-inputmask=""
          name="fields[name]"
          placeholder="Tu Nombre..."
          autoComplete="name"
        />
        <input
          type="email"
          style={styles.input}
          data-inputmask=""
          name="fields[email]"
          placeholder="Tu Email..."
          autoComplete="email"
        />
      </div>
      <input type="hidden" name="ml-submit" value="1" />
      <div className="ml-form-embedSubmit">
        <button type="submit" style={styles.button}>
          {submitText}
        </button>
        <button
          disabled="disabled"
          style={{ display: "none" }}
          type="button"
          className="loading"
        >
          {" "}
          <div className="ml-form-embedSubmitLoad">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>{" "}
        </button>
      </div>
    </form>
    <small style={{ display: "block", color: "#222", textAlign: "center", margin: "0 auto" }}>
      <span role="img" aria-label="secure">
        🔒
      </span>{" "}
      Libre de Spam. Sólo contenido que te interesa.
    </small>

    <img
      src={`https://track.mailerlite.com/webforms/o/${version}/${formId}?${hash}`}
      width="1"
      height="1"
      style={{
        maxWidth: "1px",
        maxHeight: "1px",
        visibility: "hidden",
        padding: 0,
        margin: 0,
        display: "block"
      }}
      alt="."
      border="0"
    />
    <script
      src={`https://static.mailerlite.com/js/w/webforms.min.js?${hash}`}
      type="text/javascript"
    ></script>
  </div>
);