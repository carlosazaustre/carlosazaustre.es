import React from "react"

export default ({ username }) => (
    <a href={`https://twitter.com/intent/follow?screen_name=${username}`}>
        <img src={`https://img.shields.io/twitter/follow/carlosazaustre.svg?label=Follow%20@${username}`} alt={`Follow @${username}`} />
    </a>
);