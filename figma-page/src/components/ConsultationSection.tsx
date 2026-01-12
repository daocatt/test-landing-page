import React from 'react';
import consultationBg from '../assets/images/consultation-bg.png';
import chatbox from '../assets/images/chatbox.svg';
import chatboxDot1 from '../assets/images/chatbox-dot-1.svg';
import chatboxDot2 from '../assets/images/chatbox-dot-2.svg';

import underDecoration from '../assets/images/under-doceration.png';

interface ConsultationSectionProps {
    className?: string;
}

const ConsultationSection: React.FC<ConsultationSectionProps> = ({ className = '' }) => {
    return (
        <section
            id="consultation"
            className={`w-full max-w-[90rem] mx-auto flex flex-col items-center py-[5rem] gap-[2.5rem] relative overflow-hidden ${className}`}
            style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${consultationBg}) lightgray 0px -344.304px / 113.834% 172.186% no-repeat`
            }}
        >

            {/* Content Container */}
            <div className="flex flex-col items-center gap-[40px] w-full">

                {/* Speech Bubbles */}
                <div className="flex flex-col md:flex-row gap-[2.5rem] items-center">
                    {/* Bubble 1: Left */}
                    {/* Bubble 1: Left */}
                    <div className="relative w-[13rem] h-[8.25rem]">
                        <div className="absolute top-0 left-0 w-full h-[6.5625rem] z-10">
                            <img src={chatbox} alt="" className="absolute inset-0 w-full h-full drop-shadow-[2px_2px_0_#333]" />
                            <div className="absolute inset-0 flex items-center justify-center pb-[0.625rem]">
                                <p className="text-[#333] text-base font-bold text-center leading-7 tracking-wide">
                                    未経験からでも<br />大丈夫？
                                </p>
                            </div>
                        </div>
                        <img
                            src={chatboxDot1}
                            className="absolute left-[10.25rem] top-[6.75rem] w-[0.8125rem] h-[0.8125rem] drop-shadow-[2px_2px_0_#333]"
                            alt=""
                        />
                        <img
                            src={chatboxDot2}
                            className="absolute left-[11.06rem] bottom-0 w-[0.5rem] h-[0.5rem] drop-shadow-[2px_2px_0_#333]"
                            alt=""
                        />
                    </div>

                    {/* Bubble 2: Right */}
                    <div className="relative w-[13rem] h-[8.25rem]">
                        <div className="absolute top-0 left-0 w-full h-[6.5625rem] z-10">
                            <img src={chatbox} alt="" className="absolute inset-0 w-full h-full drop-shadow-[2px_2px_0_#333]" />
                            <div className="absolute inset-0 flex items-center justify-center pb-[0.625rem]">
                                <p className="text-[#333] text-base font-bold text-center leading-7 tracking-wide">
                                    自分には<br />どのコースが合ってる？
                                </p>
                            </div>
                        </div>
                        <img
                            src={chatboxDot1}
                            className="absolute left-[10.25rem] top-[6.75rem] w-[0.8125rem] h-[0.8125rem] drop-shadow-[2px_2px_0_#333]"
                            alt=""
                        />
                        <img
                            src={chatboxDot2}
                            className="absolute left-[11.06rem] bottom-0 w-[0.5rem] h-[0.5rem] drop-shadow-[2px_2px_0_#333]"
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-[1.25rem]">
                    {/* Main Text Block Container */}
                    <div className="flex flex-col items-center gap-[1.25rem]">

                        {/* Title Group */}
                        <div className="w-[42.25rem] flex flex-col justify-center items-center gap-[1rem]">
                            <h2 className="text-white text-4xl font-bold tracking-widest text-center">
                                無料相談実施中！
                            </h2>
                            <img
                                src={underDecoration}
                                alt=""
                                className="w-[18.875rem] h-[0.1875rem]"
                            />
                        </div>

                        <p className="text-white text-base font-bold leading-7 tracking-wide text-center">
                            プロのカウンセラーになんでも相談可能！
                        </p>
                    </div>

                    {/* CTA Button Area */}
                    <div className="flex flex-col items-center gap-[10px] w-full max-w-[480px]">
                        {/* Badge */}
                        <div className="relative bg-gradient-to-l from-[#d6d3d1] via-[#e7e5e4] to-[#d6d3d1] px-[10px] py-[5px] rounded-[6px] shadow-md z-20 top-4">
                            <p className="text-[#333] text-base font-semibold">
                                10秒で簡単予約！質問相談何でもOK！
                            </p>
                        </div>

                        {/* Button */}
                        <a
                            href="#consultation"
                            className="w-96 h-16 bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] rounded-[0.4375rem] flex items-center justify-center relative transition-all duration-200 hover:shadow-[0px_4px_0px_0px_#A04A36] hover:-translate-y-[2px]"
                        >
                            <div className="flex items-center gap-[15px]">
                                <span className="text-white text-2xl font-bold">
                                    Zoom無料相談はこちら
                                </span>
                            </div>
                            {/* Shine effect overlay (simplified) */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[10px] pointer-events-none"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;
