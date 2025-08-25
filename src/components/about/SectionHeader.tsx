interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    className = "",
}: SectionHeaderProps) {
    return (
        <div className={`text-center mb-8 ${className}`}>
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
            </h2>

            {/* Subtitle (optional) */}
            {subtitle && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}

            {/* Decorative underline */}
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>
    );
}
