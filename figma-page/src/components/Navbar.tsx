import React from 'react';
import logo from '../assets/images/logo.png';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
    const navItems = [
        { label: '受講者の声', href: '#voice' },
        { label: '選ばれる理由', href: '#reason' },
        { label: '受講料金', href: '#price' },
        { label: '受講の流れ', href: '#flow' },
        { label: 'よくあるご質問', href: '#faq' },
    ];

    return (
        <nav className={`bg-[#333333] text-white h-[5rem] ${className}`}>
            <div className="w-full px-[2.5rem] h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-[5.0625rem] h-[3.125rem]">
                            <img src={logo} alt="Chapter Two Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Right Side Content: Navigation + CTA */}
                    <div className="hidden md:flex items-center gap-[1.875rem]">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-sm hover:text-[--color-primary] transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}

                        <button className="bg-gradient-to-r from-[#BF5331] to-[#EF6A5A] hover:opacity-90 text-white px-6 py-2 rounded text-sm font-medium transition-opacity duration-200 cursor-pointer">
                            Zoom無料相談はこちら
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
