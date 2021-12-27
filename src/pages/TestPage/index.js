import Button from "@mui/material/Button";
import React, { Children, cloneElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../../assets/forest_video.mp4"
import Section from "../../Layout/Section";
import SectionWrapper from "../../Layout/Section/SectionWrapper";
import './style.scss'

export default function TestPage() {
    return (
        <>
            <SectionWrapper name='test'>
                <Section>
                    Dit is section 1
                </Section>
                <Section>
                    Dit is section 2
                </Section>
            </SectionWrapper>
        </>
    )
}

{/* <section className="parallax" style={{
    height: '100vh',
    overflow: 'hidden'
}}>
    <div className="parallax-background">
        <video className='videoTag' autoPlay loop muted>
            <source src={video} type="video/mp4"/>
        </video>
        <div className="parallax-button">
            <Link to={"/"}>
                <Button variant="contained" color="success">
                    Enter the secret garden
                </Button>
            </Link>
        </div>
    </div>
</section> */}