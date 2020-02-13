import React from "react"
import profilePic from "../../static/carlos-azaustre-gde-web.png"
import TwitterFollowBtn from "../../src/components/twitter-follow-button"

export default () => {

    return (
        <div
        style={{
            display: `flex`,
            marginBottom: `1em`,
            paddingTop: `1em`,
            borderTop: `1px solid #ccc`
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
                    borderRadius: `100%`,
                }}
            />
            <p>
                Escrito por <strong>Carlos Azaustre</strong>, Desarrollador Frontend y apasionado de JavaScript. GDE en Tecnologías Web.
                {` `}
                <TwitterFollowBtn username="carlosazaustre" />
            </p>
        </div>
    )
}