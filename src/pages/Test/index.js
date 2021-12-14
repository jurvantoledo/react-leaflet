import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/forest_video.mp4"
import './style.scss'

export default function TestPage() {
    return (
        <section className="parallax" style={{
            height: '100vh',
            overflow: 'hidden'
        }}>
            <div className="parallax-background">
                <video className='videoTag' autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="parallax-button">
                    <Link to={"/coming-soon"}>
                        <button className="secretgarden-button">
                            Enter the secret garden
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}