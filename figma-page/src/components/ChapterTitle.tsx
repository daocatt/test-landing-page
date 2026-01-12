import React from 'react';

interface ChapterTitleProps {
    /**
     * The text to display in the vertical title.
     * Defaults to "CHAPTER TWO" as per design.
     */
    text?: string;
    className?: string;
}

const ChapterTitle: React.FC<ChapterTitleProps> = ({
    text = "CHAPTER TWO",
    className = ""
}) => {
    return (
        <div className={`hidden min-[769px]:block select-none ${className}`}>
            <p
                className="font-bold text-[#efefef] text-[165px] leading-none tracking-[1.65px] text-center whitespace-nowrap"
                style={{
                    fontFamily: "'Barlow', sans-serif",
                    writingMode: 'vertical-rl',
                }}
                data-node-id="1:456"
            >
                {text}
            </p>
        </div>
    );
};

export default ChapterTitle;
