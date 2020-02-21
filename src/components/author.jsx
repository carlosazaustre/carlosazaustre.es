import React from "react"
import profilePic from "../../static/carlos-azaustre-gde-web.png"
import TwitterFollowBtn from "../../src/components/twitter-follow-button"

export default () => {

    return (
      <div
        style={{
          display: `flex`,
          marginBottom: `1.25em`,
          padding: `1.25em`,
          backgroundColor: "#ffd600",
          color: "#333"
        }}
      >
        <img
          src={profilePic}
          alt="Carlos Azaustre"
          style={{
            display: `block`,
            marginRight: `1em`,
            marginBottom: 0,
            width: 90,
            height: 90,
            borderRadius: `100%`
          }}
        />
        <div>
          <p>
            Soy <strong>Carlos Azaustre</strong>. Me dedico al desarrollo web.
            Actualmente trabajo como <em>Senior Frontend Engineer</em> en
            Eventbrite. Fui nombrado en 2019 GDE (Google Developer Expert) en
            Tecnologías Web. Desde 2013 intento documentar en éste blog todo lo
            que aprendo y así compartirlo con el resto de la comunidad.
            {` `}
            <TwitterFollowBtn username="carlosazaustre" />
          </p>
          <p>
            Si te gusta lo que lees, puedes apoyarme en mi <em>Patreon</em> o
            invitarme a un café virtual 🙂
          </p>
          <a
            href="https://www.patreon.com/bePatron?u=2390240"
            data-patreon-widget-type="become-patron-button"
          >
            ¡Se mi Patrón/a!!
          </a>
          <script
            async
            src="https://c6.patreon.com/becomePatronButton.bundle.js"
          ></script>
          <a
            href="https://www.buymeacoffee.com/carlosazaustre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
                src="https://cdn.buymeacoffee.com/buttons/lato-red.png"
                alt="Buy Me A Coffee"
                style={{ 
                    width: `175px`
                }}
            />
          </a>
        </div>
      </div>
    );
}