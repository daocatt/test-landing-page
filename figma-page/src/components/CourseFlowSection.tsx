import React from 'react';
import icon1 from '../assets/images/flow-icon-1.svg';
import icon2 from '../assets/images/flow-icon-2.svg';
import icon3 from '../assets/images/flow-icon-3.svg';
import numberBg from '../assets/images/flow-number-bg.svg';
import ChapterTitle from './ChapterTitle';

const CourseFlowSection: React.FC = () => {
    return (
        <section className="w-full max-w-[90rem] mx-auto flex flex-col items-center pt-[5rem] pb-[7.5rem] gap-[2.5rem] bg-white relative">
            <div className="absolute top-[50px] right-0 z-0 opacity-20 pointer-events-none">
                {/* Optional reusing of ChapterTitle if appropriate, usually top right */}
            </div>

            <h2 className="text-black text-[2.25rem] font-bold tracking-[0.1125rem] leading-normal text-center">
                受講の流れ
            </h2>

            <div className="flex flex-col min-[769px]:flex-row justify-center items-center gap-[1.25rem] w-full px-5">
                {/* Step 1 */}
                <div className="group relative w-full max-w-[19.375rem] flex-shrink-0 mt-[40px] transition-transform duration-300 hover:rotate-3">
                    {/* Number Badge */}
                    <div className="absolute -top-[25.5px] left-[50%] -translate-x-[50%] w-[3.1875rem] h-[3.1875rem] flex items-center justify-center z-10">
                        <img src={numberBg} alt="" className="absolute inset-0 w-full h-full" />
                        <span className="relative z-10 text-white text-[2rem] font-bold leading-normal">1</span>
                    </div>
                    {/* Card Body */}
                    <div className="w-full bg-white border-4 border-[#BF5331] rounded-[0.625rem] flex flex-col items-center pt-[3.125rem] px-[0.9375rem] pb-[1.875rem] gap-[1rem] h-[19.125rem] shadow-sm relative z-0 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#E06A45]">
                        {/* Icon */}
                        <div className="w-[4.9375rem] h-[4.875rem] aspect-[79/78] flex-shrink-0">
                            <img src={icon1} alt="" className="w-full h-full object-contain" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col items-center gap-[0.625rem] text-[#333]">
                            <h3 className="text-[1.25rem] font-bold tracking-[0.0625rem] whitespace-nowrap">
                                無料カウンセリングに参加
                            </h3>
                            <p className="text-[1rem] leading-[180%] tracking-[0.05rem] text-center font-normal">
                                無料カウンセリングに参加！<br />
                                <span className="underline decoration-solid">こちら</span>から日程調整可能です！
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative w-full max-w-[19.375rem] flex-shrink-0 mt-[40px] transition-transform duration-300 hover:-rotate-3">
                    {/* Number Badge */}
                    <div className="absolute -top-[25.5px] left-[50%] -translate-x-[50%] w-[3.1875rem] h-[3.1875rem] flex items-center justify-center z-10">
                        <img src={numberBg} alt="" className="absolute inset-0 w-full h-full" />
                        <span className="relative z-10 text-white text-[2rem] font-bold leading-normal">2</span>
                    </div>
                    {/* Card Body */}
                    <div className="w-full bg-white border-4 border-[#BF5331] rounded-[0.625rem] flex flex-col items-center pt-[3.125rem] px-[0.9375rem] pb-[1.875rem] gap-[1rem] h-[19.125rem] shadow-sm relative z-0 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#E06A45]">
                        {/* Icon */}
                        <div className="w-[4.9375rem] h-[4.875rem] aspect-[79/78] flex-shrink-0">
                            <img src={icon2} alt="" className="w-full h-full object-contain" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col items-center gap-[0.625rem] text-[#333]">
                            <h3 className="text-[1.25rem] font-bold tracking-[0.0625rem] whitespace-nowrap">
                                受講申し込み
                            </h3>
                            <p className="text-[1rem] leading-[180%] tracking-[0.05rem] text-center font-normal">
                                お申し込みが確認でき次第、<br />
                                担当者からご連絡させて<br />
                                いただきます。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative w-full max-w-[19.375rem] flex-shrink-0 mt-[40px] transition-transform duration-300 hover:rotate-3">
                    {/* Number Badge */}
                    <div className="absolute -top-[25.5px] left-[50%] -translate-x-[50%] w-[3.1875rem] h-[3.1875rem] flex items-center justify-center z-10">
                        <img src={numberBg} alt="" className="absolute inset-0 w-full h-full" />
                        <span className="relative z-10 text-white text-[2rem] font-bold leading-normal">3</span>
                    </div>
                    {/* Card Body */}
                    <div className="w-full bg-white border-4 border-[#BF5331] rounded-[0.625rem] flex flex-col items-center pt-[3.125rem] px-[0.9375rem] pb-[1.875rem] gap-[1rem] h-[19.125rem] shadow-sm relative z-0 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#E06A45]">
                        {/* Icon */}
                        <div className="w-[4.9375rem] h-[4.875rem] aspect-[79/78] flex-shrink-0">
                            <img src={icon3} alt="" className="w-full h-full object-contain" />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col items-center gap-[0.625rem] text-[#333]">
                            <h3 className="text-[1.25rem] font-bold tracking-[0.0625rem] whitespace-nowrap">
                                受講開始
                            </h3>
                            <p className="text-[1rem] leading-[180%] tracking-[0.05rem] text-center font-normal">
                                担当者がしっかりと<br />
                                サポートさせていただきます。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default CourseFlowSection;
