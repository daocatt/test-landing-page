
import React from 'react';
import ChapterTitle from './ChapterTitle';
import iconSafari from '../assets/images/icon_safari.svg';
import iconVideo from '../assets/images/icon_video.svg';
import iconTask from '../assets/images/icon_task.svg';
import iconHat from '../assets/images/icon_hat.svg';
import iconMedal from '../assets/images/icon_medal.svg';
import iconGroup from '../assets/images/icon_group.svg';
import iconHandshake from '../assets/images/icon_handshake.svg';
import iconChart from '../assets/images/icon_chart.svg';

interface StepItemProps {
    number: string;
    title: string;
    description: React.ReactNode;
    icon: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description, icon }) => {
    return (
        <div className="relative flex flex-col min-[769px]:flex-row w-full max-w-[53.25rem] pl-[1rem] min-[769px]:pl-[3.125rem] pr-[1rem] min-[769px]:pr-[1.875rem] py-[1.5rem] min-[769px]:py-[0.9375rem] items-start min-[769px]:items-center gap-[1.25rem] bg-white mb-[1.25rem] shadow-md rounded-[5px]">
            {/* Number Badge */}
            <div
                className="absolute top-0 left-0 flex items-center justify-center w-[3.0625rem] min-[769px]:w-[2.25rem] h-[2.5rem] min-[769px]:h-[1.8rem] bg-gradient-to-r from-[#C9583A] to-[#CB583B]"
                style={{ borderRadius: '0 0 1.35938rem 0' }}
            >
                <span className="text-white text-[1.5rem] min-[769px]:text-[0.875rem] font-bold font-sans leading-none">
                    {number}
                </span>
            </div>

            {/* Title Group */}
            <div className="flex flex-col min-[769px]:flex-row w-full min-[769px]:w-[16.875rem] items-center gap-[0.5rem] flex-shrink-0">
                <img src={icon} alt="" className="w-[3.3125rem] h-[3.3125rem] flex-shrink-0" />
                <h3 className="text-black text-[1.125rem] min-[769px]:text-[1.25rem] font-bold tracking-[0.1em] text-center min-[769px]:text-left">
                    {title}
                </h3>
            </div>

            {/* Content description */}
            <div className="flex-1 text-[#333] text-[0.875rem] min-[769px]:text-[1rem] font-normal leading-[1.4] min-[769px]:leading-[120%] tracking-[0.05rem] text-left">
                {description}
            </div>
        </div>
    );
};

const FlowSection: React.FC = () => {
    return (
        <section className="w-full relative py-[100px] flex flex-col items-center overflow-hidden bg-gradient-to-r from-[#BF5331] to-[#EF6A5A]">
            {/* Chapter Title Reused */}
            <div className="absolute top-[50px] right-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
                <ChapterTitle />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] px-5 flex flex-col items-center">
                {/* Section Heading */}
                <h2 className="text-white text-[36px] font-bold tracking-[0.1em] mb-[60px] text-center drop-shadow-md">
                    入校～卒業後の活躍イメージ
                </h2>

                {/* Steps List */}
                <div className="flex flex-col items-center gap-[1.25rem] w-full">
                    <StepItem
                        number="01"
                        title="カウンセラー面談"
                        icon={iconSafari}
                        description="一人ひとりに合わせて、最適な学習プランとロードマップを組み立てていきます。"
                    />
                    <StepItem
                        number="02"
                        title="リアルタイム授業"
                        icon={iconVideo}
                        description="週1回2時間程度、プロの講師から直接講義を受けられます。テキストや教材では中々理解が難しいポイントをわかりやすく丁寧に解説します。"
                    />
                    <StepItem
                        number="03"
                        title="課題提出"
                        icon={iconTask}
                        description="リアルタイム授業で習ったことをもとに、デザイン制作の課題をクリアにします。スキル習得期間はstep2とstep3を繰り返します。"
                    />
                    <StepItem
                        number="04"
                        title="卒業制作"
                        icon={iconHat}
                        description="これまでに習ったことを活かし、ポートフォリオづくりを兼ねて卒業制作を行います。講師から合格判定をもらえたら、卒業が可能です。"
                    />
                    <StepItem
                        number="05"
                        title="認定バッジ獲得"
                        icon={iconMedal}
                        description="卒業後は「びるどる」の認定バッジを獲得でき、認定パートナーとして案件紹介を受けられます。"
                    />
                    <StepItem
                        number="06"
                        title="商談"
                        icon={iconGroup}
                        description="コンシェルジュの同席サポートのもと商談を行い、案件を実際に受注して報酬を受け取ることが可能です。"
                    />
                    <StepItem
                        number="07"
                        title="継続的な案件獲得"
                        icon={iconHandshake}
                        description="ご自身のキャパシティと相談しながら、「びるどる」から紹介を受けた案件を受注し、実績と報酬を獲得していきます。"
                    />
                    <StepItem
                        number="08"
                        title="案件獲得の幅を広げる"
                        icon={iconChart}
                        description={
                            <>
                                <p className="mb-0">営業スキルを身につけると個人での受注や他のクラウドサービスからの案件受注も可能になります。</p>
                                <p className="text-white font-bold text-sm mt-1 bg-white/20 inline-block px-2 py-0.5 rounded">※専用の営業講座あり</p>
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default FlowSection;
