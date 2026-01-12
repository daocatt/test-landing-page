import React from 'react';
import support1 from '../assets/images/support-1.png';
import support2 from '../assets/images/support-2.png';
import support3 from '../assets/images/support-3.png';

interface SupportCardProps {
    number: string;
    imageSrc: string;
    title: React.ReactNode;
    description: React.ReactNode;
}

const SupportCard: React.FC<SupportCardProps> = ({ number, imageSrc, title, description }) => {
    return (
        <div className="flex flex-col items-start w-full max-w-[319px] text-white text-left">
            {/* Image Container with Badge */}
            <div className="relative w-full h-[223px] mb-[20px] rounded-[4px] overflow-hidden">
                <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                {/* Badge */}
                <div className="absolute top-0 left-0 w-[66px] h-[46px] bg-gradient-to-r from-[#c65637] to-[#c85739] rounded-br-[21px] flex items-center justify-center">
                    <span className="text-white text-[32px] font-bold leading-none mt-1">{number}</span>
                </div>
            </div>

            {/* Title */}
            <div className="text-[24px] font-bold tracking-[1.2px] leading-normal mb-[16px]">
                {title}
            </div>

            {/* Description */}
            <div className="text-[16px] font-normal tracking-[0.48px] leading-[1.5]">
                {description}
            </div>
        </div>
    );
};

const SupportSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-fit min-[769px]:h-[56.34375rem] py-0">
            {/* Background Shape */}
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[110%] h-[40rem] min-[769px]:h-[56.34375rem] bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] z-0 min-[769px]:skew-y-[4deg] skew-y-[4deg] origin-center" />

            <div className="relative z-10 w-full max-w-[1440px] mx-auto min-h-fit min-[769px]:h-[56.34375rem] flex flex-col justify-center items-center py-0">

                {/* Section Title */}
                <div className="mb-[60px] text-center">
                    <h2 className="text-white text-[36px] font-bold tracking-[1.8px] leading-normal">
                        ChapterTwoの<br />
                        案件獲得サポート
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col md:flex-row gap-[40px] justify-center items-start">
                    <SupportCard
                        number="01"
                        imageSrc={support1}
                        title={<>提携サイト「びるどる」<br />からの案件紹介</>}
                        description="提携しているWebデザイン制作サービスの「びるどる」から案件を紹介するため、卒業後すぐに副業で稼ぎ始められます！"
                    />
                    <div className="md:mt-[2.31rem]">
                        <SupportCard
                            number="02"
                            imageSrc={support2}
                            title={<>営業は完全に不要</>}
                            description="卒業生に紹介される案件は、受注までのクライアントワークをすべて「びるどる」が行って確実に受注に繋げるため、卒業生は営業不要で案件を獲得できる仕組みです。"
                        />
                    </div>
                    <div className="md:mt-[4.94rem]">
                        <SupportCard
                            number="03"
                            imageSrc={support3}
                            title={<>サポートセンターが<br />制作を全面サポート</>}
                            description="紹介された案件の進め方でわからない部分があれば、専門のサポートセンターが制作をサポートし、確実な納品と報酬の獲得をお手伝いします。"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
