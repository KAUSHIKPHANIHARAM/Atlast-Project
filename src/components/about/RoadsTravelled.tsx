import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { FaRocket, FaStar, FaCheckCircle } from "react-icons/fa"; // FontAwesome icons for visual cues

const timeline = [
    {
        year: "2022",
        title: "The Birth of a Vision",
        items: [
            {
                icon: <FaRocket className="text-[#00B4D8]" />,
                text: (
                    <span>
                        <strong>ATLAST Takes Off: </strong>
                        What started as an idea transformed into reality in January, fueled by a passion to revolutionize the future of hydrogen-fueled vehicles.
                    </span>
                ),
            },
            {
                icon: <FaStar className="text-[#0077B6]" />,
                text: (
                    <span>
                        <strong>Big Boots–In: </strong>
                        Our ambition became reality as a 6.5k pilot project, and our vision began turning dreams into electrifying results.
                    </span>
                ),
            },
            {
                icon: <FaCheckCircle className="text-[#023E8A]" />,
                text: (
                    <span>
                        <strong>First Win: </strong>
                        Our team stepped into the spotlight at IITH, where we secured runner-up at the IIM-D Fab Pitching Challenge.
                    </span>
                ),
            },
            {
                icon: <FaStar className="text-[#03045E]" />,
                text: (
                    <span>
                        <strong>A Home for Innovation: </strong>
                        By September, ATLAST found its first incubator at IITH, setting the stage for bigger breakthroughs.
                    </span>
                ),
            },
        ],
    },
    {
        year: "2023",
        title: "Laying the Foundation for Disruption",
        items: [
            {
                icon: <FaCheckCircle className="text-[#00B4D8]" />,
                text: (
                    <span>
                        <strong>Design Patent Secured: </strong>
                        January brought a major milestone as we received our design patent, validating our innovation. We also became part of the prestigious IICBGD BIRAC2023 cohort.
                    </span>
                ),
            },
            {
                icon: <FaRocket className="text-[#0077B6]" />,
                text: (
                    <span>
                        <strong>Prototype Unveiled: </strong>
                        In May, we launched our first prototype, an achievement driven by our team: Charles (Director, R&D), alongside our makers and engineers.
                    </span>
                ),
            },
            {
                icon: <FaStar className="text-[#023E8A]" />,
                text: (
                    <span>
                        <strong>Strengthening Our Roots: </strong>
                        August marked major site purchases at IIT Foundation, adding new skills to ATLAST’s growing team.
                    </span>
                ),
            },
            {
                icon: <FaCheckCircle className="text-[#03045E]" />,
                text: (
                    <span>
                        <strong>New Fuel for Growth: </strong>
                        October brought another milestone as we secured a UTI grant from 50k (MINT grant), further powering our vision.
                    </span>
                ),
            },
        ],
    },
    {
        year: "2024",
        title: "The Year of Recognition",
        items: [
            {
                icon: <FaRocket className="text-[#00B4D8]" />,
                text: (
                    <span>
                        <strong>Stepping into the Big League: </strong>
                        ATLAST made its mark at the Goa Road Nationals in February.
                    </span>
                ),
            },
            {
                icon: <FaStar className="text-[#0077B6]" />,
                text: (
                    <span>
                        <strong>National Spotlight: </strong>
                        Breaking new boundaries, ATLAST bagged India’s top E-OCAI award in finals, propelling our potential on a national stage.
                    </span>
                ),
            },
            {
                icon: <FaCheckCircle className="text-[#023E8A]" />,
                text: (
                    <span>
                        <strong>Driving Change: </strong>
                        In October, we prepare to go global, as ATLAST takes the first edition of HFC4, shaping the future of energy solutions.
                    </span>
                ),
            },
        ],
    },
];

// UI component
export default function RoadsTravelled() {
    return (
        <section id="roads-travelled" className="scroll-mt-24 bg-[#020817ff] py-16"> {/* Unified background */}
            <Reveal>
                <SectionHeader title="Roads Travelled" />
                <div className="mt-12 max-w-3xl mx-auto">
                    <ol className="relative border-l-2 border-[#00B4D8] pl-8 space-y-16">
                        {timeline.map((yearItem, idx) => (
                            <li key={yearItem.year} className="relative">
                                <div className="absolute -left-4 top-2 h-5 w-5 rounded-full bg-gradient-to-tr from-[#00B4D8] via-[#0077B6] to-[#03045E] border-2 border-white shadow-lg" />
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {yearItem.year} <span className="opacity-70">—</span> <span className="text-[#00B4D8]">{yearItem.title}</span>
                                </h3>
                                <ul className="space-y-3 ml-2">
                                    {yearItem.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            {item.icon}
                                            <span className="text-white/85">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </Reveal>
        </section>
    );
}
