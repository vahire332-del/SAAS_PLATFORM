'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const prices = {
        silver: isYearly ? 32 : 40,
        golden: isYearly ? 56 : 70,
        premium: isYearly ? 96 : 120,
    };

    return (
        <main className="relative w-[1520.83px] h-[798px] bg-[#000000] mx-auto overflow-hidden text-white font-poppins selection:bg-purple-500 selection:text-white">

            {/* Title */}
            <h1 className="absolute w-[169px] h-[80px] left-[165px] top-[55px] font-semibold text-[48px] leading-[80px] text-center text-white">
                Pricing
            </h1>

            {/* Monthly/Yearly Toggle */}
            <div className="absolute w-[277px] h-[44px] left-[1005px] top-[78px] flex items-center bg-[#18181C] rounded-[155px] p-0 overflow-hidden cursor-pointer" onClick={() => setIsYearly(!isYearly)}>
                <div
                    className="absolute w-[144px] h-[44px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[155px] transition-all duration-300 ease-in-out"
                    style={{ left: isYearly ? '133px' : '0px' }}
                />
                <div className="relative z-10 w-[144px] text-center text-[14px] font-normal leading-[44px]">
                    <span className={!isYearly ? 'text-white' : 'text-[#9E9E9E]'}>Monthly</span>
                </div>
                <div className="relative z-10 w-[133px] text-center text-[14px] font-normal leading-[44px]">
                    <span className={isYearly ? 'text-white' : 'text-[#9E9E9E]'}>Yearly</span>
                </div>
            </div>

            {/* --- Silver Package Card --- */}
            <div className="absolute left-[165px] top-[199px] w-[350px] h-[495px] bg-[#18181C] rounded-[20px] transition-all">
                <div className="mt-[44px] w-full text-center">
                    <h3 className="text-[18px] font-normal leading-[32px]">Silver Package</h3>
                </div>
                <div className="absolute top-[96px] left-[32px] w-[287px] h-[1px] bg-[#404047]"></div>
                <div className="absolute top-[124px] left-[32px] flex flex-col gap-[21px]">
                    <FeatureItem text="100 + Free Template" active={true} />
                    <FeatureItem text="10 Team Members" active={true} />
                    <FeatureItem text="Priority Support" active={true} />
                    <FeatureItem text="Premium Features" active={false} />
                    <FeatureItem text="50 Integrations" active={false} />
                </div>
                <div className="absolute top-[405px] left-[32px] w-[287px] h-[1px] bg-[#404047]"></div>
                <div className="absolute bottom-[24px] left-[32px] flex items-baseline gap-2">
                    <span className="text-[40px] font-semibold">${prices.silver}</span>
                    <span className="text-[14px] font-normal text-[#9E9E9E]">/mo</span>
                </div>
                <Link href="/register" className="absolute bottom-[24px] right-[24px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] text-[14px] font-normal hover:opacity-90 transition-opacity">
                    Signup Now
                </Link>
            </div>
            {/* Silver Gem - Spec Position */}
            <div className="absolute left-[302px] top-[161px] w-[76px] h-[76px] bg-[#222228] rounded-full flex items-center justify-center">
                <div className="absolute left-[27.37px] top-[19.67px] w-[20.63px] h-[37.18px]">
                    <GemIcon type="silver" />
                </div>
            </div>


            {/* --- Golden Package Card --- */}
            <div className="absolute left-[545px] top-[199px] w-[350px] h-[495px] bg-[#18181C] rounded-[20px] transition-all">
                <div className="mt-[44px] w-full text-center">
                    <h3 className="text-[18px] font-normal leading-[32px]">Golden Package</h3>
                </div>
                <div className="absolute top-[96px] left-[32px] w-[287px] h-[1px] bg-[#404047]"></div>
                <div className="absolute top-[124px] left-[32px] flex flex-col gap-[21px]">
                    <FeatureItem text="100 + Free Template" active={true} />
                    <FeatureItem text="10 Team Members" active={true} />
                    <FeatureItem text="Priority Support" active={true} />
                    <FeatureItem text="Premium Features" active={true} />
                    <FeatureItem text="50 Integrations" active={false} />
                </div>
                <div className="absolute top-[405px] left-[32px] w-[287px] h-[1px] bg-[#404047]"></div>
                <div className="absolute bottom-[24px] left-[32px] flex items-baseline gap-2">
                    <span className="text-[40px] font-semibold">${prices.golden}</span>
                    <span className="text-[14px] font-normal text-[#9E9E9E]">/mo</span>
                </div>
                <Link href="/register" className="absolute bottom-[24px] right-[24px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] text-[14px] font-normal hover:opacity-90 transition-opacity">
                    Signup Now
                </Link>
            </div>
            {/* Golden Gem - Spec Position (using percentages as requested) */}
            <div className="absolute left-[682px] top-[161px] w-[76px] h-[76px] bg-[#222228] rounded-full flex items-center justify-center">
                <div className="absolute" style={{ left: '48.75%', top: '22.56%', transform: 'translate(-50%, -50%)' }}>
                    {/* Centered within the circle container */}
                    <GemIcon type="golden" />
                </div>
            </div>


            {/* --- Premium Package Card --- */}
            <div className="absolute left-[925px] top-[199px] w-[350px] h-[495px] bg-[#18181C] rounded-[20px] transition-all">
                <div className="mt-[44px] w-full text-center">
                    <h3 className="text-[18px] font-normal leading-[32px]">Premium Package</h3>
                </div>
                <div className="absolute top-[96px] left-[32px] w-[287px] h-[1px] bg-[#404047]"></div>
                <div className="absolute top-[124px] left-[32px] flex flex-col gap-[21px]">
                    <FeatureItem text="100 + Free Template" active={true} />
                    <FeatureItem text="10 Team Members" active={true} />
                    <FeatureItem text="Priority Support" active={true} />
                    <FeatureItem text="Premium Features" active={true} />
                    <FeatureItem text="50 Integrations" active={true} />
                </div>
                <div className="absolute top-[405px] left-[32px] w-[287px] h-[1px] bg-[#404047]"></div>
                <div className="absolute bottom-[24px] left-[32px] flex items-baseline gap-2">
                    <span className="text-[40px] font-semibold">${prices.premium}</span>
                    <span className="text-[14px] font-normal text-[#9E9E9E]">/mo</span>
                </div>
                <Link href="/register" className="absolute bottom-[24px] right-[24px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] text-[14px] font-normal hover:opacity-90 transition-opacity">
                    Signup Now
                </Link>
            </div>
            {/* Premium Gem - Spec Position */}
            <div className="absolute left-[1062px] top-[161px] w-[76px] h-[76px] bg-[#222228] rounded-full flex items-center justify-center">
                <div className="absolute left-[23px] top-[21px] w-[29.87px] h-[34.95px]">
                    <GemIcon type="premium" />
                </div>
            </div>

            {/* Back to Home Link */}
            <Link href="/" className="absolute top-8 left-8 text-[#9E9E9E] hover:text-white transition-colors">
                ← Back to Home
            </Link>

        </main>
    );
}

