import React from 'react';
import reason1 from '../assets/images/reasons-1.png';
import reason2 from '../assets/images/reasons-2.png';
import reason3 from '../assets/images/reasons-3.png';
// import verticalLine from '../assets/images/vertical-line.svg'; // Inline now

interface ReasonItemProps {
    title: React.ReactNode;
    description: React.ReactNode;
    imageSrc: string;
    position: 'left' | 'right';
}

const ReasonItem: React.FC<ReasonItemProps> = ({ title, description, imageSrc, position }) => {
    const isLeft = position === 'left';

    return (
        <div className="relative w-full min-h-fit min-[769px]:h-[17.106rem] shrink-0 flex flex-col min-[769px]:block pb-8 min-[769px]:pb-0 pt-[3.94rem] min-[769px]:pt-0">
            {/* Element 1: Background Rectangle */}
            <div
                className="absolute top-[3.94rem] min-[769px]:top-1/2 min-[769px]:-translate-y-1/2 right-0 w-full min-[769px]:w-[41.4375rem] h-[calc(100%-3.94rem)] min-[769px]:h-[22.625rem] z-10 rounded-none min-[769px]:rounded-[20px]"
                style={{
                    background: 'linear-gradient(81deg, rgba(198, 174, 109, 0.40) 2.76%, rgba(231, 222, 185, 0.40) 52.27%, rgba(202, 182, 126, 0.40) 95.93%)'
                }}
            />

            {/* Element 2: Image */}
            <div className={`relative min-[769px]:absolute w-full max-w-[calc(100%-1.6rem)] min-[769px]:max-w-[17.375rem] mx-auto min-[769px]:mx-0 z-20 mb-6 min-[769px]:mb-0 -mt-[3.94rem] min-[769px]:mt-0
                ${isLeft
                    ? 'min-[769px]:left-[-4.4rem] min-[769px]:top-[0.31rem]'
                    : 'min-[769px]:right-[-2.4rem] min-[769px]:-bottom-[2.9rem]'
                }
            `}>
                <img src={imageSrc} alt="" className="w-full h-auto drop-shadow-xl rounded-[4px]" />
            </div>

            {/* Element 3: Text Box */}
            <div className={`relative min-[769px]:absolute min-[769px]:top-[0.31rem] flex flex-col items-start gap-[1rem] z-30 px-[2.5rem] min-[769px]:px-0
                ${isLeft ? 'min-[769px]:right-[1.88rem] min-[769px]:w-[23.375rem]' : 'min-[769px]:right-[14rem] min-[769px]:w-[26rem]'}
            `}>
                <div className="text-[#333] text-[1.25rem] min-[769px]:text-[1.5rem] font-bold tracking-[0.075rem] leading-normal text-left">
                    {title}
                </div>
                <div className="text-[#333] text-[0.875rem] min-[769px]:text-[1rem] font-normal tracking-[0.05rem] leading-[1.8] self-stretch text-left">
                    {description}
                </div>
            </div>
        </div>
    );
};

const ReasonsSection: React.FC = () => {
    return (
        <section className="w-full max-w-[90rem] mx-auto flex flex-col justify-center items-center pt-[5rem] pb-[9.375rem] gap-[6.25rem] bg-white">
            {/* Title Area */}
            <div className="flex flex-col items-center gap-[2.5rem]">
                <div className="flex flex-col items-center text-[#333]">
                    <p className="text-[2.25rem] font-bold tracking-[0.1125rem] leading-normal text-center m-0">
                        ChapterTwoが選ばれる
                    </p>
                    <p className="flex items-baseline m-0">
                        <span className="text-[4rem] font-bold tracking-[0.2rem] leading-none">3</span>
                        <span className="text-[3rem] font-bold tracking-[0.15rem] leading-normal">つの理由</span>
                    </p>
                </div>
                <div className="h-[3rem] w-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1" height="48" viewBox="0 0 1 48" fill="none" className="h-full w-full">
                        <path d="M0.5 0V48" stroke="#333333" />
                    </svg>
                </div>
            </div>

            {/* Reasons List Container */}
            <div className="w-full max-w-[39.4375rem] flex flex-col items-start gap-[5rem] min-[769px]:gap-[9.375rem]">

                {/* Reason 1 */}
                <ReasonItem
                    position="left"
                    imageSrc={reason1}
                    title={
                        <>
                            Web制作サービス<br />
                            「びるどる」と提携し<br />
                            卒業後の活動をサポート
                        </>
                    }
                    description={
                        <>
                            ChapterTwoは、Web制作サービス<br />
                            「びるどる」と提携しています。<br />
                            卒業後はびるどるの「認定パートナー」として、<br />
                            Webデザイン案件を優先的に<br />
                            紹介してもらうことが可能です。
                        </>
                    }
                />

                {/* Reason 2 */}
                <ReasonItem
                    position="right"
                    imageSrc={reason2}
                    title={
                        <>
                            案件をもとにしたカリキュラムで<br />
                            実践的スキルを身に着けて<br />
                            すぐに副業開始可能
                        </>
                    }
                    description={
                        <>
                            提携サービス「びるどる」が過去実際に受注した<br />
                            案件をもとにカリキュラムを作成しており、<br />
                            他のスクールではできない超実践的なスキル<br />
                            習得が可能です。そのため、卒業後はすぐに<br />
                            「びるどる」の案件を受けることができます。
                        </>
                    }
                />

                {/* Reason 3 */}
                <ReasonItem
                    position="left"
                    imageSrc={reason3}
                    title={
                        <>
                            専属メンターが<br />
                            入学から稼げるまで伴走し<br />
                            挫折させない万全のサポート
                        </>
                    }
                    description={
                        <>
                            入学してから稼げるようになるまで、<br />
                            専属のメンターがマンツーマンで伴走。<br />
                            挫折せずに最後まで学習できるよう、<br />
                            全力でサポートいたします。
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default ReasonsSection;
