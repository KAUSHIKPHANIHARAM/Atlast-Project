import React from 'react'
import DrivingForce from './about/DrivingForce'
import OurFuel from './about/OurFuel'
import BeyondTheGarage from './about/BeyondTheGarage'
import RidingCrew from './about/RidingCrew'
import Navbar from './Navbar'
import RoadsTravelled from './about/RoadsTravelled'

const About = () => {
    return (
        <main className="bg-background text-foreground transition-colors duration-300">
            <Navbar />

            <section id="driving" className="scroll-mt-20 py-10 md:py-16">
                <DrivingForce />
            </section>

            <section id="fuel" className="scroll-mt-20 py-10 md:py-16">
                <OurFuel />
            </section>


            <section id="roads" className="scroll-mt-20 py-10 md:py-16">
                <RoadsTravelled />
            </section>


            <section id="garage" className="scroll-mt-20 py-10 md:py-16">
                <BeyondTheGarage />
            </section>


            <section id="crew" className="scroll-mt-20 py-10 md:py-16">
                <RidingCrew />
            </section>

        </main>
    )
}

export default About
