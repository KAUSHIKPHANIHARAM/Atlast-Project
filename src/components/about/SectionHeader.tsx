interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
    return (
        <div className={`text-center mb-8 ${className} bg-[#020817ff]`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mt-4"></div>
        </div>
    );
}