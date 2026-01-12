import React, { useState, useEffect } from 'react';
import heroBg from '../assets/images/hero-bg.png';

import itemTitle from '../assets/images/item-title.png';

interface HeroSectionProps {
    className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
    const fullText1 = "即戦力";
    const fullText2 = "の";
    const fullText3 = "Webデザイナーに";

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        // Total steps:
        // 1. "即"(1)
        // 2. "戦"(2)
        // 3. "力"(3)
        // 4. "の"(4)
        // 5. "W"(5) ... "に"(12) 
        // Total chars: 3 + 1 + 8 = 12

        const totalChars1 = fullText1.length;
        const totalChars2 = fullText2.length;
        const totalChars3 = fullText3.length;

        const interval = setInterval(() => {
            currentIndex++;

            // Phase 1: Text 1
            if (currentIndex <= totalChars1) {
                setText1(fullText1.slice(0, currentIndex));
            }
            // Phase 2: Text 2
            else if (currentIndex <= totalChars1 + totalChars2) {
                setText2(fullText2.slice(0, currentIndex - totalChars1));
            }
            // Phase 3: Text 3
            else if (currentIndex <= totalChars1 + totalChars2 + totalChars3) {
                setText3(fullText3.slice(0, currentIndex - (totalChars1 + totalChars2)));
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className={`relative w-full h-[32.75rem] max-w-[90rem] mx-auto overflow-hidden mt-0 flex justify-center items-center ${className}`}
        >
            {/* Background Image (Hidden on Mobile) */}
            <div
                className="absolute inset-0 z-0 hidden min-[769px]:block bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Hero Content Area: 37.5625rem width, 100% height, centered, with padding */}
            <div className="w-full min-[769px]:w-[37.5625rem] h-full flex flex-col justify-center items-center relative z-10 px-[2.31rem] pt-[1.06rem] pb-[6.25rem] min-[769px]:py-[4.1875rem] min-[769px]:px-[6.46875rem]">
                {/* Item 1: Title Image */}
                <div className="w-full max-w-[24rem] min-[769px]:max-w-full px-[0.875rem] py-0 mb-4">
                    <img src={itemTitle} alt="卒業後サポートが一生続く！" className="w-full h-auto object-contain" />
                </div>

                {/* Item 2: Text Content */}
                <h1 className="flex flex-col items-center justify-center leading-none select-none min-h-[14rem]">
                    {/* Line 1 */}
                    <span className="font-bold text-[#333333] text-[1.51869rem] min-[769px]:text-[1.981875rem] leading-normal min-[769px]:leading-none tracking-wide">
                        未経験から最短で
                    </span>

                    {/* Line 2 */}
                    <div className="flex items-baseline mt-2">
                        <span className="font-bold text-[3.79669rem] min-[769px]:text-[4.954375rem] leading-normal min-[769px]:leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] min-h-[1.2em]">
                            {text1}
                        </span>
                        <span className="font-bold text-[2.98313rem] min-[769px]:text-[3.8925rem] leading-normal min-[769px]:leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] min-h-[1.2em]">
                            {text2}
                        </span>
                    </div>

                    {/* Line 3 */}
                    <span className="font-bold text-[2.16956rem] min-[769px]:text-[2.83125rem] leading-normal min-[769px]:leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] mt-2 min-h-[1.2em]">
                        {text3}
                    </span>
                </h1>

                {/* Item 3: Buttons */}
                <div className="flex items-center justify-center mt-8 w-full h-[3.09163rem] gap-[0.97631rem] min-[769px]:w-full min-[769px]:h-auto min-[769px]:justify-between min-[769px]:gap-0">
                    {/* Button 1 */}
                    <div
                        className="flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[0.125rem] hover:shadow-[0.125rem_0.125rem_0rem_#333333] transition-all duration-200 w-[8.94938rem] min-[769px]:w-[11.678125rem] h-[3.09163rem] min-[769px]:h-[4.034375rem] px-[0.2rem] min-[769px]:p-0 py-[0.54238rem] shrink-0 whitespace-nowrap"
                        style={{
                            background: 'linear-gradient(80.56deg, #E6DEC7 2.76%, #EFEBDB 52.27%, #E6DEC7 95.93%)',
                            boxShadow: '0.2831rem 0.2831rem 0rem #333333',
                            borderRadius: '0.495rem',
                        }}
                    >
                        <span className="font-bold text-[#333333] text-[0.86781rem] min-[769px]:text-[0.9375rem] leading-normal min-[769px]:leading-tight">最短2ヶ月で</span>
                        <span className="font-bold text-[#333333] text-[0.86781rem] min-[769px]:text-[1.1325rem] leading-normal min-[769px]:leading-tight">副業開始できる！</span>
                    </div>

                    {/* Button 2 */}
                    <div
                        className="flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[0.125rem] hover:shadow-[0.125rem_0.125rem_0rem_#333333] transition-all duration-200 w-[8.94938rem] min-[769px]:w-[11.678125rem] h-[3.09163rem] min-[769px]:h-[4.034375rem] px-[0.2rem] min-[769px]:p-0 py-[0.54238rem] shrink-0 whitespace-nowrap"
                        style={{
                            background: 'linear-gradient(80.56deg, #E6DEC7 2.76%, #EFEBDB 52.27%, #E6DEC7 95.93%)',
                            boxShadow: '0.2831rem 0.2831rem 0rem #333333',
                            borderRadius: '0.495rem',
                        }}
                    >
                        <span className="font-bold text-[#333333] text-[0.86781rem] min-[769px]:text-[0.9375rem] leading-normal min-[769px]:leading-tight">案件紹介</span>
                        <span className="font-bold text-[#333333] text-[0.86781rem] min-[769px]:text-[1.1325rem] leading-normal min-[769px]:leading-tight">制作サポート完備！</span>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Overlay (Mobile Only) */}
            <div
                className="min-[769px]:hidden absolute bottom-0 left-0 w-full h-[4.25rem] z-20 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, white 0%, white 20%, transparent 100%)'
                }}
            />
        </section>
    );
};


export default HeroSection;
