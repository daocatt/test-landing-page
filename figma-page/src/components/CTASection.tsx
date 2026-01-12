import React from 'react';

interface CTASectionProps {
    className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
    return (
        <section
            className={`w-full flex justify-center items-center py-[40px] ${className}`}
            style={{
                backgroundImage: 'linear-gradient(98.12deg, #F6F6F6 18.01%, #FFFFFF 44.78%, #F6F6F6 76.41%, #FFFFFF 101.23%)'
            }}
        >
            <div className="relative flex flex-col items-center">
                {/* Badge: 10秒で簡単予約... */}
                <div
                    className="relative z-10 px-[10px] py-[5px] rounded-[6px] shadow-sm translate-y-[12px] min-[769px]:translate-y-[20px]"
                    style={{
                        background: 'linear-gradient(34.12deg, #E6DEC7 2.76%, #EFEBDB 52.27%, #E6DEC7 95.93%)'
                    }}
                >
                    <p className="text-[#333] text-[12px] min-[769px]:text-[15px] font-semibold whitespace-nowrap">
                        10秒で簡単予約！質問相談何でもOK！
                    </p>
                </div>

                {/* Button: Zoom無料相談はこちら */}
                <a
                    href="#consultation"
                    className="relative z-0 h-[56px] min-[769px]:h-[72px] bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] rounded-[7px] flex items-center justify-center px-[30px] min-[769px]:px-[68px] transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0px_4px_0px_0px_#A04A36]"
                >
                    <span className="text-white text-[18px] min-[769px]:text-[24px] font-bold">
                        Zoom無料相談はこちら
                    </span>
                </a>
            </div>
        </section>
    );
};

export default CTASection;
