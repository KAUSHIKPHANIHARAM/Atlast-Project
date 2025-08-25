import Reveal from "./Reveal";
import { Card } from "@/components/ui/card";
import img from "@/assets/wynn-xp-red.png"

export default function DrivingForce() {
    return (
        <section
            id="driving-force"
            className="scroll-mt-24 bg-background py-16 transition-colors duration-300"
        >
            <Reveal>
                {/* Header */}
                <div className="font-lovelo text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                        DRIVING FORCE
                    </h2>
                    <p className="mt-2 text-sm md:text-base tracking-wide uppercase text-muted-foreground">
                        The vision that powers our journey
                    </p>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-primary/40" />
                </div>

                {/* Mission + Vision Layout */}
                <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    {/* Mission */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-1/2">
                            <img
                                src={img}
                                alt="Mission"
                                className="rounded-2xl shadow-lg object-cover w-full h-full"
                            />
                        </div>
                        <Card className="w-full md:w-1/2 rounded-2xl border border-border shadow-card bg-card bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8">
                            <h3 className="text-2xl font-bold text-primary mb-3">Mission</h3>
                            <p className="text-foreground/90 leading-relaxed">
                                To lead the transformation of the motorcycle industry with
                                hydrogen fuel cell–powered technology, contributing to a cleaner,
                                more sustainable world.
                            </p>
                        </Card>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:flex-row-reverse">
                        <div className="w-full md:w-1/2">
                            <img
                                src={img}
                                alt="Vision"
                                className="rounded-2xl shadow-lg object-cover w-full h-full"
                            />
                        </div>
                        <Card className="w-full md:w-1/2 rounded-2xl border border-border shadow-card bg-card bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8">
                            <h3 className="text-2xl font-bold text-primary mb-3">Vision</h3>
                            <p className="text-foreground/90 leading-relaxed">
                                Build safe, efficient, and scalable hydrogen solutions that
                                unlock joyful riding and meaningful environmental impact.
                            </p>
                        </Card>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
