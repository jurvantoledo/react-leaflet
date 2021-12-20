import React, { useRef, useState } from "react"
import ScrollButton from "../ScrollButton";
import './Banner.scss'

export default function ComingSoonBanner(props) {
    const [visible, setVisible] = useState(true);
    const myRef = useRef();

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0)
        {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }

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
            <button onClick={scrollToBottom} 
                style={{ background: 'transparent', border: 'none', color: '#fff', fontWeight: 'bold', fontSize: '1.8rem', position: 'absolute', right: '0', left: '0', margin: '0 auto', fontFamily: "Cormorant Infant" }}>
                Scroll
            </button>
        </div>
        </div>
    )
}