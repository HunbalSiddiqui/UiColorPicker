import React from 'react'
import './NavBar.css'
function NavBar({
    title = "My Title",
    description = "My description",
    titleColor = "green",
    descriptionColor = "lightgrey"
}) {
    return (
        <div className="nav flex-col">
            <h1 style={{color:`${titleColor}`}}>{title}</h1>
            <h2 style={{color:`${descriptionColor}`}}>{description}</h2>
        </div>
    )
}

export default NavBar
