import React from "react"
import NewsletterForm from "./newsletter";
import profilePic from "../../static/carlos-azaustre-gde-web.png"

export default () => {

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
          backgroundColor: `#FCCB0B`,
          borderRadius: `10px`,
          color: `#333`
        }}
      >
        <img
          src={profilePic}
          alt="Carlos Azaustre"
          style={{
            display: `block`,
            marginRight: `1em`,
            margin: `0 auto`,
            width: 90,
            height: 90,
            borderRadius: `100%`
          }}
        />
        <div>
          <p>
            Soy <strong>Carlos Azaustre</strong>. Me dedico al desarrollo web.
            Actualmente trabajo como <strong>Senior Frontend Engineer</strong>{" "}
            en Eventbrite. Fui nombrado en 2019 <strong>GDE (Google Developer Expert) en Tecnologías Web</strong>.
            Desde 2013 intento documentar en éste blog todo lo que aprendo y así
            compartirlo con el resto de la comunidad.
            {` `}
          </p>
          <p>
              Si te gusta lo que lees, puedes ser <a href="https://github.com/sponsors/carlosazaustre">mi sponsor a través de GitHub</a>, o
            invitarme a un café virtual 🙂
          </p>
          <p
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-evenly`
            }}
          >
            <a
              href="https://www.buymeacoffee.com/carlosazaustre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/lato-red.png"
                alt="Invítame a un Café"
                style={{
                  width: `175px`,
                  borderRadius: `5px`
                }}
              />
            </a>
          </p>
          <NewsletterForm />
        </div>
      </div>
    );
}
