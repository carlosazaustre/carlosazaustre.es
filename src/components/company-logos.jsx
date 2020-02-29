import React from "react"
import cheflyLogo from "../../static/chefly-logo.png"
import ibmLogo from "../../static/ibm-logo.png"
import googleLogo from "../../static/google-logo.png"
import ebLogo from "../../static/eb-logo.png"
import './company-logos.css'

export default () => (
    <div className="CompanyLogos">
        <img className="CompanyLogos_img" src={ebLogo} alt="eventbrite" title="Eventbrite"/>
        <img className="CompanyLogos_img" src={ibmLogo} alt="IBM Research" title="IBM Research / Quantum Computing"/>
        <img className="CompanyLogos_img" src={googleLogo} alt="Google" title="Google, Developer Relations"/>
        <img className="CompanyLogos_img" src={cheflyLogo} alt="Chefly" title="Chefly.es"/>
    </div>
)