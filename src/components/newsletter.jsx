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
        flexDirection: "column",
        alignItems: "center"
    },
    input: {
        padding: "1em",
        margin: "0.5em",
        borderRadius: "5px",
        borderWidth: "0",
        borderColor: "gray",
        fontSize: "10pt",
        width: "250px",
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
      background-color: #FBCF65;
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
      action="http://newsletter.carlosazaustre.es/add_subscriber"
      id="revue-form" 
      name="revue-form" 
      method="post"
      target="_blank"
    >
      <div style={styles.block}>
        <input
          type="text"
          style={styles.input}
          class="revue-form-field"
          data-inputmask=""
          name="member[first_name]"
          id="member_first_name"
          placeholder="Tu Nombre..."
          autoComplete="name"
        />
        <input
          type="email"
          style={styles.input}
          data-inputmask=""
          placeholder="Tu Email..."
          class="revue-form-field" 
          name="member[email]"
          id="member_email"
          autoComplete="email"
        />
      </div>
      <input type="hidden" name="ml-submit" value="1" />
      <div className="ml-form-embedSubmit">
        <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
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
          <div class="revue-form-footer">
              By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> 
              and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
        </div>
    </form>
    <small style={{ display: "block", color: "#222", textAlign: "center", margin: "0 auto" }}>
      <span role="img" aria-label="secure">
        🔒
      </span>{" "}
      Libre de Spam. Sólo contenido que te interesa.
    </small>
  </div>
);
