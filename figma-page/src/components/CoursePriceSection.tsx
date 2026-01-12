import React from 'react';
import iconBook from '../assets/images/icon-book.svg';
import iconHandshake from '../assets/images/icon-handshake.svg';

interface CourseCardProps {
    type: string;
    title: string;
    duration: string;
    supportDuration: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ type, title, duration, supportDuration }) => {
    return (
        <div className="w-full max-w-[380px] h-[283px] bg-white flex flex-col items-center justify-center shadow-[5px_5px_0_0_#EF6A5A] transition-transform duration-300 hover:-translate-y-2">
            {/* Type Label */}
            <div className="text-[#ef6a5a] text-[16px] font-normal tracking-[0.08em] mb-[10px]">
                {type}
            </div>

            {/* Course Title */}
            <div className="text-[#EF6A5A] text-[28px] font-bold tracking-[0.05em] mb-[20px]">
                {title}
            </div>

            {/* Divider */}
            <div className="w-[100px] h-[1px] bg-[#E0E0E0] mb-[25px]" />

            {/* Details */}
            <div className="flex flex-col gap-[12px] items-start">
                <div className="flex items-center gap-[10px]">
                    <img src={iconBook} alt="" className="w-[24px] h-[24px]" />
                    <span className="text-[#333] text-[18px] font-normal">
                        学習期間：{duration}
                    </span>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={iconHandshake} alt="" className="w-[24px] h-[24px]" />
                    <span className="text-[#333] text-[18px] font-normal">
                        サポート期間：{supportDuration}
                    </span>
                </div>
            </div>
        </div>
    );
};

const CoursePriceSection: React.FC = () => {
    return (
        <section className="w-full bg-[#f8f8f8] py-[80px] flex flex-col items-center">
            {/* Section Title */}
            <h2 className="text-black text-[36px] font-bold tracking-[1.8px] leading-normal mb-[40px]">
                コース・料金
            </h2>

            {/* Price Banner */}
            <div className="flex flex-col items-center gap-[15px] mb-[60px]">
                <div className="w-full max-w-[786px] min-h-[114px] bg-white border-4 border-[#bf5331] rounded-[10px] flex flex-col min-[769px]:flex-row items-center justify-center gap-[20px] min-[769px]:gap-[40px] px-[20px] py-[20px] min-[769px]:py-0">
                    {/* Badge */}
                    <div className="w-[156px] h-[49px] bg-gradient-to-r from-[#bf5331] to-[#ef6a5a] rounded-[5px] flex items-center justify-center shrink-0">
                        <span className="text-white text-[24px] font-bold">月額料金</span>
                    </div>

                    {/* Price Text */}
                    <div className="flex flex-wrap justify-center items-baseline font-bold">
                        <span className="text-[40px] min-[769px]:text-[64px] bg-gradient-to-r from-[#bf5331] to-[#ef6a5a] bg-clip-text text-transparent">
                            10,600円
                        </span>
                        <span className="text-[24px] min-[769px]:text-[32px] bg-gradient-to-r from-[#bf5331] to-[#ef6a5a] bg-clip-text text-transparent ml-[10px]">
                            (税込)
                        </span>
                        <span className="text-[40px] min-[769px]:text-[64px] bg-gradient-to-r from-[#bf5331] to-[#ef6a5a] bg-clip-text text-transparent ml-[5px]">
                            〜
                        </span>
                    </div>
                </div>
                <p className="text-[#333] text-[14px] font-normal">
                    ※分割払いの料金について、詳しくはお問い合わせください。
                </p>
            </div>

            {/* Courses Grid */}
            <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-[30px]">
                <CourseCard
                    type="Basic"
                    title="デザイン基礎コース"
                    duration="1ヶ月半"
                    supportDuration="1ヶ月"
                />
                <CourseCard
                    type="Advanced"
                    title="デザイン応用コース"
                    duration="3ヶ月"
                    supportDuration="1ヶ月"
                />
                <CourseCard
                    type="Pro"
                    title="デザインプロコース"
                    duration="6ヶ月"
                    supportDuration="1ヶ月"
                />
            </div>
        </section>
    );
};

export default CoursePriceSection;
