import React from 'react';
import Link from 'next/link';

export default function ComingSoon() {
    return (
        <main className="relative w-[1520.83px] h-[1647px] bg-[#000000] mx-auto overflow-hidden text-white font-poppins selection:bg-purple-500 selection:text-white">

            {/* Back to Home Link (Added for UX) */}
            <Link href="/" className="absolute top-8 left-8 text-[#9E9E9E] hover:text-white transition-colors z-50">
                ← Back to Home
            </Link>

            {/* Coming soon Title */}
            <h1 className="absolute w-[435px] h-[80px] left-[102px] top-[169px] font-semibold text-[64px] leading-[80px]">
                Coming soon
            </h1>

            {/* Feature List Section */}
            <div className="absolute left-0 top-0 w-full h-full">
                {/* Row 1: Inner Pages */}
                <Arrow top={379} left={127} />
                <span className="absolute w-[200px] h-[80px] left-[190px] top-[339px] font-normal text-[34px] leading-[80px]">
                    Inner Pages
                </span>

                {/* Row 2: 40+ Sections */}
                <Arrow top={516} left={127} />
                <span className="absolute w-[219px] h-[80px] left-[190px] top-[476px] font-normal text-[34px] leading-[80px]">
                    40+ Sections
                </span>

                {/* Row 3: HTML/CSS Version */}
                <Arrow top={653} left={127} />
                <span className="absolute w-[304px] h-[80px] left-[190px] top-[613px] font-normal text-[34px] leading-[80px]">
                    HTML/CSS Version
                </span>

                {/* Row 4: Adobe XD Version */}
                <Arrow top={790} left={127} />
                <span className="absolute w-[302px] h-[80px] left-[190px] top-[750px] font-normal text-[34px] leading-[80px]">
                    Adobe XD Version
                </span>

                {/* Row 5: Webflow Template */}
                <Arrow top={927} left={127} />
                <span className="absolute w-[318px] h-[80px] left-[190px] top-[887px] font-normal text-[34px] leading-[80px]">
                    Webflow Template
                </span>
            </div>

            {/* CTA Heading */}
            <h2 className="absolute w-[849px] h-[78px] left-[102px] top-[1112px] font-semibold text-[64px] leading-[80px]">
                Need Custom Design, Development or Branding?
            </h2>

            {/* Website link */}
            <h2 className="absolute w-[517px] h-[80px] left-[102px] top-[1447px] font-semibold text-[64px] leading-[80px]">
                www.inkyy.com
            </h2>

        </main>
    );
}

function Arrow({ top, left }: { top: number; left: number }) {
    return (
        <div
            className="absolute w-[35px] h-0 border-t-[3px] border-white flex items-center justify-end"
            style={{ top: `${top}px`, left: `${left}px` }}
        >
            {/* Small Arrow head */}
            <div className="absolute right-[-2px] bottom-[-2px] w-[8px] h-[8px] border-t-[3px] border-r-[3px] border-white transform rotate-45"></div>
        </div>
    );
}
