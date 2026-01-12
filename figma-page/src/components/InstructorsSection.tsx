import React, { useState } from 'react';
import instructorPhoto from '../assets/images/instructor-photo.png';

interface InstructorCardProps {
    name: string;
    enName: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, enName }) => {
    return (
        <div className="w-[calc(100vw-40px)] min-[769px]:w-full min-[769px]:max-w-[466px] flex flex-col items-center bg-white border-2 border-[#bf5331] shrink-0">
            {/* Header / Top Profile Section */}
            <div className="w-full h-[137px] bg-gradient-to-r from-[#bf5331] to-[#ef6a5a] flex items-center justify-between min-[769px]:justify-start px-4 py-[10px] min-[769px]:px-[30px] gap-4 min-[769px]:gap-1 relative">
                {/* Name Info */}
                <div className="flex flex-col items-start min-w-0 z-10 text-white">
                    <div className="text-[1.5rem] font-bold leading-normal tracking-[0.075rem] mb-1">
                        {name}
                    </div>
                    <div className="text-[1rem] font-medium leading-normal tracking-[0.05rem]">
                        {enName}
                    </div>
                </div>

                {/* Photo (Circular Mask) */}
                <div className="relative min-[769px]:absolute min-[769px]:right-2 min-[769px]:top-[10px] w-[7.3125rem] h-[7.3125rem] rounded-full overflow-hidden border-[4px] border-white/0 shrink-0">
                    <img src={instructorPhoto} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Content Body */}
            <div className="w-full p-[10px] min-[769px]:p-[30px] min-[769px]:pb-[40px] flex flex-col gap-[28px]">

                {/* Career Section */}
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col items-start gap-[10px]">
                        <span className="text-[#333] text-[19px] font-bold leading-none">経歴</span>
                        <hr className="w-full border-t border-[#333]" />
                    </div>

                    {/* List Items */}
                    <ul className="flex flex-col gap-[12px] list-none p-0 m-0 text-[#333] text-[16px] font-normal leading-[1.4]">
                        <li className="flex items-start gap-[10px]">
                            <span className="shrink-0 w-[10px] h-[10px] bg-[#333] mt-[6px] block" />
                            <span>新卒から約10年間東京の広告代理店に勤務。主にWeb広告の運用、メディアプランニングに従事。</span>
                        </li>
                        <li className="flex items-start gap-[10px]">
                            <span className="shrink-0 w-[10px] h-[10px] bg-[#333] mt-[6px] block" />
                            <span>2019年より個人事業にて映像制作を開始。</span>
                        </li>
                        <li className="flex items-start gap-[10px]">
                            <span className="shrink-0 w-[10px] h-[10px] bg-[#333] mt-[6px] block" />
                            <span>現在はフリーランスとして大分県を拠点に、企業や店舗のPV・Web広告の企画、撮影、制作を中心に行いながら映画の制作にも携わっている。</span>
                        </li>
                    </ul>
                </div>

                {/* Message Section */}
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col items-start gap-[10px]">
                        <span className="text-[#333] text-[19px] font-bold leading-none">メッセージ</span>
                        <hr className="w-full border-t border-[#333]" />
                    </div>
                    <p className="text-[#333] text-[16px] font-normal leading-[1.8]">
                        何か新しいことに挑戦する時にはそれなりのパワーと、勇気がいると思います。本講座で、仲間と一緒に学んでもらいながら少しでも皆さんの後押しができればと考えてます。一緒に全力で映像 制作を楽しみましょう！
                    </p>
                </div>

            </div>
        </div>
    );
};

const InstructorsSection: React.FC = () => {
    // 4 items: 2 original + 2 test
    const items = [
        { name: "長田 圭二先生", enName: "Nagata Keiji" },
        { name: "長田 圭二先生", enName: "Nagata Keiji" },
        { name: "test-1", enName: "test-1" },
        { name: "test-2", enName: "test-2" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 769 : false);

    const touchStartX = React.useRef(0);
    const touchEndX = React.useRef(0);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const step = isMobile ? 1 : 2;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + step >= items.length ? 0 : prev + step));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - step < 0 ? items.length - step : prev - step));
    };

    // Touch handlers for mobile swiping
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        const threshold = 50; // Minimum swipe distance in px

        if (diff > threshold) {
            handleNext();
        } else if (diff < -threshold) {
            handlePrev();
        }

        // Reset
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Width = card width + gap
    const cardWidth = isMobile ? (window.innerWidth - 40) : 466;
    const gap = isMobile ? 8 : 40;
    const slideDistance = currentIndex * (cardWidth + gap);

    return (
        <section className="w-full bg-[#FAFAFA] py-[40px] min-[769px]:py-[80px] flex flex-col items-center overflow-hidden">
            <div className="w-full max-w-[1440px] px-0 min-[769px]:px-[86px] flex flex-col items-center gap-[40px]">
                {/* Title */}
                <h2 className="text-[#333] text-[1.75rem] min-[769px]:text-[36px] font-bold tracking-[1.8px] leading-normal text-center">
                    講師紹介
                </h2>

                {/* Carousel Container */}
                <div className="flex items-center gap-0 min-[769px]:gap-[40px] w-full justify-between min-[769px]:justify-center px-0">

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="flex items-center justify-center w-5 h-5 min-[769px]:w-[48px] min-[769px]:h-[48px] text-[#999] hover:text-[#333] cursor-pointer shrink-0"
                    >
                        <div className="w-0 h-0 border-t-[5px] min-[769px]:border-t-[12px] border-t-transparent border-r-[8px] min-[769px]:border-r-[20px] border-r-current border-b-[5px] min-[769px]:border-b-[12px] border-b-transparent" />
                    </button>

                    {/* Viewport (Window for 2 cards) */}
                    <div
                        className="flex-1 min-[769px]:flex-none min-[769px]:w-full min-[769px]:max-w-[972px] overflow-hidden"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Moving Track */}
                        <div
                            className="flex gap-2 min-[769px]:gap-[40px] transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${slideDistance}px)` }}
                        >
                            {items.map((item, index) => (
                                <InstructorCard key={index} name={item.name} enName={item.enName} />
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center w-5 h-5 min-[769px]:w-[48px] min-[769px]:h-[48px] text-[#999] hover:text-[#333] cursor-pointer shrink-0"
                    >
                        <div className="w-0 h-0 border-t-[5px] min-[769px]:border-t-[12px] border-t-transparent border-l-[8px] min-[769px]:border-l-[20px] border-l-current border-b-[5px] min-[769px]:border-b-[12px] border-b-transparent" />
                    </button>
                </div>

                {/* Dots / Pagination */}
                <div className="flex gap-[15px] mt-[10px]">
                    {Array.from({ length: Math.ceil(items.length / step) }).map((_, dotIndex) => {
                        const isActive = Math.floor(currentIndex / step) === dotIndex;
                        return (
                            <span
                                key={dotIndex}
                                onClick={() => setCurrentIndex(dotIndex * step)}
                                className={`w-[15px] h-[15px] rounded-full cursor-pointer transition-colors ${isActive ? 'bg-[#999]' : 'bg-[#ccc]'}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InstructorsSection;
