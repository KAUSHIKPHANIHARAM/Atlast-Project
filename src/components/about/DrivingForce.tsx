import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DrivingForce() {
    return (
        <section id="driving-force" className="scroll-mt-24 bg-[#020817ff] py-16">
            <Reveal>
                <SectionHeader title="Driving Force" subtitle="The vision that powers our journey" />
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-cyan-100/30 to-blue-200/30 rounded-2xl shadow-lg hover-scale border-0 p-4">
                        <CardHeader>
                            <CardTitle className="text-[#00B4D8]">Mission</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white/85">
                            To lead the transformation of the motorcycle industry with hydrogen fuel cell–powered technology, contributing to a cleaner, more sustainable world.
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-cyan-100/30 to-blue-200/30 rounded-2xl shadow-lg hover-scale border-0 p-4">
                        <CardHeader>
                            <CardTitle className="text-[#0077B6]">Vision</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white/85">
                            Build safe, efficient, and scalable hydrogen solutions that unlock joyful riding and meaningful environmental impact.
                        </CardContent>
                    </Card>
                </div>
            </Reveal>
        </section>
    );
}
