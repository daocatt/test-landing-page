import React from 'react';


const FAQSection: React.FC = () => {
    const questions = [
        {
            q: '初心者だけど大丈夫ですか？',
            a: '大丈夫です！基本的なパソコンの操作方法がわかっていれば問題ありません。'
        },
        {
            q: '働きながらでも大丈夫ですか？',
            a: (
                <>
                    問題ありません。ほとんどの受講生が働きながら受講しております。<br />
                    授業に参加できなかった場合も毎回録画をお渡ししますので補うことができます。
                </>
            )
        },
        {
            q: '営業が苦手ですが大丈夫ですか？',
            a: (
                <>
                    最低限の営業レッスンを受講いただいた上で営業が得意な受講生と手を組んで<br />
                    仕事をされる方も多くいます。 スクールが相性の良い方をご紹介させていただきます。
                </>
            )
        },
        {
            q: '講座終了後もサポートはありますか？',
            a: (
                <>
                    ございます！ChapterTwoでは卒業も永続的にサポートしております。<br />
                    実際の案件の添削や相談もいつでも対応可能なので、卒業もご安心ください。
                </>
            )
        }
    ];

    return (
        <section className="w-full py-[80px] bg-[#f8f8f8] flex justify-center">
            <div className="w-full max-w-[800px] px-5 flex flex-col items-center gap-[40px]">

                <h2 className="text-black text-[36px] font-bold tracking-[1.8px] text-center">
                    よくある質問
                </h2>

                <div className="w-full flex flex-col gap-[30px]">
                    {questions.map((item, index) => (
                        <div key={index} className="flex flex-col gap-[10px]">
                            {/* Question Row */}
                            <div className="w-full bg-[#E7E7E7] rounded-full md:rounded-[77px] px-[15px] py-[10px] min-h-[51px] flex items-center gap-[20px]">
                                {/* Q Icon */}
                                <div className="w-[42px] h-[42px] rounded-full bg-[#333] flex-shrink-0 flex items-center justify-center">
                                    <span className="text-white text-[20px] font-bold">Q</span>
                                </div>
                                {/* Q Text */}
                                <p className="text-[#333] text-[16px] font-bold tracking-[0.8px]">
                                    {item.q}
                                </p>
                            </div>

                            {/* Answer Row */}
                            <div className="w-full px-[15px] flex items-start gap-[20px]">
                                {/* A Icon */}
                                <div className="w-[42px] h-[42px] rounded-full bg-white border border-[#333] flex-shrink-0 flex items-center justify-center">
                                    <span className="text-[#333] text-[20px] font-bold">A</span>
                                </div>
                                {/* A Text */}
                                <div className="text-[#333] text-[16px] font-normal tracking-[0.8px] leading-[180%] pt-[5px]">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