function FeatureItem({ text, active }: { text: string; active: boolean }) {
    return (
        <div className="flex flex-row items-center gap-4">
            <div className="w-[29px] h-[29px] bg-[#222228] rounded-[10px] flex items-center justify-center">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M1 4.5L4.5 8L11 1" stroke={active ? "white" : "#9E9E9E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <span className={`text-[14px] font-normal leading-[20px] ${active ? 'text-white' : 'text-[#9E9E9E]'}`}>
                {text}
            </span>
        </div>
    );
}

function GemIcon({ type }: { type: 'silver' | 'golden' | 'premium' }) {
    if (type === 'silver') {
        return (
            <svg width="121" height="138" viewBox="0 0 121 138" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-50px] top-[-50px]">
                <g filter="url(#filter_silver)">
                    <path d="M53.314 60.4433V43L43 61.5878L53.314 60.4433Z" fill="#BCD4F5" />
                    <path d="M53.314 60.4433V43L63.6296 61.5878L53.314 60.4433Z" fill="#DDE8FA" />
                    <path d="M43 61.5878L53.314 80.1756V60.4433L43 61.5878Z" fill="#A7BDEB" />
                    <path d="M63.6296 61.5878L53.314 80.1756V60.4433L63.6296 61.5878Z" fill="#B2CBF0" />
                </g>
                <defs>
                    <filter id="filter_silver" x="0" y="0" width="120.63" height="137.176" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="7" dy="7" />
                        <feGaussianBlur stdDeviation="25" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_silver" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_silver" result="shape" />
                    </filter>
                </defs>
            </svg>
        );
    }

    if (type === 'golden') {
        return (
            <svg width="137" height="139" viewBox="0 0 137 139" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-50px] top-[-50px]">
                <g filter="url(#filter_golden)">
                    <path d="M52.1348 62.7632L61.4204 43L70.7061 62.7632H52.1348Z" fill="#FFE2C9" />
                    <path d="M61.4202 43L43 62.7632H52.1345L61.4202 43Z" fill="#FAD0AB" />
                    <path d="M70.7061 62.7632L61.4204 81.4873L52.1348 62.7632H70.7061Z" fill="#F6C69B" />
                    <path d="M61.4199 43L79.8401 62.7632H70.7056L61.4199 43Z" fill="#FAD0AB" />
                    <path d="M43 62.7632L61.4202 81.4873L52.1345 62.7632H43Z" fill="#FFB682" />
                    <path d="M79.8401 62.7632L61.4199 81.4873L70.7056 62.7632H79.8401Z" fill="#FFB682" />
                </g>
                <defs>
                    <filter id="filter_golden" x="0" y="0" width="136.84" height="138.487" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="7" dy="7" />
                        <feGaussianBlur stdDeviation="25" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_golden" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_golden" result="shape" />
                    </filter>
                </defs>
            </svg>
        );
    }

    return (
        <svg width="130" height="135" viewBox="0 0 130 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[-50px] top-[-50px]">
            <g filter="url(#filter_premium)">
                <path d="M50.4668 60.4746L57.9348 43L65.4027 60.4746H50.4668Z" fill="#E0F8FF" />
                <path d="M65.4027 60.4746L57.9348 77.9493L50.4668 60.4746H65.4027Z" fill="#BDEBF7" />
                <path d="M72.8705 51.3755L65.4025 60.4746L57.9346 43L72.8705 51.3755Z" fill="#BDEBF7" />
                <path d="M57.9344 43L50.4664 60.4746L43 51.3755L57.9344 43Z" fill="#B4E3F0" />
                <path d="M43 69.5737L50.4664 60.4746L57.9344 77.9493L43 69.5737Z" fill="#B4E3F0" />
                <path d="M72.8705 69.5737L65.4025 60.4746L57.9346 77.9493L72.8705 69.5737Z" fill="#E0F8FF" />
                <path d="M43 51.3755V69.5737L50.4664 60.4746L43 51.3755Z" fill="#A3D0E6" />
                <path d="M72.8703 51.3755L65.4023 60.4746L72.8703 69.5737V51.3755Z" fill="#B4E3F0" />
            </g>
            <defs>
                <filter id="filter_premium" x="0" y="0" width="129.871" height="134.949" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7" dy="7" />
                    <feGaussianBlur stdDeviation="25" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_premium" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_premium" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
