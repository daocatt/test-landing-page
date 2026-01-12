import React from 'react';

interface TestimonialCardProps {
    /**
     * The source URL for the testimonial image.
     */
    imageSrc: string;
    /**
     * Alt text for the image.
     */
    imageAlt?: string;
    /**
     * Array of title lines to be displayed with a black background.
     */
    titles: string[];
    /**
     * The main testimonial content text.
     */
    description: string;
    /**
     * The name or identifier of the person giving the testimonial.
     */
    name: string;
    /**
     * Controls the layout direction. 
     * 'left' means image on the left, text on the right.
     * 'right' means image on the right, text on the left.
     * Default is 'right' based on the Figma design provided.
     */
    imagePosition?: 'left' | 'right';
    className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    imageSrc,
    imageAlt = '',
    titles,
    description,
    name,
    imagePosition = 'right',
    className = '',
}) => {
    const isImageRight = imagePosition === 'right';

    return (
        <div className={`flex items-start gap-[30px] ${isImageRight ? 'flex-row' : 'flex-row-reverse'} ${className}`}>
            {/* Text Content */}
            <div className="flex flex-col items-start p-[30px] shrink-0">
                <div className="flex flex-col gap-[16px] items-start">
                    {/* Titles */}
                    <div className="flex flex-col gap-[5px] items-start">
                        {titles.map((line, index) => (
                            <div key={index} className="bg-[#333] flex items-center justify-center px-[5px] py-0">
                                <p className="font-bold text-[24px] text-white tracking-[1.2px] leading-normal font-sans">
                                    {line}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Description and Name */}
                    <div className="flex flex-col gap-[10px] items-end font-normal text-black w-[368px]">
                        <p className="text-[16px] leading-[1.5] tracking-[0.48px] font-sans text-left">
                            {description}
                        </p>
                        <p className="text-[12px] tracking-[0.36px] font-sans">
                            {name}
                        </p>
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div
                className="relative shrink-0 w-[330px] h-[245px] transition-transform duration-300 hover:scale-[1.05]"
                style={{
                    boxShadow: '10px 10px 0px 0px rgba(0, 0, 0, 0.25)'
                }}
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover relative z-10"
                />
            </div>
        </div>
    );
};

export default TestimonialCard;
