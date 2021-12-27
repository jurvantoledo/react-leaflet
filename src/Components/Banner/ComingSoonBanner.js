import React from "react"
import ScrollButton from "../ScrollButton";
import './Banner.scss'

export default function ComingSoonBanner(props) {
    const scrollToBottom = () =>{ 
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
                backgroundImage: "url(/resources/images/banners/coming_soon_banner.jpg)"
            }}
        >
        <div className="banner-text">
            <h1>Coming Soon</h1>
        </div>
        <ScrollButton scroll={scrollToBottom} />
        </div>
    )
}
