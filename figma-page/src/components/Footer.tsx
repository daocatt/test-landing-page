import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#333] flex flex-col items-center justify-center py-[30px] gap-[17px] text-white">
            <div className="flex gap-[30px] items-start">
                <p className="text-[14px] font-normal leading-normal">
                    特定商取引法に基づく表示
                </p>
                <p className="text-[14px] font-normal leading-normal">
                    運営者情報
                </p>
                <a href="https://well-beings.co.jp/company_infomation.html" className="text-[14px] font-normal leading-normal cursor-pointer hover:underline">
                    プライバシーポリシー
                </a>
            </div>
            <p className="text-[20px] font-normal leading-normal">
                © 2025 CHAPTER TWO Inc.
            </p>
        </footer>
    );
};

export default Footer;
