import React from "react"
import ScrollButton from "../ScrollButton";
import ScrollToSection from "../ScrollButton/ScrollToSection";
import './Banner.scss'

export default function Banner(props) {
    return (
        <div 
            className="banner"
            id="banner"
            style={{
                backgroundImage: props.image
            }}
        >
            <div className="banner-text">
                <h1>{props.title}</h1>
            </div>

            <ScrollButton onClick={() => ScrollToSection(props)} />
        </div>
    )
}
