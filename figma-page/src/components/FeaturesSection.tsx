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
            className={`w-full mx-auto min-h-fit h-auto relative overflow-hidden ${className}`}
        >
            {/* Desktop Background Image */}
            <div
                className="absolute inset-0 z-0 hidden min-[769px]:block bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${featuresBg})`,
                    backgroundPosition: 'top center',
                    backgroundSize: 'contain'
                }}
            />

            {/* Mobile CSS Background */}
            <div
                className="absolute top-0 left-0 w-full h-[30rem] z-0 min-[769px]:hidden"
                style={{
                    background: 'linear-gradient(81deg, rgba(198, 174, 109, 0.40) 2.76%, rgba(231, 222, 185, 0.40) 52.27%, rgba(202, 182, 126, 0.40) 95.93%)',
                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
                }}
            />
            {/* Main Content Container */}
            <div id="features-section" className="relative z-10 flex flex-col justify-center items-center w-full max-w-[90rem] pt-[5rem] pb-[7.5rem] gap-[2.5rem] mx-auto">

                {/* Header Group (Logo + Title) */}
                <div className="flex flex-col items-center w-full px-4 min-[769px]:px-0">
                    {/* Logo Image */}
                    <div className="w-[5.0625rem] h-[3.125rem]">
                        <img src={contentLogo1} alt="Content Logo" className="w-full h-full object-contain" />
                    </div>

                    {/* Heading Text */}
                    <div className="flex justify-center">
                        <h2
                            className="font-bold text-[#333333] text-[1.875rem] min-[769px]:text-[2.25rem] tracking-[0.1125rem] font-sans leading-normal"
                        >
                            デザインコースとは？
                        </h2>
                    </div>
                </div>

                {/* Content Box */}
                <div className="flex flex-col-reverse min-[769px]:flex-row justify-center items-center gap-4 min-[769px]:gap-[2.5rem] w-full min-[769px]:px-0">
                    {/* Left Side: Text */}
                    <div className="flex flex-col items-start gap-[0.625rem] w-full min-[769px]:w-auto px-4 min-[769px]:px-0">
                        {/* Line 1 */}
                        {/* Wrapper for the first line with box styling */}
                        <div className="inline-flex justify-center items-center gap-[0.625rem] px-[0.625rem] py-[0.3125rem] bg-[#333333] self-start max-w-fit">
                            <p className="font-bold text-white text-[1.625rem] min-[769px]:text-[2.125rem] tracking-[0.05rem] min-[769px]:tracking-[0.10625rem] font-sans leading-normal text-left">
                                卒業後が"スタート"
                            </p>
                        </div>
                        {/* Line 2 */}
                        <p className="font-bold text-[1.625rem] min-[769px]:text-[2.125rem] tracking-[0.05rem] min-[769px]:tracking-[0.10625rem] font-sans leading-normal text-left flex items-center">
                            <span className="inline-flex justify-center items-center gap-[0.625rem] px-[0.625rem] py-[0.3125rem] bg-[#333333] text-white whitespace-nowrap">
                                稼ぐサポート
                            </span>
                            <span className="text-[#333333] whitespace-nowrap">が一生続く</span>
                        </p>
                        {/* Line 3 */}
                        <p className="font-bold text-[#333333] text-[1.625rem] min-[769px]:text-[2.125rem] tracking-[0.05rem] min-[769px]:tracking-[0.10625rem] font-sans leading-normal text-left">
                            Webデザインスクール
                        </p>
                    </div>

                    {/* Right Side: Image - Aligned left with text, symmetric margin including shadow */}
                    <div className="w-full px-4 pb-6 min-[769px]:p-0 min-[769px]:w-auto min-[769px]:shrink-0">
                        <div
                            className="relative w-[calc(100%-10px)] min-[769px]:w-[23.875rem] h-auto aspect-[382/263] min-[769px]:aspect-auto min-[769px]:h-[16.4375rem] min-[769px]:translate-x-0"
                            style={{
                                boxShadow: '10px 10px 0px 0px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            <img
                                src={content1Img}
                                alt="Web Design Course"
                                className="w-full h-full object-cover"
                            />
                        </div>
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
                <div className="flex flex-col items-start gap-[5rem] w-full max-w-[49.25rem] px-2">
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

