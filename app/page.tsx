import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-[1440px] h-[4942px] bg-[#000000] mx-auto overflow-hidden text-white font-poppins selection:bg-purple-500 selection:text-white">

      {/* ========================================= 
          1. BACKGROUND LINES & GRADIENTS
         ========================================= */}

      {/* Grid Lines (1-13) */}
      {[107, 218.47, 329.94, 441.41, 552.88, 664.35, 775.83, 887.3, 998.77, 1110.24, 1221.71, 1333].map((left, i) => (
        <div
          key={i}
          className="absolute top-[-4px] w-[1px] h-[851px]"
          style={{
            left: `${left}px`,
            background: 'linear-gradient(180deg, #404047 0%, rgba(64, 64, 71, 0) 65.45%)'
          }}
        />
      ))}
      {/* Line 13 specifically 773px high in CSS dump? Keeping consistent with loop or manual if needed. 
           Dump says Line 13 is 773px height. The loop covers 12 lines. 
           Let's add the 13th manually if needed or just use the loop logic for simplicity if visual difference is negligible.
           Wait, loop has 12 items. 13th is 1333px. Added it to array.
           Correction: The 13th line in dump has height 773px, others 851px. Adjusting logic.
       */}
      <div
        className="absolute top-[-4px] w-[1px] h-[773px]"
        style={{
          left: '1333px',
          background: 'linear-gradient(180deg, #404047 0%, rgba(64, 64, 71, 0) 65.45%)'
        }}
      />

      {/* Gradients */}
      {/* Subtract */}
      <div className="absolute left-[-3px] top-[777px] w-[1446px] h-[474.4px] pointer-events-none"
        style={{ background: 'linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)', opacity: 0.1, filter: 'blur(120px)' }} />
      {/* Rectangle 59 */}
      <div className="absolute left-[-3px] top-[634.98px] w-[1446px] h-[616.42px] pointer-events-none"
        style={{ background: 'linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)', opacity: 0.1, filter: 'blur(120px)' }} />

      {/* Ellipse 16 */}
      <div className="absolute left-[-147.02px] top-[376.88px] w-[1732.9px] h-[516.18px] bg-[#D9D9D9] opacity-5 filter blur-[100px] pointer-events-none" />
      {/* Ellipse 17 */}
      <div className="absolute left-[-147.02px] top-[1138.48px] w-[1732.9px] h-[516.18px] bg-[#D9D9D9] opacity-5 filter blur-[100px] pointer-events-none" />


      {/* =========================================
          2. NAVBAR
         ========================================= */}

      {/* Logo - Group 127 */}
      <div className="absolute w-[131.98px] h-[33.84px] left-[165px] top-[32px] flex items-center gap-2">
        {/* Icon Placeholder */}
        <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
          <svg width="24" height="20" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z" fill="white" />
          </svg>
        </div>
        <span className="font-semibold text-xl tracking-tight text-white">Squid</span>
      </div>

      {/* Home Link */}
      <Link href="/" className="absolute w-[42px] h-[28px] left-[925px] top-[35px] font-poppins font-normal text-[14px] leading-[28px] text-[#9E9E9E] text-center hover:text-white transition-colors">
        Home
      </Link>

      {/* Login Link */}
      <Link href="/login" className="absolute w-[42px] h-[28px] left-[1001px] top-[35px] font-poppins font-normal text-[14px] leading-[28px] text-[#9E9E9E] text-center hover:text-white transition-colors">
        Login
      </Link>

      {/* Button Frame 8 */}
      <Link href="/pricing" className="hidden md:flex flex-row items-center gap-[10px] absolute w-[198px] h-[44px] left-[1077px] top-[27px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] hover:opacity-90 transition-opacity">
        <span className="w-[142px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-white text-center">
          Download Template
        </span>
      </Link>


      {/* =========================================
          3. HERO SECTION
         ========================================= */}

      {/* Heading */}
      <h1 className="absolute w-[749px] h-[160px] left-[346px] top-[169px] font-['Poppins'] font-semibold text-[64px] leading-[80px] text-center text-white z-10">
        Beautiful Landing Page<br />Design for You
      </h1>

      {/* Paragraph */}
      <p className="absolute w-[577px] h-[66px] left-[432px] top-[347px] font-poppins font-normal text-[18px] leading-[28px] text-center text-[#9E9E9E] z-10">
        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
      </p>

      {/* Hero CTA Button - Frame 2 */}
      <Link href="/pricing" className="absolute flex flex-row items-center gap-[10px] w-[198px] h-[44px] left-[621px] top-[438px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] z-10 hover:opacity-90 transition-opacity">
        <span className="w-[142px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-white text-center">
          Download Template
        </span>
      </Link>

      {/* Subtract Background Wave */}
      <div className="absolute w-[1446px] h-[474.4px] left-[-3px] top-[777px] z-0 pointer-events-none">
        <svg width="1440" height="475" viewBox="0 0 1440 475" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M-3 474.398V0.518438C152.173 70.1574 417.8 116.066 719.424 116.066C1021.8 116.066 1287.99 69.9294 1443 0V474.398H1435.9C1279.94 406.237 1017.23 361.483 719.424 361.483C421.618 361.483 158.903 406.237 2.9452 474.398H-3Z" fill="url(#paint0_linear_408_1212)" />
          <defs>
            <linearGradient id="paint0_linear_408_1212" x1="-3" y1="53.9088" x2="1472.83" y2="250.81" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9898" />
              <stop offset="1" stopColor="#8054FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Visual Mockup - Rectangle 6 */}
      <div className="absolute w-[866px] h-[553px] left-[287px] top-[551px] bg-[#131415] rounded-[28px] flex items-center justify-center shadow-2xl overflow-hidden border border-[#222228]">
        {/* Rectangle 40 - Sidebar */}
        <div className="absolute w-[246px] h-[460px] left-[53px] top-[43px] bg-[#222228] rounded-[20px] flex flex-col items-center py-8 gap-4">
          {/* Logo Icon */}
          <div className="w-12 h-12 mb-2 bg-[#2A2A2E] rounded-[12px] flex items-center justify-center">
            <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M38.6885 19.9414C35.7245 17.0666 30.8972 17.1435 27.9288 20.1105L25.7447 22.2936L23.6091 20.1589L27.6673 16.1025C31.1543 12.6171 31.1543 6.94436 27.6673 3.459L26.8258 2.61786C25.1339 0.92899 22.8884 0 20.5 0C18.1116 0 15.8639 0.92899 14.1764 2.61786L13.3349 3.459C9.84791 6.94436 9.84791 12.6171 13.3349 16.1025L17.3931 20.1589L15.2574 22.2936L12.9855 20.0227C11.5024 18.5403 9.55568 17.8001 7.60675 17.8001C5.65782 17.8001 3.71109 18.5403 2.22797 20.0227C0.790997 21.4612 0 23.3697 0 25.4012C0 27.4327 0.790997 29.3411 2.22797 30.7775C3.66275 32.2116 5.57213 33 7.60675 33C9.64137 33 11.5507 32.2116 12.9855 30.7775L15.2574 28.5066L17.5843 30.8368C18.3621 31.6142 19.3948 32.0447 20.4956 32.0447C21.5964 32.0447 22.6313 31.6164 23.4091 30.8389L25.7447 28.5044L27.9288 30.6874C29.3965 32.1545 31.352 32.9627 33.4328 32.9627C35.5136 32.9627 37.2867 32.2138 38.6885 30.8565C40.1782 29.4114 41 27.4722 41 25.399C41 23.3258 40.1782 21.3865 38.6885 19.9414ZM9.87867 27.6698C9.27224 28.276 8.46586 28.6076 7.60675 28.6076C6.74764 28.6076 5.94126 28.2738 5.33483 27.6698C4.7284 27.0659 4.39443 26.2577 4.39443 25.399C4.39443 24.5403 4.7284 23.7343 5.33483 23.1281C5.94126 22.522 6.74764 22.1881 7.60675 22.1881C8.46586 22.1881 9.27224 22.522 9.87867 23.1281L12.1506 25.399L9.87867 27.6698ZM20.4978 27.5381L19.7156 26.7562L18.3621 25.4012L20.4758 23.2862L20.6516 23.4202L22.6313 25.399L20.4934 27.5359L20.4978 27.5381ZM21.9875 15.5688L20.5022 17.0534L16.4439 12.9971C14.6708 11.2247 14.6708 8.33895 16.4439 6.56442L17.2855 5.72328C18.1446 4.86457 19.2871 4.39019 20.5022 4.39019C21.7173 4.39019 22.8598 4.86237 23.7189 5.72328L24.5604 6.56442C26.3336 8.33675 26.3336 11.2225 24.5604 12.9971L21.9875 15.5688ZM35.63 27.705C35.0258 28.2914 34.2348 28.5813 33.4328 28.5813C32.5715 28.5813 31.7014 28.2474 31.0378 27.5842L28.8538 25.4012L31.0378 23.2182C32.3188 21.9378 34.3798 21.8829 35.63 23.0952C36.2606 23.7057 36.6078 24.5249 36.6078 25.4012C36.6078 26.2775 36.2606 27.0966 35.63 27.7072V27.705Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Search/Input Bar - Group 116 */}
          <div className="w-[146px] h-[20px] mb-3 flex flex-row items-center gap-2.5">
            {/* Rectangle 53 - Left Icon */}
            <div className="w-[20px] h-[20px] bg-[#313139] rounded-[5px]" />

            {/* Group 107 - Text Lines Container */}
            <div className="flex flex-col gap-1.5">
              {/* Top row with two elements */}
              <div className="flex flex-row gap-1.5">
                <div className="w-[74px] h-[6px] bg-[#313139] rounded-[33px]" />
                <div className="w-[24px] h-[6px] bg-[#313139] rounded-[33px]" />
              </div>
              {/* Bottom row with two elements */}
              <div className="flex flex-row gap-1.5">
                <div className="w-[36px] h-[6px] bg-[#313139] rounded-[33px]" />
                <div className="w-[24px] h-[6px] bg-[#313139] rounded-[33px]" />
              </div>
            </div>
          </div>

          {/* 5 Menu Rows */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-row items-center w-[210px] h-[36px] opacity-30 gap-3">
              <div className="w-8 h-8 rounded-[6px] bg-[#2A2A2E]" />
              <div className="flex flex-col gap-1">
                <div className="w-[100px] h-2.5 bg-[#2A2A2E] rounded-full" />
                <div className="w-[60px] h-2 bg-[#2A2A2E] rounded-full" />
              </div>
            </div>
          ))}

          {/* Bottom Avatar Section */}
          <div className="mt-auto flex flex-col items-center gap-2.5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 border-2 border-[#2A2A2E] flex items-center justify-center overflow-hidden shadow-lg">
              <img src="/images/alisa_logo.svg" className="w-full h-full object-cover" alt="avatar" />
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-[100px] h-2 bg-[#2A2A2E] rounded-full opacity-70" />
              <div className="w-[80px] h-2 bg-[#2A2A2E] rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Rectangle 43 - Circular Progress Card */}
        <div className="absolute w-[231px] h-[217px] left-[327px] top-[43px] bg-[#222228] rounded-[20px] flex flex-col items-center p-5">
          {/* Header - Group 113 */}
          <div className="w-[192px] h-[20px] flex justify-between items-start mb-4">
            {/* Group 107 */}
            <div className="w-[106px] h-[20px] flex flex-col gap-1.5">
              <div className="w-[80px] h-[6px] bg-[#2A2A2E] rounded-full" />
              <div className="flex gap-1.5">
                <div className="w-[40px] h-[6px] bg-[#2A2A2E] rounded-full" />
                <div className="w-[20px] h-[6px] bg-[#2A2A2E] rounded-full" />
              </div>
            </div>
            {/* Rectangle 53 - Right Icon */}
            <div className="w-[20px] h-[20px] bg-[#313139] rounded-[5px]" />
          </div>

          {/* Circular Progress */}
          <div className="relative w-full flex items-center justify-center mt-2">
            <svg width="192" height="155" viewBox="0 0 192 155" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Ring */}
              <path d="M151 99.5C151 130.146 126.146 155 95.5 155C64.8541 155 40 130.146 40 99.5C40 68.8541 64.8541 44 95.5 44C126.146 44 151 68.8541 151 99.5Z" fill="#313139" />

              {/* Inner Background Ring */}
              <path d="M141.742 99.5C141.742 125.038 121.038 145.742 95.5 145.742C69.9618 145.742 49.2424 125.038 49.2424 99.5C49.2424 73.9618 69.9618 53.2576 95.5 53.2576C121.038 53.2576 141.742 73.9618 141.742 99.5Z" fill="#222228" />

              {/* Gradient Progress Arc */}
              <path d="M95.5001 154.575C65.1279 154.575 40.4258 129.872 40.4258 99.5001C40.4258 69.1279 65.1279 44.4258 95.5001 44.4258C125.872 44.4258 150.575 69.1279 150.575 99.5001C150.575 101.78 148.72 103.635 146.44 103.635C144.16 103.635 142.305 101.78 142.305 99.5001C142.305 73.7035 121.312 52.7105 95.5153 52.7105C69.7187 52.7105 48.7105 73.7035 48.7105 99.5001C48.7105 125.297 69.7035 146.29 95.5001 146.29C97.7803 146.29 99.6349 148.144 99.6349 150.425C99.6349 152.705 97.7803 154.559 95.5001 154.559V154.575Z" fill="url(#paint0_linear_408_1384)" />

              {/* Inner Circles */}
              <circle cx="96" cy="99" r="27" fill="#313139" />
              <circle cx="96" cy="99" r="19" fill="#222228" />

              {/* Header Elements from SVG */}
              <rect width="74" height="6" rx="3" fill="#313139" />
              <rect x="82" width="24" height="6" rx="3" fill="#313139" />
              <rect x="46" y="14" width="24" height="6" rx="3" fill="#313139" />
              <rect y="14" width="36" height="6" rx="3" fill="#313139" />
              <rect x="172" width="20" height="20" rx="5" fill="#313139" />

              <defs>
                <linearGradient id="paint0_linear_408_1384" x1="40.4258" y1="56.9427" x2="154.629" y2="61.9415" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9898" />
                  <stop offset="1" stopColor="#8054FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Rectangle 44 - Bar Chart Card */}
        <div className="absolute w-[231px] h-[217px] left-[327px] top-[286px] bg-[#222228] rounded-[20px] flex flex-col items-center p-5">
          {/* Header */}
          <div className="w-full h-[20px] flex justify-between items-start mb-4">
            <svg width="192" height="20" viewBox="0 0 192 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="74" height="6" rx="3" fill="#313139" />
              <rect x="82" width="24" height="6" rx="3" fill="#313139" />
              <rect x="46" y="14" width="24" height="6" rx="3" fill="#313139" />
              <rect y="14" width="36" height="6" rx="3" fill="#313139" />
              <rect x="172" width="20" height="20" rx="5" fill="#313139" />
            </svg>
          </div>

          {/* Divider Line */}
          <div className="w-full mb-6 opacity-20">
            <svg width="192" height="1" viewBox="0 0 192 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.37114e-08" y1="0.5" x2="192" y2="0.500017" stroke="#313139" />
            </svg>
          </div>

          {/* Bar Chart */}
          <div className="w-full px-2">
            <svg width="172" height="94" viewBox="0 0 172 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Tracks */}
              <path d="M19.32 83.68V9.66C19.32 4.32493 14.9951 0 9.66 0C4.32493 0 0 4.32492 0 9.66V83.68C0 89.0151 4.32493 93.34 9.66 93.34C14.9951 93.34 19.32 89.0151 19.32 83.68Z" fill="#313139" />
              <path d="M49.6999 83.68V9.66C49.6999 4.32493 45.375 0 40.0399 0C34.7048 0 30.3799 4.32492 30.3799 9.66V83.68C30.3799 89.0151 34.7048 93.34 40.0399 93.34C45.375 93.34 49.6999 89.0151 49.6999 83.68Z" fill="#313139" />
              <path d="M80.08 83.68V9.66C80.08 4.32493 75.7551 0 70.42 0C65.0849 0 60.76 4.32492 60.76 9.66V83.68C60.76 89.0151 65.0849 93.34 70.42 93.34C75.7551 93.34 80.08 89.0151 80.08 83.68Z" fill="#313139" />
              <path d="M110.46 83.68V9.66C110.46 4.32493 106.135 0 100.8 0C95.4651 0 91.1401 4.32492 91.1401 9.66V83.68C91.1401 89.0151 95.4651 93.34 100.8 93.34C106.135 93.34 110.46 89.0151 110.46 83.68Z" fill="#313139" />
              <path d="M141.32 83.68V9.66C141.32 4.32493 136.995 0 131.66 0C126.325 0 122 4.32492 122 9.66V83.68C122 89.0151 126.325 93.34 131.66 93.34C136.995 93.34 141.32 89.0151 141.32 83.68Z" fill="#313139" />
              <path d="M171.75 83.68V9.66C171.75 4.32493 167.425 0 162.09 0C156.755 0 152.43 4.32492 152.43 9.66V83.68C152.43 89.0151 156.755 93.34 162.09 93.34C167.425 93.34 171.75 89.0151 171.75 83.68Z" fill="#313139" />

              {/* Gradient Bars */}
              <path d="M171.75 83.6701V28.7801C171.75 23.445 167.425 19.1201 162.09 19.1201C156.755 19.1201 152.43 23.4451 152.43 28.7801V83.6701C152.43 89.0052 156.755 93.3301 162.09 93.3301C167.425 93.3301 171.75 89.0052 171.75 83.6701Z" fill="url(#paint0_linear_408_1707)" />
              <path d="M141 83.5V38.5C141 33.2533 136.747 29 131.5 29C126.253 29 122 33.2533 122 38.5V83.5C122 88.7467 126.253 93 131.5 93C136.747 93 141 88.7467 141 83.5Z" fill="url(#paint1_linear_408_1707)" />
              <path d="M110 83.5V54.5C110 49.2533 105.747 45 100.5 45C95.2533 45 91 49.2533 91 54.5V83.5C91 88.7467 95.2533 93 100.5 93C105.747 93 110 88.7467 110 83.5Z" fill="url(#paint2_linear_408_1707)" />
              <path d="M80 83.5V66.5C80 61.2533 75.7467 57 70.5 57C65.2533 57 61 61.2533 61 66.5V83.5C61 88.7467 65.2533 93 70.5 93C75.7467 93 80 88.7467 80 83.5Z" fill="url(#paint3_linear_408_1707)" />
              <path d="M50 84C50 79.0294 45.9706 75 41 75H40C35.0294 75 31 79.0294 31 84V83.5C31 88.4706 35.0294 92.5 40 92.5H41C45.9706 92.5 50 88.4706 50 83.5V84Z" fill="url(#paint4_linear_408_1707)" />

              <defs>
                <linearGradient id="paint0_linear_408_1707" x1="163.5" y1="3.00009" x2="193.116" y2="19.2609" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9898" />
                  <stop offset="1" stopColor="#8054FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_408_1707" x1="132.887" y1="15.0978" x2="160.117" y2="32.1472" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9898" />
                  <stop offset="1" stopColor="#8054FF" />
                </linearGradient>
                <linearGradient id="paint2_linear_408_1707" x1="101.887" y1="34.5734" x2="124.225" y2="53.2213" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9898" />
                  <stop offset="1" stopColor="#8054FF" />
                </linearGradient>
                <linearGradient id="paint3_linear_408_1707" x1="71.8867" y1="49.18" x2="88.8168" y2="68.0245" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9898" />
                  <stop offset="1" stopColor="#8054FF" />
                </linearGradient>
                <linearGradient id="paint4_linear_408_1707" x1="41.8867" y1="71.09" x2="48.2512" y2="85.2583" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9898" />
                  <stop offset="1" stopColor="#8054FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Rectangle 45 - User List Card */}
        <div className="absolute w-[230px] h-[328px] left-[586px] top-[43px] bg-[#222228] rounded-[20px] flex flex-col items-center p-5">
          {/* Header */}
          <div className="w-full h-[20px] flex justify-between items-start mb-6">
            <svg width="192" height="20" viewBox="0 0 192 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="74" height="6" rx="3" fill="#313139" />
              <rect x="82" width="24" height="6" rx="3" fill="#313139" />
              <rect x="46" y="14" width="24" height="6" rx="3" fill="#313139" />
              <rect y="14" width="36" height="6" rx="3" fill="#313139" />
              <rect x="172" width="20" height="20" rx="5" fill="#313139" />
            </svg>
          </div>

          {/* User List Items */}
          <div className="flex flex-col w-full gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col">
                {/* Row Container - Group 108 */}
                <div className="w-[192px] h-[54px] flex flex-row items-center justify-between">
                  {/* Left Side: Avatar + Text */}
                  <div className="flex flex-row items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center bg-gradient-to-br ${i === 0 ? 'from-pink-400 to-red-400' :
                        i === 1 ? 'from-yellow-400 to-orange-400' :
                          i === 2 ? 'from-purple-400 to-indigo-400' :
                            'from-gray-400 to-gray-500'
                      }`}>
                      <div className="w-[38px] h-[38px] rounded-full bg-[#2A2A2E] opacity-20" />
                    </div>

                    {/* Text Group */}
                    <div className="flex flex-col gap-1.5">
                      <div className="w-[74px] h-[6px] bg-[#313139] rounded-full" />
                      <div className="flex gap-1.5">
                        <div className="w-[36px] h-[6px] bg-[#313139] rounded-full" />
                        <div className="w-[24px] h-[6px] bg-[#313139] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Right Status Indicator */}
                  <div className="w-[24px] h-[6px] bg-[#313139] rounded-full" />
                </div>

                {/* Divider Line (except for last item) */}
                {i < 3 && (
                  <div className="w-[192px] h-[1px] bg-[#313139]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Rectangle 46 */}
        <div className="absolute w-[230px] h-[103px] left-[586px] top-[397px] bg-[#222228] rounded-[20px]"></div>

      </div>


      {/* =========================================
          4. FEATURES SECTION
         ========================================= */}

      <h2 className="absolute w-[342px] h-[80px] left-[165px] top-[1236px] font-semibold text-[48px] leading-[80px] text-center text-white">
        Feature Boxes
      </h2>
      <p className="absolute w-[577px] h-[66px] left-[165px] top-[1321px] font-normal text-[18px] leading-[28px] text-[#9E9E9E] text-left">
        A good design is not only aesthetically pleasing, but also <br /> functional. It should be able to solve the problem
      </p>

      {/* Row 1, Box 1 */}
      {/* Rectangle 11 */}
      <div className="absolute w-[350px] h-[371px] left-[165px] top-[1420px] bg-[#18181C] rounded-[20px] hover:border hover:border-[#222228] transition-colors group">
        <div className="absolute w-[104px] h-[104px] left-[123px] top-[50px] bg-[#222228] rounded-[30px] flex items-center justify-center">
          <svg width="44.7819" height="45.9603" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_408_1330)">
              <path d="M32.4493 36.7144C31.4832 36.7144 30.7 35.9106 30.7 34.919V19.8384C30.7 18.8468 31.4832 18.043 32.4493 18.043C33.4155 18.043 34.1986 18.8468 34.1986 19.8384V34.9191C34.1986 35.9106 33.4155 36.7144 32.4493 36.7144ZM36.2385 42.8368L41.6769 37.3014C43.6502 35.293 44.7819 32.5052 44.7819 29.653V10.7719C44.7819 4.83229 40.0735 0 34.2861 0H15.9342C13.1472 0 10.5223 1.10924 8.5435 3.12353L3.10501 8.65891C1.13172 10.6673 0 13.455 0 16.3074V35.1884C0 41.128 4.70839 45.9603 10.4957 45.9603H28.8476C31.6348 45.9603 34.2595 44.8511 36.2385 42.8368ZM34.2861 3.59065C38.1444 3.59065 41.2833 6.81215 41.2833 10.7719V29.6529C41.2833 31.5545 40.5288 33.413 39.2133 34.7519L33.7749 40.2874C32.4556 41.6302 30.7058 42.3697 28.8476 42.3697H10.4957C6.63748 42.3697 3.49858 39.1482 3.49858 35.1884V16.3074C3.49858 14.4059 4.25308 12.5473 5.56858 11.2084L11.007 5.67294C12.3263 4.33014 14.0761 3.59065 15.9342 3.59065H34.2861ZM36.3456 11.1777L37.0812 10.442C37.7732 9.75016 37.7876 8.61345 37.1134 7.90331C36.4393 7.19309 35.3316 7.17828 34.6398 7.87025L33.9041 8.60588C32.5074 10.0027 30.6641 10.7719 28.714 10.7719H11.283C10.3168 10.7719 9.53362 11.5757 9.53362 12.5673C9.53362 13.5589 10.3168 14.3627 11.283 14.3627H28.7139C31.5814 14.3626 34.2917 13.2315 36.3456 11.1777Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_408_1330">
                <rect width="44.7819" height="45.9603" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="absolute w-[194px] h-[32px] left-[78px] top-[193px] font-poppins font-semibold text-[20px] leading-[32px] text-center text-white">Fully Customizable</h3>
        <p className="absolute w-[303px] h-[83px] left-[24px] top-[240px] font-poppins font-normal text-[14px] leading-[28px] text-center text-[#9E9E9E]">
          A good design is not only aesthetically<br />pleasing, but also functional. It should be<br />able to solve the problem
        </p>
      </div>

      {/* Row 1, Box 2 */}
      <div className="absolute w-[350px] h-[371px] left-[545px] top-[1420px] bg-[#18181C] rounded-[20px] hover:border hover:border-[#222228] transition-colors group">
        <div className="absolute w-[104px] h-[104px] left-[123px] top-[50px] bg-[#222228] rounded-[30px] flex items-center justify-center">
          <svg width="44." height="44.66" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip_box_2)">
              <path d="M21.9999 28.396C20.0043 28.3961 18.0095 27.886 16.1904 26.8661L3.07367 19.5105C1.17162 18.444 -0.00591998 16.3815 0.000261118 14.128C0.00652463 11.8745 1.19552 9.81918 3.10342 8.76405L16.2532 1.49235C19.8516 -0.497449 24.1481 -0.497449 27.7465 1.49235L40.8963 8.76405C42.8042 9.81909 43.9932 11.8744 43.9994 14.128C44.0056 16.3815 42.8281 18.444 40.9261 19.5105L27.8092 26.8661C25.9907 27.886 23.9949 28.3959 21.9999 28.396ZM21.9999 3.59407C20.5781 3.59407 19.1565 3.95241 17.8605 4.66909L4.71083 11.9409C3.91636 12.3802 3.44041 13.2018 3.43786 14.1385C3.4353 15.0752 3.90655 15.8996 4.69864 16.3438L17.8155 23.6992C20.4359 25.1686 23.5643 25.1686 26.1846 23.6992L39.3016 16.3438C40.0937 15.8996 40.5649 15.0752 40.5623 14.1385C40.5598 13.2018 40.0838 12.3802 39.2894 11.9409L26.1392 4.66909C24.8432 3.95249 23.4216 3.59407 21.9999 3.59407ZM27.8093 43.1275L43.0932 34.5571C43.9297 34.0881 44.2441 32.9988 43.7955 32.1244C43.3468 31.2498 42.305 30.9211 41.4685 31.3902L26.1845 39.9606C23.5643 41.43 20.4358 41.43 17.8087 39.9569L2.52479 31.4764C1.68613 31.0111 0.645815 31.3446 0.200941 32.2211C-0.244098 33.0977 0.0748464 34.1853 0.913333 34.6506L16.1905 43.1274C18.0096 44.1475 20.0044 44.6574 21.9999 44.6574C23.9949 44.6575 25.9907 44.1474 27.8093 43.1275ZM27.8093 35.0418L43.0932 26.4714C43.9297 26.0023 44.2441 24.9131 43.7955 24.0386C43.3468 23.164 42.305 22.8355 41.4685 23.3044L26.1845 31.8749C23.5643 33.3443 20.4358 33.3442 17.8087 31.8712L2.52479 23.3906C1.68613 22.9253 0.645815 23.2589 0.200941 24.1354C-0.244098 25.012 0.0748464 26.0996 0.913333 26.5649L16.1905 35.0417C18.0096 36.0618 20.0044 36.5716 21.9999 36.5716C23.9949 36.5716 25.9907 36.0617 27.8093 35.0418Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip_box_2">
                <rect width="44.7819" height="45.9603" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="absolute w-[194px] h-[32px] left-[78px] top-[193px] font-poppins font-semibold text-[20px] leading-[32px] text-center text-white">Fully Customizable</h3>
        <p className="absolute w-[303px] h-[83px] left-[24px] top-[240px] font-poppins font-normal text-[14px] leading-[28px] text-center text-[#9E9E9E]">
          A good design is not only aesthetically<br />pleasing, but also functional. It should be<br />able to solve the problem
        </p>
      </div>

      {/* Row 1, Box 3 */}
      <div className="absolute w-[350px] h-[371px] left-[925px] top-[1420px] bg-[#18181C] rounded-[20px] hover:border hover:border-[#222228] transition-colors group">
        <div className="absolute w-[104px] h-[104px] left-[123px] top-[50px] bg-[#222228] rounded-[30px] flex items-center justify-center">
          {/* Different Icon for box 3 as per dump? Rectangle 28 is gradient in dump. 
                 "Rectangle 28... background: linear-gradient..." at 1048, 1470 (which matches box 3 position)
             */}
          <div className="absolute w-[104px] h-[104px] bg-[linear-gradient(135.66deg,#FF9898_14.73%,#8054FF_86.33%)] rounded-[30px] flex items-center justify-center shadow-[0_0_20px_rgba(128,84,255,0.3)]">
            <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.8008 35.1289C7.53679 35.1289 0 27.2495 0 17.5645C0 7.87937 7.53679 0 16.8008 0C26.0648 0 33.6016 7.87937 33.6016 17.5645C33.6016 27.2495 26.0648 35.1289 16.8008 35.1289ZM16.8008 3.59374C9.43228 3.59374 3.43749 9.86093 3.43749 17.5645C3.43749 25.268 9.43220 31.5352 16.8008 31.5352C24.1694 31.5352 30.1641 25.268 30.1641 17.5645C30.1641 9.86093 24.1693 3.59374 16.8008 3.59374ZM44 35.2188V24.9766C44 21.3421 42.2656 17.9759 39.3605 15.9721C38.5684 15.4257 37.5021 15.6541 36.9794 16.4825C36.4566 17.3109 36.6753 18.4254 37.4676 18.9719C39.4055 20.3086 40.5625 22.5532 40.5625 24.9767V35.2189C40.5625 39.1821 37.4784 42.4063 33.6875 42.4063H23.8906C21.6394 42.4063 19.5271 41.2505 18.2402 39.3146C17.6985 38.4996 16.6273 38.2982 15.848 38.8644C15.0684 39.4307 14.8758 40.5505 15.4173 41.3653C17.3465 44.2675 20.5141 46.0001 23.8907 46.0001H33.6876C39.3738 46 44 41.1635 44 35.2188Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <h3 className="absolute w-[194px] h-[32px] left-[78px] top-[193px] font-poppins font-semibold text-[20px] leading-[32px] text-center text-white">Fully Customizable</h3>
        <p className="absolute w-[303px] h-[83px] left-[24px] top-[240px] font-poppins font-normal text-[14px] leading-[28px] text-center text-[#9E9E9E]">
          A good design is not only aesthetically<br />pleasing, but also functional. It should be<br />able to solve the problem
        </p>
      </div>

      {/* Row 2, Box 1 */}
      <div className="absolute w-[350px] h-[371px] left-[165px] top-[1821px] bg-[#18181C] rounded-[20px] hover:border hover:border-[#222228] transition-colors group">
        <div className="absolute w-[104px] h-[104px] left-[123px] top-[50px] bg-[#222228] rounded-[30px] flex items-center justify-center">
          <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip_two_circles)">
              <path d="M37.7266 45C36.0509 45 34.4755 44.3326 33.2906 43.1208L28.1793 37.8933C26.4379 36.1124 25.2625 33.8656 24.7797 31.396L23.8065 26.4157C23.6938 25.8395 23.8703 25.2438 24.2767 24.8282C24.683 24.4127 25.2657 24.2325 25.8289 24.3474L30.6984 25.3429C33.1133 25.8366 35.31 27.0387 37.0515 28.8198L42.1628 34.0472C43.3476 35.2589 44.0001 36.87 44.0001 38.5838C44.0001 40.2976 43.3476 41.9088 42.1625 43.1206C40.9775 44.3326 39.4022 45 37.7266 45ZM27.6824 28.3116L28.1505 30.7068C28.4997 32.4936 29.3502 34.1189 30.61 35.4073L35.7213 40.6347C36.2568 41.1825 36.9691 41.4843 37.7266 41.4843C38.484 41.4843 39.1963 41.1825 39.7319 40.6347C40.2674 40.087 40.5625 39.3586 40.5625 38.5839C40.5625 37.8092 40.2674 37.0808 39.7319 36.5331L34.6205 31.3056C33.3608 30.0173 31.7716 29.1475 30.0246 28.7903L27.6824 28.3116ZM26.7681 42.9992C27.4438 42.3174 27.4511 41.2045 26.7843 40.5134C26.1177 39.8224 25.0293 39.8147 24.3538 40.4968C23.7227 41.1337 22.8868 41.4844 22.0001 41.4844C20.152 41.4844 18.6485 39.9468 18.6485 38.0567V17.4903C18.6485 13.6617 15.603 10.5469 11.8595 10.5469H6.87499C4.97958 10.5469 3.43749 8.96981 3.43749 7.03132C3.43749 5.09284 4.97958 3.51562 6.87499 3.51562H37.125C39.0204 3.51562 40.5625 5.09276 40.5625 7.03124C40.5625 8.96972 39.0204 10.5469 37.1134 7.90331H32.1406C28.3971 10.5469 25.3516 13.6616 25.3516 17.4902V19.4238C25.3516 20.3946 26.1211 21.1816 27.0704 21.1816C28.0197 21.1816 28.7892 20.3946 28.7892 19.4238V17.4902C28.7892 15.6001 30.2926 14.0625 32.1407 14.0625H37.1251C40.916 14.0625 44.0001 10.9083 44.0001 7.03124C44.0001 3.15419 40.9159 0 37.125 0H6.87499C3.08409 0 0 3.15419 0 7.03124C0 10.9083 3.08409 14.0625 6.87499 14.0625H11.8594C13.7075 14.0625 15.2109 15.6001 15.2109 17.4902V38.0566C15.2109 41.8852 18.2564 44.9999 21.9999 44.9999C23.7963 45 25.4896 44.2894 26.7681 42.9992Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip_two_circles">
                <rect width="44.7819" height="45.9603" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="absolute w-[194px] h-[32px] left-[78px] top-[193px] font-poppins font-semibold text-[20px] leading-[32px] text-center text-white">Fully Customizable</h3>
        <p className="absolute w-[303px] h-[83px] left-[24px] top-[240px] font-poppins font-normal text-[14px] leading-[28px] text-center text-[#9E9E9E]">
          A good design is not only aesthetically<br />pleasing, but also functional. It should be<br />able to solve the problem
        </p>
      </div>

      {/* Row 2, Box 2 */}
      <div className="absolute w-[350px] h-[371px] left-[545px] top-[1821px] bg-[#18181C] rounded-[20px] hover:border hover:border-[#222228] transition-colors group">
        <div className="absolute w-[104px] h-[104px] left-[123px] top-[50px] bg-[#222228] rounded-[30px] flex items-center justify-center">
          <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip_crossed_tools)">
              <path d="M27.9125 37.8765C27.4637 37.8765 27.0148 37.702 26.6718 37.3525L4.93852 15.2122C2.95308 13.1825 1.61401 10.6247 1.06432 7.81299C1.06272 7.80506 1.06128 7.79713 1.05985 7.78921L0.029671 2.1252C-0.0762717 1.54322 0.105188 0.945049 0.514883 0.526335C0.92441 0.107794 1.5095 -0.078043 2.07899 0.0303401L7.61987 1.0835C7.62762 1.08505 7.63537 1.08643 7.64304 1.08807C10.3936 1.65006 12.8959 3.01872 14.8793 5.04629L36.6104 27.1843C37.298 27.8848 37.2999 29.0224 36.6147 29.7252C35.9294 30.4279 34.8165 30.43 34.129 29.7295L12.3957 7.58933C10.9054 6.06593 9.02847 5.0381 6.96525 4.61413L3.95376 4.04181L4.51356 7.11987C4.92823 9.22912 5.9338 11.1478 7.42214 12.6691L29.1532 34.8074C29.8408 35.5078 29.8426 36.6454 29.1574 37.3482C28.8141 37.7003 28.3633 37.8765 27.9125 37.8765ZM12.0023 43.8982L18.7685 36.9799C19.4549 36.2781 19.4548 35.1405 18.7682 34.439C18.0818 33.7374 16.9689 33.7375 16.2826 34.4393L9.51655 41.3574C8.14596 42.7584 5.91568 42.7584 4.54517 41.3574C3.8812 40.6786 3.5155 39.7763 3.5155 38.8165C3.5155 37.8567 3.8812 36.9543 4.54534 36.2753L11.2675 29.4021C11.9539 28.7002 11.9537 27.5627 11.2673 26.8612C10.5808 26.1597 9.46784 26.1597 8.78144 26.8614L2.05944 33.7345C0.731488 35.0918 8.79438e-05 36.8967 8.79438e-05 38.8164C8.79438e-05 40.7361 0.731404 42.5409 2.05935 43.8983C3.42995 45.2994 5.2303 45.9998 7.03073 45.9998C8.83109 45.9998 10.6316 45.2992 12.0023 43.8982ZM36.1014 19.2576L40.06 15.21C42.0433 13.1826 43.3824 10.6247 43.9322 7.8129C43.9338 7.80497 43.9353 7.79705 43.9367 7.78912L44.9668 2.1252C45.0727 1.54314 44.8912 0.945049 44.4816 0.526335C44.0721 0.107707 43.4871 -0.0779568 42.9175 0.0303401L37.3766 1.08359C37.3688 1.08514 37.3611 1.08652 37.3534 1.08815C34.6029 1.65014 32.1005 3.0188 30.117 5.04655L26.2242 9.02691C25.5378 9.72873 25.538 10.8664 26.2246 11.5678C26.9111 12.2694 28.024 12.2694 28.7102 11.5675L32.6028 7.58735C34.0911 6.06585 35.9681 5.0381 38.0314 4.61413L41.0426 4.04189L40.4827 7.1203C40.068 9.22946 39.0624 11.148 37.5741 12.6694L33.6153 16.7171C32.9289 17.4189 32.9291 18.5566 33.6157 19.258C33.9589 19.6087 34.4085 19.7841 34.8583 19.7841C35.3082 19.784 35.7581 19.6086 36.1014 19.2576ZM42.937 43.8983C44.265 42.5409 44.9963 40.7361 44.9963 38.8164C44.9963 36.9068 44.2726 35.1108 42.9578 33.7558L41.6196 32.2993C40.9551 31.576 39.8427 31.5403 39.1351 32.2195C38.4275 32.8989 38.3926 34.0359 39.0572 34.7593L40.4129 36.2349C40.4254 36.2486 40.4382 36.2622 40.4513 36.2754C41.1153 36.9542 41.481 37.8565 41.481 38.8163C41.481 39.7762 41.1153 40.6786 40.4513 41.3572C39.0865 42.7522 36.8696 42.7583 35.4975 41.375L34.1626 39.9219C33.498 39.1987 32.3857 39.163 31.678 39.8422C30.9704 40.5215 30.9355 41.6586 31.6 42.3819L32.9557 43.8577C32.9684 43.8714 32.9811 43.8849 32.9942 43.8982C34.3648 45.2992 36.1652 45.9998 37.9656 45.9998C39.7659 45.9999 41.5664 45.2993 42.937 43.8983Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip_crossed_tools">
                <rect width="44.7819" height="45.9603" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="absolute w-[194px] h-[32px] left-[78px] top-[193px] font-poppins font-semibold text-[20px] leading-[32px] text-center text-white">Fully Customizable</h3>
        <p className="absolute w-[303px] h-[83px] left-[24px] top-[240px] font-poppins font-normal text-[14px] leading-[28px] text-center text-[#9E9E9E]">
          A good design is not only aesthetically<br />pleasing, but also functional. It should be<br />able to solve the problem
        </p>
      </div>

      {/* Row 2, Box 3 */}
      <div className="absolute w-[350px] h-[371px] left-[925px] top-[1821px] bg-[#18181C] rounded-[20px] hover:border hover:border-[#222228] transition-colors group">
        <div className="absolute w-[104px] h-[104px] left-[123px] top-[50px] bg-[#222228] rounded-[30px] flex items-center justify-center">
          <svg width="44.7819" height="43.4803" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip_monitor)">
              <path d="M33.6875 36.2969H10.3107C4.62536 36.2969 0 31.4613 0 25.5175V10.7812C0 4.83646 4.62618 0 10.3125 0H33.6875C39.3738 0 44 4.83646 44 10.7812V25.5156C44 31.4604 39.3738 36.2969 33.6875 36.2969ZM10.3125 3.59374C6.52159 3.59374 3.43749 6.81803 3.43749 10.7812V25.5175C3.43749 29.4796 6.52085 32.7031 10.3107 32.7031H33.6874C37.4783 32.7031 40.5624 29.4788 40.5624 25.5156V10.7812C40.5624 6.81803 37.4783 3.59374 33.6874 3.59374H10.3125ZM31.9687 41.6875C31.9687 40.6951 31.1992 39.8906 30.2499 39.8906H13.75C12.8007 39.8906 12.0312 40.6951 12.0312 41.6875C12.0312 42.6799 12.8007 43.4844 13.75 43.4844H30.25C31.1993 43.4844 31.9687 42.6799 31.9687 41.6875ZM16.1563 23.1797C15.207 23.1797 14.4375 22.3752 14.4375 21.3828V16.3515C14.4375 13.3791 16.7506 10.9609 19.5938 10.9609H24.4922C25.4415 10.9609 26.211 11.7654 26.211 12.7578C26.211 13.7502 25.4415 14.5547 24.4922 14.5547H19.5938C18.6461 14.5547 17.875 15.3608 17.875 16.3516V21.3829C17.875 22.3752 17.1056 23.1797 16.1563 23.1797ZM28.9732 26.2472C29.6445 25.5454 29.6445 24.4076 28.9732 23.7059L23.3013 17.7762C22.6301 17.0744 21.5418 17.0744 20.8706 17.7762C20.1994 18.478 20.1993 19.6157 20.8706 20.3173L26.5424 26.247C26.878 26.598 27.318 26.7733 27.7578 26.7733C28.1976 26.7735 28.6375 26.598 28.9732 26.2472Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip_monitor">
                <rect width="44.7819" height="45.9603" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="absolute w-[194px] h-[32px] left-[78px] top-[193px] font-poppins font-semibold text-[20px] leading-[32px] text-center text-white">Fully Customizable</h3>
        <p className="absolute w-[303px] h-[83px] left-[24px] top-[240px] font-poppins font-normal text-[14px] leading-[28px] text-center text-[#9E9E9E]">
          A good design is not only aesthetically<br />pleasing, but also functional. It should be<br />able to solve the problem
        </p>
      </div>


      {/* =========================================
          5. GUIDANCE SECTION
         ========================================= */}

      {/* Central Circles Graphics Group 122 */}
      <div className="absolute w-[678px] h-[678px] left-[130px] top-[2223px]">
        {/* Ellipse 13 - Outer ring */}
        <div className="absolute w-[678px] h-[678px] left-0 top-0 border border-[#222228] opacity-50 rounded-full"></div>
        {/* Ellipse 12 - Second ring */}
        <div className="absolute w-[510.11px] h-[510.11px] left-[83.94px] top-[83.94px] border border-[#222228] rounded-full"></div>
        {/* Ellipse 11 - Third ring */}
        <div className="absolute w-[380.97px] h-[380.97px] left-[148.51px] top-[148.51px] border border-[#222228] rounded-full"></div>
        {/* Ellipse 10 - Fourth ring */}
        <div className="absolute w-[260.44px] h-[260.44px] left-[208.78px] top-[208.78px] border border-[#222228] rounded-full"></div>

        {/* Orbiting icons */}
        {/* Orange icon (top-left on second ring) - Ellipse 11 */}
        <div className="absolute w-[66px] h-[66px] left-[149px] top-[208px] rounded-full overflow-hidden">
          <img src="/images/Orange icon.png" alt="Orange icon" className="w-full h-full object-cover" />
        </div>

        {/* Yellow icon (right on third ring) - Ellipse 9 */}
        <div className="absolute w-[66px] h-[66px] left-[481px] top-[233px] rounded-full overflow-hidden">
          <img src="/images/yellow icon.png" alt="Yellow icon" className="w-full h-full object-cover" />
        </div>

        {/* Blue icon (bottom on outer ring) - Ellipse 10 */}
        <div className="absolute w-[66px] h-[66px] left-[241px] top-[486px] rounded-full overflow-hidden">
          <img src="/images/blue icon.png" alt="Blue icon" className="w-full h-full object-cover" />
        </div>

        {/* Small gradient icons */}
        {/* Top purple dot - Group 124 */}
        <div className="absolute w-[32px] h-[32px] left-[382px] top-[142px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_408_1687)" fillOpacity="0.3" />
            <circle cx="16" cy="16" r="9.05882" fill="url(#paint1_radial_408_1687)" />
            <defs>
              <radialGradient id="paint0_radial_408_1687" cx="0" cy="0" r="1" gradientTransform="matrix(12.3636 31.2727 -250.267 444.472 10.1818 -2.1818)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9898" />
                <stop offset="1" stopColor="#8054FF" />
              </radialGradient>
              <radialGradient id="paint1_radial_408_1687" cx="0" cy="0" r="1" gradientTransform="matrix(7.00001 17.7059 -141.695 251.65 12.7059 5.70588)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9898" />
                <stop offset="1" stopColor="#8054FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* Left purple dot - Group 126 */}
        <div className="absolute w-[32px] h-[32px] left-[141px] top-[372px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_408_1690)" fillOpacity="0.3" />
            <circle cx="16" cy="16" r="9.05882" fill="url(#paint1_radial_408_1690)" />
            <defs>
              <radialGradient id="paint0_radial_408_1690" cx="0" cy="0" r="1" gradientTransform="matrix(12.3636 31.2727 -250.267 444.472 10.1818 -2.1818)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9898" />
                <stop offset="1" stopColor="#8054FF" />
              </radialGradient>
              <radialGradient id="paint1_radial_408_1690" cx="0" cy="0" r="1" gradientTransform="matrix(7.00001 17.7059 -141.695 251.65 12.7059 5.70588)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9898" />
                <stop offset="1" stopColor="#8054FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* Bottom-right purple dot - Group 125 */}
        <div className="absolute w-[32px] h-[32px] left-[437px] top-[473px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_408_1684)" fillOpacity="0.3" />
            <circle cx="16" cy="16" r="9.05882" fill="url(#paint1_radial_408_1684)" />
            <defs>
              <radialGradient id="paint0_radial_408_1684" cx="0" cy="0" r="1" gradientTransform="matrix(12.3636 31.2727 -250.267 444.472 10.1818 -2.1818)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9898" />
                <stop offset="1" stopColor="#8054FF" />
              </radialGradient>
              <radialGradient id="paint1_radial_408_1684" cx="0" cy="0" r="1" gradientTransform="matrix(7.00001 17.7059 -141.695 251.65 12.7059 5.70588)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9898" />
                <stop offset="1" stopColor="#8054FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Center circle - Ellipse 9 */}
        <div className="absolute w-[129.14px] h-[129.14px] left-[274.43px] top-[274.43px] bg-[#18181C] rounded-full flex items-center justify-center">
          {/* Logo in center */}
          <div className="w-[66px] h-[66px] bg-[#2A2A2E] rounded-full flex items-center justify-center">
            <svg width="65" height="53" viewBox="0 0 65 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] h-auto">
              <path d="M61.3355 32.0272C56.6364 27.41 48.9834 27.5335 44.2773 32.2987L40.8148 35.8048L37.429 32.3764L43.8628 25.8616C49.3909 20.2639 49.3909 11.1531 43.8628 5.55537L42.5287 4.20445C39.8465 1.49201 36.2864 0 32.5 0C28.7136 0 25.1501 1.49201 22.4748 4.20445L21.1407 5.55537C15.6125 11.1531 15.6125 20.2639 21.1407 25.8616L27.5745 32.3764L24.1886 35.8048L20.5868 32.1577C18.2355 29.7768 15.1492 28.5881 12.0595 28.5881C8.96972 28.5881 5.88344 29.7768 3.53215 32.1577C1.25402 34.468 0 37.5331 0 40.7958C0 44.0585 1.25402 47.1237 3.53215 49.4305C5.80681 51.7337 8.83387 53 12.0595 53C15.2851 53 18.3122 51.7337 20.5868 49.4305L24.1886 45.7833L27.8775 49.5257C29.1107 50.7743 30.7479 51.4657 32.493 51.4657C34.2382 51.4657 35.8789 50.7779 37.112 49.5292L40.8148 45.7798L44.2773 49.2858C46.6042 51.642 49.7044 52.94 53.0032 52.94C56.302 52.94 59.1131 51.7373 61.3355 49.5574C63.6972 47.2365 65 44.122 65 40.7923C65 37.4626 63.6972 34.3481 61.3355 32.0272ZM15.6613 44.4394C14.6999 45.413 13.4215 45.9456 12.0595 45.9456C10.6975 45.9456 9.41908 45.4094 8.45766 44.4394C7.49625 43.4695 6.96677 42.1714 6.96677 40.7923C6.96677 39.4132 7.49625 38.1187 8.45766 37.1451C9.41908 36.1716 10.6975 35.6355 12.0595 35.6355C13.4215 35.6355 14.6999 36.1716 15.6613 37.1451L19.2631 40.7923L15.6613 44.4394ZM32.4965 44.2278L31.2564 42.9721L29.1107 40.7958L32.4617 37.3991L32.7404 37.6143L35.8789 40.7923L32.4895 44.2243L32.4965 44.2278ZM34.8583 25.0045L32.5035 27.3889L26.0697 20.8741C23.2586 18.0276 23.2586 13.3929 26.0697 10.5429L27.4038 9.19193C28.7658 7.81279 30.5772 7.05091 32.5035 7.05091C34.4298 7.05091 36.2412 7.80926 37.6032 9.19193L38.9373 10.5429C41.7484 13.3893 41.7484 18.0241 38.9373 20.8741L34.8583 25.0045ZM56.4866 44.4959C55.5287 45.4376 54.2747 45.9032 53.0032 45.9032C51.6377 45.9032 50.2583 45.3671 49.2063 44.3019L45.7438 40.7958L49.2063 37.2898C51.2371 35.2334 54.5046 35.1452 56.4866 37.0922C57.4863 38.0728 58.0367 39.3885 58.0367 40.7958C58.0367 42.2032 57.4863 43.5188 56.4866 44.4994V44.4959Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right side Text */}
      <h2 className="absolute w-[443px] h-[204px] left-[832px] top-[2384px] font-semibold text-[48px] leading-[64px] text-left text-white">
        We're here to<br />
        guide and help<br />
        you at all times
      </h2>
      <p className="absolute w-[385px] h-[66px] left-[832px] top-[2600px] font-normal text-[18px] leading-[28px] text-left text-[#9E9E9E]">
        A good design is not only aesthetically<br />
        pleasing, but also functional. It should be<br />
        able to solve the problem
      </p>

      {/* Download Button Frame 9 */}
      <Link href="/pricing" className="absolute flex flex-row items-center gap-[10px] w-[127px] h-[44px] left-[830px] top-[2712px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] hover:opacity-90 transition-opacity">
        <span className="font-normal text-[14px] leading-[20px] text-white">Download</span>
      </Link>


      {/* =========================================
          6. COMPANIES SECTION
         ========================================= */}

      {/* Rectangle 49 (Background strip?) - 1440x725 at y=2945 */}
      <div className="absolute w-[1440px] h-[725px] left-[0px] top-[2945px] bg-[#18181C]"></div>

      <h2 className="absolute w-[567px] h-[128px] left-[437px] top-[3057px] font-semibold text-[48px] leading-[64px] text-center text-white z-10">
        Companies we Worked<br />
        With in Since 2015
      </h2>

      {/* Corporate Logos (Rectangles 11, 31-35) */}
      {[
        { left: 194, logo: "/images/smile_logo.svg", alt: "Smile", width: "w-[101.07px] h-[37.76px]", position: "absolute", top: 3282 },
        { left: 389, logo: "/images/urban_logo.svg", alt: "Urban", width: "w-[95.42px] h-[25.15px]", position: "absolute", top: 3288 },
        { left: 572, logo: "/images/natural_logo.svg", alt: "natural", width: "w-[105.46px] h-[21.02px]", position: "absolute", top: 3290 },
        { left: 769, logo: "/images/wave_logo.svg", alt: "WAVE", width: "w-[85.18px] h-[19.22px]", position: "absolute", top: 3291.99 },
        { left: 970, logo: '/images/happy_logo.svg', alt: "HAPPY", width: "w-[69.87px] h-[25.46px]", position: "absolute", top: 3289 },
        { left: 1159, logo: '/images/alisa_logo.svg', alt: "Alisa", width: "w-[70px] h-[23.93px]", position: "absolute", top: 3288.71 }
      ].map((company, i) => (
        <div key={i} className="absolute w-[160px] h-[92px] top-[3255px] bg-[#000000] rounded-[10px] flex items-center justify-center z-10 border border-[#222228]" style={{ left: `${company.left}px` }}>
          {company.logo ? (
            <img src={company.logo} alt={company.alt} className={company.width} />
          ) : (
            <span className="text-[#333] text-lg font-bold">{company.alt}</span>
          )}
        </div>
      ))}


      {/* =========================================
          7. CTA BANNER
         ========================================= */}

      {/* Rectangle 36 */}
      <div className="absolute w-[1110px] h-[425px] left-[165px] top-[3441px] bg-[linear-gradient(135.66deg,#FF9898_14.73%,#8054FF_86.33%)] rounded-[40px] z-10 overflow-hidden">
        {/* Decorative Frame Image */}
        <img src="/images/Frame.png" alt="" className="absolute w-[554px] h-[369px]" style={{ left: '556px', top: '37px' }} />

        {/* Subtext */}
        <p className="absolute w-[182px] h-[32px] left-[98px] top-[99px] font-normal text-[20px] leading-[32px] text-white z-10">Love our Our Tool?</p>
        {/* Heading */}
        <h2 className="absolute w-[499px] h-[130px] left-[97px] top-[143px] font-semibold text-[48px] leading-[65px] text-white z-10">
          Feel Free to Join our 15 Days Free Trial
        </h2>
        {/* Black Button Frame 3 */}
        <Link href="/pricing" className="absolute flex flex-row items-center gap-[10px] w-[198px] h-[44px] left-[97px] top-[309px] px-[28px] py-[12px] bg-[#000000] rounded-[5px] hover:bg-gray-900 z-10">
          <span className="w-[142px] font-normal text-[14px] text-white text-center">Download Template</span>
        </Link>
      </div>


      {/* =========================================
          8. CONTACT SECTION
         ========================================= */}

      {/* Wireframe Globe Group 133 */}
      <img src="/images/globe.png" alt="" className="absolute w-[541.98px] h-[541.85px] left-[130px] top-[3961px] opacity-100" />

      {/* Right Side Form */}
      <h2 className="absolute w-[304px] h-[80px] left-[735px] top-[3961px] font-semibold text-[48px] leading-[80px] text-white text-left">
        Get In Touch
      </h2>
      <p className="absolute w-[503px] h-[66px] left-[735px] top-[4041px] font-normal text-[18px] leading-[28px] text-[#9E9E9E] text-left">
        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
      </p>

      {/* Frame 4 - Email */}
      <input
        type="email"
        placeholder="Your Email"
        className="absolute w-[408px] h-[44px] left-[735px] top-[4135px] bg-[#18181C] rounded-[5px] px-4 text-white outline-none border border-transparent focus:border-[#404047] transition-all"
      />
      {/* Frame 5 - Name */}
      <input
        type="text"
        placeholder="Name"
        className="absolute w-[408px] h-[44px] left-[735px] top-[4197px] bg-[#18181C] rounded-[5px] px-4 text-white outline-none border border-transparent focus:border-[#404047] transition-all"
      />
      {/* Frame 6 - Message */}
      <textarea
        placeholder="Message"
        className="absolute w-[408px] h-[156px] left-[735px] top-[4259px] bg-[#18181C] rounded-[5px] p-4 text-white outline-none border border-transparent focus:border-[#404047] transition-all resize-none"
      />

      {/* Frame 7 - Button */}
      <button className="absolute flex flex-row items-center gap-[10px] w-[143px] h-[44px] left-[735px] top-[4433px] px-[28px] py-[12px] bg-[linear-gradient(92.51deg,#FF9898_0.48%,#8054FF_100%)] rounded-[5px] hover:opacity-90">
        <span className="w-[87px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-white flex-none whitespace-nowrap">Get in Touch</span>
      </button>


      {/* =========================================
          9. FOOTER
         ========================================= */}

      {/* Group 131 - Footer Container */}
      <div className="absolute w-[1440px] h-[360px] left-[0px] top-[4582px] bg-[#18181C]">

        {/* TOP SECTION - 1440 × 268 */}
        <div className="absolute w-[1440px] h-[268px] left-0 top-0 bg-[#18181C]">
          {/* Logo */}
          <svg className="absolute left-[165px] top-[50px]" width="56" height="45.09" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.8429 27.2371C48.7944 23.3105 42.2011 23.4155 38.1466 27.4681L35.1636 30.4497L32.2465 27.5341L37.7895 21.9936C42.5522 17.2332 42.5522 9.48498 37.7895 4.72449L36.6401 3.57562C34.3293 1.26886 31.2622 0 28 0C24.7378 0 21.6677 1.26886 19.3629 3.57562L18.2135 4.72449C13.4508 9.48498 13.4508 17.2332 18.2135 21.9936L23.7565 27.5341L20.8394 30.4497L17.7363 27.3481C15.7106 25.3233 13.0517 24.3124 10.3897 24.3124C7.72776 24.3124 5.06881 25.3233 3.04309 27.3481C1.08039 29.3129 0 31.9196 0 34.6943C0 37.469 1.08039 40.0757 3.04309 42.0375C5.00279 43.9963 7.61072 45.0732 10.3897 45.0732C13.1687 45.0732 15.7766 43.9963 17.7363 42.0375L20.8394 38.9358L24.0176 42.1185C25.08 43.1804 26.4905 43.7683 27.994 43.7683C29.4975 43.7683 30.911 43.1834 31.9734 42.1215L35.1636 38.9328L38.1466 41.9145C40.1513 43.9183 42.8223 45.0222 45.6643 45.0222C48.5063 45.0222 50.9282 43.9993 52.8429 42.1455C54.8776 40.1717 56 37.523 56 34.6913C56 31.8596 54.8776 29.2109 52.8429 27.2371ZM13.4928 37.793C12.6645 38.6209 11.5631 39.0738 10.3897 39.0738C9.21629 39.0738 8.1149 38.6179 7.2866 37.793C6.45831 36.968 6.00214 35.8642 6.00214 34.6913C6.00214 33.5184 6.45831 32.4175 7.2866 31.5896C8.1149 30.7617 9.21629 30.3058 10.3897 30.3058C11.5631 30.3058 12.6645 30.7617 13.4928 31.5896L16.5959 34.6913L13.4928 37.793ZM27.997 37.613L26.9286 36.5451L25.08 34.6943L27.967 31.8056L28.2071 31.9886L30.911 34.6913L27.991 37.61L27.997 37.613ZM30.0317 21.2647L28.003 23.2925L22.46 17.7521C20.0382 15.3314 20.0382 11.3898 22.46 8.96604L23.6094 7.81716C24.7829 6.64429 26.3434 5.99636 28.003 5.99636C29.6626 5.99636 31.2232 6.64129 32.3966 7.81716L33.546 8.96604C35.9678 11.3868 35.9678 15.3284 33.546 17.7521L30.0317 21.2647ZM48.6654 37.841C47.8401 38.6419 46.7597 39.0378 45.6643 39.0378C44.4879 39.0378 43.2995 38.5819 42.3931 37.676L39.4101 34.6943L42.3931 31.7126C44.1428 29.9638 46.9578 29.8888 48.6654 31.5446C49.5267 32.3785 50.0009 33.4974 50.0009 34.6943C50.0009 35.8912 49.5267 37.01 48.6654 37.8439V37.841Z" fill="white" />
          </svg>


          {/* Description Text */}
          <p className="absolute left-[165px] top-[125px] w-[303px] h-[83px] font-poppins font-normal text-[14px] leading-[28px] text-[#9E9E9E]">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>

          {/* Sections Header */}
          <div className="absolute left-[1189px] top-[50px] w-[70px] h-[32px] font-semibold text-[16px] text-white flex items-center">Sections</div>

          {/* Column 1 */}
          <div className="absolute left-[1189px] top-[83px] w-[120px] h-[154px] font-normal text-[14px] text-[#9E9E9E] leading-[38px] flex flex-col items-start whitespace-nowrap">
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/coming-soon" className="hover:text-white transition-colors">Coming soon</Link>
          </div>
        </div>

        {/* BOTTOM SECTION - 1440 × 92 */}
        <div className="absolute w-[1440px] h-[92px] left-0 top-[268px] bg-[#000000] border-t border-[#222228]">
          {/* Copyright Text */}
          <p className="absolute left-[145px] top-[32px] w-[230px] h-[28px] font-poppins font-normal text-[14px] leading-[28px] text-[#9E9E9E] whitespace-nowrap">
            All Rights Reservd Inkyy.com 2022
          </p>

          {/* Social Icons */}
          {/* Twitter */}
          <div className="absolute left-[1122px] top-[26px] w-[40px] h-[40px] bg-[#18181C] rounded-[16px] border border-[#333] flex items-center justify-center cursor-pointer hover:border-[#555] transition-colors">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2888 1.82075C17.6945 2.07671 17.0698 2.25495 16.43 2.35106C16.7291 2.29974 17.1693 1.76087 17.3444 1.54276C17.6106 1.21375 17.8134 0.838164 17.9427 0.435076C17.9427 0.405138 17.9726 0.362371 17.9427 0.340987C17.9276 0.332752 17.9107 0.328436 17.8935 0.328436C17.8764 0.328436 17.8595 0.332752 17.8444 0.340987C17.1497 0.717522 16.4103 1.0049 15.6438 1.19634C15.6171 1.20451 15.5887 1.20524 15.5616 1.19846C15.5345 1.19168 15.5097 1.17764 15.49 1.15785C15.4303 1.08674 15.3661 1.01959 15.2977 0.95684C14.9851 0.676477 14.6304 0.447011 14.2466 0.276835C13.7285 0.0640997 13.1689 -0.0280315 12.61 0.00739964C12.0677 0.0416769 11.5383 0.187253 11.0547 0.435076C10.5784 0.696352 10.1598 1.05131 9.82404 1.4786C9.47087 1.91841 9.2159 2.4288 9.07627 2.97547C8.96113 3.49546 8.94807 4.03289 9.03781 4.55787C9.03781 4.64768 9.03781 4.66051 8.9609 4.64768C5.91428 4.19862 3.4146 3.1166 1.37212 0.794323C1.28239 0.691681 1.23539 0.691681 1.16275 0.794323C0.273971 2.14578 0.70554 4.28416 1.81651 5.34052C1.96606 5.48165 2.11989 5.61851 2.28226 5.74681C1.77289 5.71062 1.27596 5.57246 0.82091 5.34052C0.735451 5.28492 0.688448 5.31486 0.684175 5.4175C0.672062 5.5598 0.672062 5.70287 0.684175 5.84518C0.773333 6.52715 1.04186 7.17318 1.46228 7.71721C1.88271 8.26125 2.43995 8.68376 3.07703 8.94155C3.23234 9.00813 3.39416 9.0583 3.55988 9.09124C3.08832 9.18416 2.60469 9.19861 2.12844 9.134C2.02588 9.11262 1.98743 9.16822 2.02588 9.26658C2.65401 10.9773 4.01708 11.4991 5.01696 11.7899C5.15369 11.8113 5.29043 11.8113 5.44425 11.8455C5.44425 11.8455 5.44425 11.8455 5.41862 11.8711C5.12378 12.41 3.93163 12.7735 3.38469 12.9617C2.38638 13.3206 1.32201 13.4578 0.265425 13.3637C0.0987797 13.3381 0.0603231 13.3423 0.0175935 13.3637C-0.0251362 13.3851 0.0175934 13.4321 0.064596 13.4749C0.278244 13.616 0.491892 13.7401 0.714086 13.8598C1.37556 14.2209 2.07487 14.5078 2.79929 14.7152C6.55095 15.7501 10.7726 14.9889 13.5885 12.1876C15.8019 9.98936 16.5796 6.95713 16.5796 3.92063C16.5796 3.80516 16.7206 3.73673 16.8018 3.67686C17.3618 3.24016 17.8554 2.72442 18.2674 2.14578C18.3388 2.05952 18.3753 1.9497 18.37 1.83785C18.37 1.7737 18.37 1.78653 18.2888 1.82075Z" fill="white" />
            </svg>
          </div>

          {/* LinkedIn */}
          <div className="absolute left-[1178px] top-[26px] w-[40px] h-[40px] bg-[#18181C] rounded-[16px] border border-[#333] flex items-center justify-center cursor-pointer hover:border-[#555] transition-colors">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.41881 14.4083V4.68646H0.190299V14.4083H3.41914H3.41881ZM1.80523 3.35934C2.93084 3.35934 3.63161 2.61282 3.63161 1.67988C3.61054 0.725685 2.93084 0 1.82663 0C0.721669 0 0 0.725685 0 1.6798C0 2.61274 0.700516 3.35926 1.78407 3.35926H1.80497L1.80523 3.35934ZM5.20583 14.4083H8.43409V8.97975C8.43409 8.68958 8.45516 8.39865 8.54045 8.19139C8.77373 7.61063 9.30493 7.00944 10.197 7.00944C11.3649 7.00944 11.8324 7.90088 11.8324 9.20792V14.4083H15.0606V8.83407C15.0606 5.84808 13.4681 4.45854 11.344 4.45854C9.6026 4.45854 8.83778 5.43273 8.41285 6.09624H8.43434V4.6868H5.206C5.24814 5.59882 5.20575 14.4086 5.20575 14.4086L5.20583 14.4083Z" fill="white" />
            </svg>
          </div>

          {/* Discord */}
          <div className="absolute left-[1234px] top-[26px] w-[40px] h-[40px] bg-[#18181C] rounded-[16px] border border-[#333] flex items-center justify-center cursor-pointer hover:border-[#555] transition-colors">
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9199 1.21691C18.0405 4.35693 19.0878 7.89878 18.6963 11.9763C18.6947 11.9935 18.6857 12.0094 18.6716 12.0198C17.0657 13.2073 15.5098 13.928 13.9757 14.406C13.9638 14.4096 13.951 14.4094 13.9392 14.4054C13.9273 14.4014 13.9171 14.3937 13.9098 14.3835C13.5554 13.8869 13.2333 13.3633 12.9512 12.8135C12.935 12.7811 12.9498 12.7421 12.9831 12.7294C13.4946 12.5353 13.9809 12.3027 14.4487 12.0273C14.4855 12.0056 14.4879 11.9524 14.4538 11.9269C14.3546 11.8526 14.2562 11.7746 14.1621 11.6966C14.1445 11.6822 14.1208 11.6794 14.1008 11.6891C11.0639 13.1014 7.73704 13.1014 4.66416 11.6891C4.64421 11.6801 4.62051 11.6832 4.60337 11.6973C4.50949 11.7753 4.41091 11.8526 4.31256 11.9269C4.27853 11.9524 4.28134 12.0056 4.31843 12.0273C4.78621 12.2975 5.27254 12.5353 5.78328 12.7303C5.81637 12.7431 5.8321 12.7811 5.81567 12.8135C5.53965 13.364 5.21762 13.8876 4.85663 14.3842C4.8409 14.4043 4.81508 14.4135 4.79067 14.406C3.26386 13.928 1.70794 13.2073 0.102031 12.0198C0.0886521 12.0094 0.0790288 11.9928 0.0776205 11.9756C-0.249571 8.44859 0.417251 4.87743 2.85147 1.2162C2.85734 1.20651 2.86626 1.19895 2.87658 1.19446C4.07433 0.640865 5.35751 0.23359 6.69866 0.000996446C6.72307 -0.00278556 6.74748 0.00856047 6.76016 0.030307C6.92587 0.325777 7.11528 0.704687 7.24343 1.01434C8.65711 0.796873 10.0929 0.796873 11.5361 1.01434C11.6643 0.711305 11.8471 0.325777 12.0121 0.030307C12.018 0.0195188 12.0271 0.0108758 12.0381 0.0056121C12.0492 0.000348351 12.0616 -0.00126708 12.0736 0.000996446C13.4155 0.234299 14.6986 0.641575 15.8955 1.19446C15.906 1.19895 15.9147 1.20651 15.9199 1.21691ZM7.96213 7.92289C7.97691 6.88024 7.22207 6.01747 6.27453 6.01747C5.33474 6.01747 4.58718 6.87267 4.58718 7.92289C4.58718 8.97287 5.34953 9.82808 6.27453 9.82808C7.21456 9.82808 7.96213 8.97287 7.96213 7.92289ZM14.2013 7.92289C14.2161 6.88024 13.4612 6.01747 12.5139 6.01747C11.5739 6.01747 10.8263 6.87267 10.8263 7.92289C10.8263 8.97287 11.5887 9.82808 12.5139 9.82808C13.4612 9.82808 14.2013 8.97287 14.2013 7.92289Z" fill="white" />
            </svg>
          </div>
        </div>

      </div>

    </main>
  );
}
