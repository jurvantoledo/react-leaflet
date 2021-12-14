import React from "react";
import './Banner.scss'

export default function ComingSoonBanner() {
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
        </div>
    )
}