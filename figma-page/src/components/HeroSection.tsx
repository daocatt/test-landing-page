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
            className={`relative w-full aspect-[1440/524] max-w-[90rem] mx-auto bg-contain bg-center bg-no-repeat overflow-hidden mt-0 flex justify-center items-center ${className}`}
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Hero Content Area: 37.5625rem width, 100% height, centered, with padding */}
            <div className="w-[37.5625rem] h-full flex flex-col justify-center items-center relative py-[4.1875rem] px-[6.46875rem]">
                {/* Item 1: Title Image */}
                <div className="w-full px-[0.875rem] py-0 mb-4">
                    <img src={itemTitle} alt="卒業後サポートが一生続く！" className="w-full h-auto object-contain" />
                </div>

                {/* Item 2: Text Content */}
                <h1 className="flex flex-col items-center justify-center leading-none select-none min-h-[14rem]">
                    {/* Line 1 */}
                    <span className="font-bold text-[#333333] text-[1.981875rem] tracking-wide">
                        未経験から最短で
                    </span>

                    {/* Line 2 */}
                    <div className="flex items-baseline mt-2">
                        <span className="font-bold text-[4.954375rem] bg-clip-text text-transparent bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] min-h-[1.2em]">
                            {text1}
                        </span>
                        <span className="font-bold text-[3.8925rem] bg-clip-text text-transparent bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] min-h-[1.2em]">
                            {text2}
                        </span>
                    </div>

                    {/* Line 3 */}
                    <span className="font-bold text-[2.83125rem] bg-clip-text text-transparent bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] mt-2 min-h-[1.2em]">
                        {text3}
                    </span>
                </h1>

                {/* Item 3: Buttons */}
                <div className="w-full flex justify-between mt-8">
                    {/* Button 1 */}
                    <div
                        className="flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[0.125rem] hover:shadow-[0.125rem_0.125rem_0rem_#333333] transition-all duration-200"
                        style={{
                            width: '11.678125rem',
                            height: '4.034375rem',
                            background: 'linear-gradient(80.56deg, #E6DEC7 2.76%, #EFEBDB 52.27%, #E6DEC7 95.93%)',
                            boxShadow: '0.2831rem 0.2831rem 0rem #333333',
                            borderRadius: '0.495rem',
                        }}
                    >
                        <span className="font-bold text-[#333333] text-[0.9375rem] leading-tight">最短2ヶ月で</span>
                        <span className="font-bold text-[#333333] text-[1.1325rem] leading-tight">副業開始できる！</span>
                    </div>

                    {/* Button 2 */}
                    <div
                        className="flex flex-col justify-center items-center text-center cursor-pointer hover:translate-y-[0.125rem] hover:shadow-[0.125rem_0.125rem_0rem_#333333] transition-all duration-200"
                        style={{
                            width: '11.678125rem',
                            height: '4.034375rem',
                            background: 'linear-gradient(80.56deg, #E6DEC7 2.76%, #EFEBDB 52.27%, #E6DEC7 95.93%)',
                            boxShadow: '0.2831rem 0.2831rem 0rem #333333',
                            borderRadius: '0.495rem',
                        }}
                    >
                        <span className="font-bold text-[#333333] text-[0.9375rem] leading-tight">案件紹介</span>
                        <span className="font-bold text-[#333333] text-[1.1325rem] leading-tight">制作サポート完備！</span>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default HeroSection;
