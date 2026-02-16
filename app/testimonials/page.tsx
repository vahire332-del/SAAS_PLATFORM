import Link from 'next/link';

export default function Testimonials() {
    return (
        <main className="relative w-[1520.83px] h-[712px] bg-[#000000] mx-auto overflow-hidden text-white font-poppins selection:bg-purple-500 selection:text-white">

            {/* Title "Testimonials" */}
            <h1 className="absolute w-[314px] h-[80px] left-[563px] top-[89px] font-semibold text-[48px] leading-[80px] text-center text-white">
                Testimonials
            </h1>

            {/* Group 94 (Left Card) */}
            <div className="absolute w-[540px] h-[337px] left-[-120px] top-[220px] bg-[#18181C] rounded-[20px] p-0 overflow-hidden opacity-50 pointer-events-none">
                <p className="absolute w-[450px] h-[186px] left-[48px] top-[37px] font-normal text-[18px] leading-[38px] text-[#FFFFFF]">
                    Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.
                </p>
                <div className="absolute w-[450px] h-[0px] left-[48px] top-[249px] border border-[#404047]"></div>
                <div className="absolute w-[50px] h-[50px] left-[48px] top-[266px] rounded-[52px] bg-[#333] overflow-hidden">
                    <img src="/images/alisa_logo.svg" alt="Jane Doe" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="absolute w-[95px] h-[32px] left-[115px] top-[263px] font-semibold text-[20px] leading-[32px] text-white">Jane Doe</div>
                <div className="absolute w-[120px] h-[28px] left-[115px] top-[290px] font-normal text-[14px] leading-[28px] text-[#9E9E9E] text-center">CEO of Inkyy.com</div>
                {/* Stars */}
                <div className="absolute flex gap-[10px] left-[354px] top-[275px]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <path d="M10.16 0L12.43 6.98H19.77L13.83 11.29L16.1 18.27L10.16 13.96L4.22 18.27L6.49 11.29L0.55 6.98H7.89L10.16 0Z" fill="#FFC46C" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Group 92 (Center Card) - Main Focus */}
            <div className="absolute w-[540px] h-[337px] left-[450px] top-[220px] bg-[#18181C] rounded-[20px] shadow-2xl">
                <p className="absolute w-[450px] h-[186px] left-[52px] top-[37px] font-normal text-[18px] leading-[38px] text-[#FFFFFF]">
                    Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.
                </p>
                <div className="absolute w-[450px] h-[0px] left-[52px] top-[249px] border border-[#404047]"></div>
                <div className="absolute w-[50px] h-[50px] left-[52px] top-[266px] rounded-[52px] bg-[#333] overflow-hidden">
                    <img src="/images/Rectangle 30.png" alt="Jane Doe" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="absolute w-[95px] h-[32px] left-[119px] top-[263px] font-semibold text-[20px] leading-[32px] text-white">Jane Doe</div>
                <div className="absolute w-[120px] h-[28px] left-[119px] top-[290px] font-normal text-[14px] leading-[28px] text-[#9E9E9E] text-center">CEO of Inkyy.com</div>
                {/* Stars */}
                <div className="absolute flex gap-[10px] left-[358px] top-[275px]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <path d="M10.16 0L12.43 6.98H19.77L13.83 11.29L16.1 18.27L10.16 13.96L4.22 18.27L6.49 11.29L0.55 6.98H7.89L10.16 0Z" fill="#FFC46C" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Group 93 (Right Card) */}
            <div className="absolute w-[540px] h-[337px] left-[1020px] top-[220px] bg-[#18181C] rounded-[20px] opacity-50 pointer-events-none">
                <p className="absolute w-[450px] h-[186px] left-[52px] top-[37px] font-normal text-[18px] leading-[38px] text-[#FFFFFF]">
                    Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.
                </p>
                <div className="absolute w-[450px] h-[0px] left-[52px] top-[249px] border border-[#404047]"></div>
                <div className="absolute w-[50px] h-[50px] left-[52px] top-[266px] rounded-[52px] bg-[#333] overflow-hidden">
                    <img src="/images/alisa_logo.svg" alt="Jane Doe" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="absolute w-[95px] h-[32px] left-[119px] top-[263px] font-semibold text-[20px] leading-[32px] text-white">Jane Doe</div>
                <div className="absolute w-[120px] h-[28px] left-[119px] top-[290px] font-normal text-[14px] leading-[28px] text-[#9E9E9E] text-center">CEO of Inkyy.com</div>
                {/* Stars */}
                <div className="absolute flex gap-[10px] left-[358px] top-[275px]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <path d="M10.16 0L12.43 6.98H19.77L13.83 11.29L16.1 18.27L10.16 13.96L4.22 18.27L6.49 11.29L0.55 6.98H7.89L10.16 0Z" fill="#FFC46C" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Pagination Dots - Group 222 */}
            <div className="absolute flex gap-[17px] left-[679px] top-[608px] items-center">
                {/* Ellipse 19 */}
                <div className="w-[16px] h-[16px] bg-[#18181C] rounded-full cursor-pointer hover:bg-[#333]" />

                {/* Ellipse 18 - Active */}
                <div className="w-[16px] h-[16px] rounded-full bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] shadow-[0_0_10px_rgba(128,84,255,0.5)]" />

                {/* Ellipse 20 */}
                <div className="w-[16px] h-[16px] bg-[#18181C] rounded-full cursor-pointer hover:bg-[#333]" />
            </div>

            {/* Back to Home Link */}
            <Link href="/" className="absolute top-8 left-8 text-[#9E9E9E] hover:text-white transition-colors">
                ← Back to Home
            </Link>

        </main>
    );
}
