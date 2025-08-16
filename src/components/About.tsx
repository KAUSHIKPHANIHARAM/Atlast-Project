import React from 'react'
import DrivingForce from './about/DrivingForce'
import OurFuel from './about/OurFuel'
import BeyondTheGarage from './about/BeyondTheGarage'
import RidingCrew from './about/RidingCrew'

import RoadsTravelled from './about/RoadsTravelled'

const About = () => {
    return (
        <main className="bg-[#020817ff] text-foreground">
            {/* Optional: Section Nav */}
            <nav className="sticky top-0 bg-background z-10 py-4 border-b border-muted backdrop-blur-md">
                <ul className="flex justify-center gap-6 text-sm sm:text-base font-medium">
                    <li><a href="#driving" className="hover:text-blue-500">Driving Force</a></li>
                    <li><a href="#fuel" className="hover:text-blue-500">Our Fuel</a></li>
                    <li><a href="#roads" className="hover:text-blue-500">Roads Travelled</a></li>
                    <li><a href="#garage" className="hover:text-blue-500">Beyond the Garage</a></li>
                    <li><a href="#crew" className="hover:text-blue-500">Riding Crew</a></li>
                </ul>
            </nav>

            {/* Sections with scroll anchors */}
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
