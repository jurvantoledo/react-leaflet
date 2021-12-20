import React, { useState, useEffect, useRef } from "react"
import ComingSoonBanner from "../../Components/Banner/ComingSoonBanner";
import kaart from "../../assets/kaart.png"
import './style.scss'

export default function ComingSoonPage() {
    const myRef = useRef();
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => { setOffsetY(window.pageYOffset); };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll)};
    }, [])

    return (
        <>
        <ComingSoonBanner myRef={myRef} />
        <section className="coming-soon-1" ref={myRef}>
        <div className="background_component_1" />
            <div className="container">
                <h2>The Secret Garden</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="component_2 wrapper" style={{ transform: `translateY(${offsetY * -.75}px)` }}>
                <div className="background_component_2" style={{ transform: `rotate(${offsetY / -20}deg)`, right: `${offsetY * -.1}px` }} />
            </div>
        </section>

        <section className="coming-soon-2">
        <div className="background_component_3" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <figure>
                            <img src={kaart} alt="secretgarden" />
                        </figure>
                    </div>
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                        <div className="text-col">
                            <h2>Are you curious?</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <form>
                                <div className="form-control">
                                    <input />
                                </div>
                                <div className="form-control">
                                    <input />
                                </div>
                                <div className="form-control">
                                    <textarea style={{width: "100%", border: 'none' }}>
                                    </textarea>
                                </div>
                                <div className="form-control">
                                    <button>
                                        Verzenden
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="component_4 wrapper" >
                    <div className="background_component_4" style={{ height: `${offsetY / 3.5}px`}} />
                </div>
                <div className="component_5 wrapper">
                    <div className="background_component_5" />
                </div>
            </div>
        </section>
        </>
    )
}