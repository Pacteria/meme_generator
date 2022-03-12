import React from "react"
import trollFaceHeaderPic from '../images/troll-face.png'
import "../styles/header.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFaceHeaderPic}
                alt = 'trollFaceHeaderPic'
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}