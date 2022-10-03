import React, { useState, useEffect, createRef } from "react"
import kaart from "../../assets/kaart.png"
import './style.scss'
import Section from "../../Layout/Section";
import SectionWrapper from "../../Layout/Section/SectionWrapper";
import Form from "./Form";
import Banner from '../../Components/Banner'

export default function ComingSoonPage() {
    const myRef = createRef();
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => { setOffsetY(window.pageYOffset); };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll)};
    }, [])

    return (
        <>
            <Banner image="url(/resources/images/banners/banner.jpg)" title='Coming Soon' myRef={myRef} />
            <SectionWrapper name='coming-soon'>
                <Section style={{ position: 'relative', paddingBottom: '225px' }} ref={myRef}>
                  <div className="background_component_1" />
                    <div className="container">
                        <h2>The Secret Garden</h2>
                        <p>
                            A dense green tunnel. Its undergrowth rustles, its foliage flutters. You continue walking in silence, softly touching leaves with your fingertips. 
                            A mob of blue tits startles you while they chatter away. They take no heed of you. Small gaps in the thicket reveal bright colors. Flower petals? Butterflies? 
                            You listen closely. There's the buzzing of bees, a splash of water, and soft, friendly voices in the distance. You stop. On the path in front of you sits 
                            a little wren. It points its tail spunkily towards the sky while clenching a spider in its pecker. The bird tilts its head at the sight of you and looks 
                            you right into the eye. You open your mouth to talk to it, but it has already darted away to the other side of the hedge. You'll meet again, you're sure of it.
                            A breeze, coming from the end of the path, carries the scent of earth, herbs, fruits, and flowers. You follow a bend. A dry stone wall and a gate with a 
                            round door appear. You step closer: the door is ajar…
                        </p>
                        <p>
                            The story doesn't stop here. It only begins. Soon, the door to the Secret Garden will open. Follow the wren and discover grassland, water, hill, 
                            and hedgerows, but an edible forest and a nursery garden, too. All abound with life, and all mosaic pieces to a unity. You'll find a great diversity 
                            of plants, trees, mushrooms, flowers, and wildlife. Still, this place does not just serve itself. You may be part of it. The secret to this garden is 
                            that it endeavors to meet the needs of both nature and people. It shows how economic value can go hand in hand with the scenic and the natural. Thriving 
                            flora and fauna don't have to go at the cost of production. On the contrary, the Secret Garden combines both to its advantage. By doing so, the Garden 
                            may even strengthen our connection to nature, inspire curiosity, and wonder, and, ultimately, joy. 
                        </p>
                    </div>
                    {/* <div className="component_2 wrapper" style={{ transform: `translateY(${offsetY * -.75}px)` }}>
                        <div className="background_component_2" style={{ transform: `rotate(${offsetY / -20}deg)`, right: `${offsetY * -.1}px` }} />
                    </div> */}
                </Section>

                <Section>
                {/* <div className="background_component_3" /> */}
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
                                    <p>For questions, please leave us a message.</p>
                                    <Form 
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="component_4 wrapper" >
                            <div className="background_component_4" style={{ height: `${offsetY / 3.5}px`}} />
                        </div>
                        <div className="component_5 wrapper">
                            <div className="background_component_5" />
                        </div> */}
                    </div>
                </Section>
            </SectionWrapper>
        </>
    )
}
