import React from "react"
import NewsletterForm from "./newsletter";
import profilePic from "../../static/carlos-azaustre-gde-web.png"

export default ({ showNewsletter = true }) => {
    return (
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `start`,
          flexWrap: `no-wrap`,
          justifyContent: `center`,
          marginBottom: `1.25em`,
          padding: `1.25em`,
          backgroundColor: `rgba(190,190,190, 0.3)`,
          borderRadius: `10px`,
          // color: `#333`
        }}
      >
        <img
          src={profilePic}
          alt="Carlos Azaustre"
          style={{
            display: `block`,
            marginRight: `1em`,
            margin: `0 auto`,
            width: 120,
            height: 120,
            borderRadius: `100%`,
            border: `3px solid white`,
          }}
        />
        <div>
          <p>
            Soy <strong>Carlos Azaustre</strong>. Desarrollador web desde hace más de 8 años.
            He trabajado en Google, IBM y Eventbrite. Soy{" "}
            <strong>GDE (Google Developer Expert) en Tecnologías Web</strong>.
            Desde 2013 intento documentar en éste blog todo lo que aprendo y así
            compartirlo con el resto de la comunidad.
            {` `}
          </p>
          {
            showNewsletter && <NewsletterForm
              title="📬 Únete y estate al día en desarrollo web"
              text="Recibe puntualmente información sobre las últimas novedades en tecnologías
                    web y desarrollo web moderno para que estés siempre actualizadx:"
            />
          }
        </div>
      </div>
    );
}
