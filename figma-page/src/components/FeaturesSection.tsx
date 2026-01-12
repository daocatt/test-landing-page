import React from 'react';
import content1Img from '../assets/images/content-1.jpg';
import content2Img from '../assets/images/content-2.jpg';
import contentLogo1 from '../assets/images/content-logo-1.png';
import featuresBg from '../assets/images/features-bg.png';
import contentTyImg from '../assets/images/content-ty.png';
import contentKrImg from '../assets/images/content-kr.png';
import TestimonialCard from './TestimonialCard';
import ChapterTitle from './ChapterTitle';

// Removed the placeholder svgImageHref since it is no longer used

interface FeaturesSectionProps {
    className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className = '' }) => {
    return (
        <section
            className={`w-full mx-auto min-h-[48.625rem] h-auto relative ${className}`}
            style={{
                backgroundImage: `url(${featuresBg})`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain' // Changed to cover for better responsiveness
            }}
        >
            {/* Main Content Container */}
            <div id="features-section" className="relative z-10 flex flex-col justify-center items-center w-full max-w-[90rem] pt-[5rem] pb-[7.5rem] gap-[2.5rem] mx-auto">

                {/* Header Group (Logo + Title) */}
                <div className="flex flex-col items-center">
                    {/* Logo Image */}
                    <div className="w-[5.0625rem] h-[3.125rem]">
                        <img src={contentLogo1} alt="Content Logo" className="w-full h-full object-contain" />
                    </div>

                    {/* Heading Text */}
                    <div className="flex justify-center">
                        <h2
                            className="font-bold text-[#333333] text-[2.25rem] tracking-[0.1125rem] font-sans leading-normal"
                        >
                            デザインコースとは？
                        </h2>
                    </div>
                </div>

                {/* Content Box */}
                <div className="flex justify-center items-center gap-[2.5rem]">
                    {/* Left Side: Text */}
                    <div className="flex flex-col items-start gap-[0.625rem]">
                        {/* Line 1 */}
                        {/* Wrapper for the first line with box styling */}
                        <div className="inline-flex justify-center items-center gap-[0.625rem] px-[0.625rem] py-[0.3125rem] bg-[#333333] self-start max-w-fit">
                            <p className="font-bold text-white text-[2.125rem] tracking-[0.10625rem] font-sans leading-normal text-left">
                                卒業後が"スタート"
                            </p>
                        </div>
                        {/* Line 2 */}
                        <p className="font-bold text-[2.125rem] tracking-[0.10625rem] font-sans leading-normal text-left flex items-center">
                            <span className="inline-flex justify-center items-center gap-[0.625rem] px-[0.625rem] py-[0.3125rem] bg-[#333333] text-white">
                                稼ぐサポート
                            </span>
                            <span className="text-[#333333]">が一生続く</span>
                        </p>
                        {/* Line 3 */}
                        <p className="font-bold text-[#333333] text-[2.125rem] tracking-[0.10625rem] font-sans leading-normal text-left">
                            Webデザインスクール
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div
                        className="w-[23.875rem] h-[16.4375rem]"
                        style={{
                            background: `url(${content1Img}) lightgray 50% / cover no-repeat`
                        }}
                    >
                    </div>
                </div>
            </div>

            {/* Student Voice Section Title */}
            <div className="flex flex-col items-center gap-[2.5rem] w-full max-w-[90rem] pt-[5rem] pb-[7.5rem] relative mx-auto">
                <ChapterTitle className="absolute right-0 top-0 z-0" />
                <h2 className="text-[#040404] text-[2.25rem] font-bold tracking-[0.1125rem] font-sans leading-normal relative z-10">
                    受講者の声
                </h2>

                {/* Content Container */}
                <div className="flex flex-col items-start gap-[5rem] w-[49.25rem]">
                    {/* Item 1: M.S */}
                    <TestimonialCard
                        imageSrc={content2Img}
                        imageAlt="M.Sさん"
                        titles={['未経験から', 'プロのWebデザイナーに！']}
                        description="未経験の不安も、専属メンターの伴走と無制限の質問添削で解消。実務目線のフィードバックで、稼ぐ基礎が着実に身につきました。卒業後のサポートも心強く、商談同席も安心でした。"
                        name="M.Sさん"
                        imagePosition="left"
                    />

                    {/* Item 2: T.Y */}
                    <TestimonialCard
                        imageSrc={contentTyImg}
                        imageAlt="T.Yさん"
                        titles={['専業主婦から', 'Webデザイナーとして独立！']}
                        description="育児と家事の合間でも、録画で何度も復習できて安心。分からない所は無制限で質問でき、丁寧な添削で一歩ずつ前進。未経験でも迷わず続けられました。卒業後のサポートも心強く、商談同席も安心でした。"
                        name="T.Yさん"
                        imagePosition="right"
                    />

                    {/* Item 3: K.R */}
                    <TestimonialCard
                        imageSrc={contentKrImg}
                        imageAlt="K.Rさん"
                        titles={['スキマ時間で学び', 'フリーランスに転身！']}
                        description="土日に集中学習、平日はスキマで復習。継続できたのは、即レスの質問サポートと添削のおかげ。録画講義で復習し、卒業後も相談でき、ゼロからでも仕事につながる力が養えました。"
                        name="K.Rさん"
                        imagePosition="left"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

