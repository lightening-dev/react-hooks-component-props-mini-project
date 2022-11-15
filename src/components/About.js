
import React from "react"


function About({image = 'https://via.placeholder.com/215', about}) {

    return (
    <aside>
        <img src={image} alt="blog logo"></img>
        <p>{about}</p>
    </aside>
    )
}

About.defaultProps = {src: 'https://via.placeholder.com/215'}

export default About;