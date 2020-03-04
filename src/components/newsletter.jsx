import React from "react";

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

export default () => (
    <>
    <h4 style={{ textAlign: "center", fontSize: "1.2em" }}>Únete y estate al día en desarrollo web</h4>
    <p>Recibe puntualmente información sobre las últimas novedades en tecnologías web y desarrollo web moderno para que estés siempre actualizadx:</p>
    <form style={styles.form} action="https://app.mailerlite.com/webforms/submit/e0t6z8" data-code="e0t6z8" method="post" target="_blank">
        <div style={styles.block}>
            <input type="text" style={styles.input} data-inputmask="" name="fields[name]" placeholder="Tu Nombre..." autocomplete="name" />
            <input type="email" style={styles.input} data-inputmask="" name="fields[email]" placeholder="Tu Email..." autocomplete="email"/>
        </div>
        <input type="hidden" name="ml-submit" value="1"/>
        <div className="ml-form-embedSubmit">
            <button type="submit" style={styles.button}>Únete!</button>
            <button disabled="disabled" style={{ display:"none"}} type="button" classNameName="loading"> <div className="ml-form-embedSubmitLoad"><div></div><div></div><div></div><div></div></div> </button>
        </div>
    </form>
    <small style={{ display: "block", textAalign: "center", margin: "0 auto" }}><span role="img" aria-label="secure">🔒</span> Libre de Spam. Sólo contenido que te interesa.</small>

    <img src="https://track.mailerlite.com/webforms/o/1815658/e0t6z8?v53cae9d473694604508d13feaac0545b" width="1" height="1" style={{maxWidth:"1px",maxHeight:"1px",visibility:"hidden",padding:0,margin:0,display:"block"}} alt="." border="0" />
    <script src="https://static.mailerlite.com/js/w/webforms.min.js?v53cae9d473694604508d13feaac0545b" type="text/javascript"></script>
    </>
);