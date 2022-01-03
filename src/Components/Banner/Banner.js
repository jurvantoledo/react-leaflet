import React from "react"
import ScrollButton from "../ScrollButton";
import './Banner.scss'

export default function ComingSoonBanner(props) {
    // Scrolls to the section the ref is called on
    const scrollToSection = () =>{ 
        window.scrollTo({ 
          top: props.myRef.current.offsetTop, 
          behavior: 'smooth'
        }); 
      }; 

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

            <ScrollButton scroll={scrollToSection} />
        </div>
    )
}
