import Image from "next/image";
import { Search, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#003BE2] overflow-hidden font-sans">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Wrapper - fixed height matching Figma 1024px */}
      <div className="relative w-full min-h-[1024px] mx-auto overflow-hidden">
        
        {/* Text Content */}
        <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[850px] flex flex-col items-center z-30 pointer-events-none">
          <h1 className="font-poppins font-semibold text-[64px] text-white leading-[1.2] tracking-[-0.01em] text-center pointer-events-auto w-full">
            Get Access to Hundreds<br/>Courses Available
          </h1>
          <p className="text-white/80 max-w-2xl text-[16px] mb-10 font-light text-center pointer-events-auto mt-4">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="absolute top-[430px] left-1/2 -translate-x-1/2 flex items-center bg-white rounded-full p-1.5 pl-5 w-[600px] shadow-lg z-40">
          <Search className="w-[18px] h-[18px] text-gray-400 stroke-[2]" />
          <input 
            type="text" 
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-gray-700 placeholder:text-gray-400 text-[15px]"
          />
          <button className="bg-[#CBFC01] text-gray-900 font-medium px-8 py-3 rounded-full hover:bg-[#b5e300] transition-colors text-[15px]">
            Search
          </button>
        </div>

        {/* Background Ellipse 7 (Figma spec: 1149x1149, top: 582, left: 145) */}
        <div 
          className="absolute rounded-full z-0 pointer-events-none left-1/2 -translate-x-1/2"
          style={{
            width: '1149px',
            height: '1149px',
            backgroundColor: '#CBFC01',
            top: '582px',
          }}
        ></div>

        {/* Main Image Container */}
        <div className="absolute top-[509px] left-1/2 -translate-x-1/2 ml-[50px] z-10 w-[722px] h-[515px] pointer-events-none flex justify-center items-center">
          <img 
            src="/images/Image.png" 
            alt="Student" 
            className="max-w-full max-h-full object-contain object-bottom"
          />
        </div>

        {/* Floating UI/UX Design Card */}
        <div className="absolute top-[620px] left-1/2 ml-[-320px] bg-white p-4 rounded-[16px] shadow-2xl z-20 flex flex-col items-start min-w-[200px] animate-[bounce_4s_ease-in-out_infinite]">
          <h3 className="font-bold text-gray-900 text-[14px] mb-1">UI/UX Design</h3>
          <p className="text-[11px] text-gray-400 font-medium tracking-wide">200 Courses &bull; 1000+ Students</p>
        </div>

        {/* Floating Progress Card */}
        <div className="absolute top-[630px] left-1/2 ml-[130px] bg-white p-5 rounded-[20px] shadow-2xl z-20 min-w-[220px] animate-[bounce_5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
          <p className="text-[13px] text-gray-800 font-semibold mb-1.5 text-left">Learning Progress</p>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-[36px] font-bold text-gray-900 leading-none tracking-tight">55%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div className="bg-[#CBFC01] h-2.5 rounded-full w-[55%]"></div>
          </div>
        </div>

        {/* Floating Happy Students Card */}
        <div className="absolute top-[820px] left-1/2 ml-[-390px] bg-white p-4 rounded-[16px] shadow-2xl z-20 min-w-[200px] animate-[bounce_6s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
          <p className="text-[14px] font-bold text-gray-900 mb-1 text-left">Happy Students</p>
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-[13px] font-bold text-gray-900">4.5</span>
            <span className="text-[12px] text-gray-400 font-medium">(240)</span>
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="flex items-center -space-x-2.5">
             {[1,2,3,4,5].map((i) => (
               <div key={i} className="w-8 h-8 rounded-full border-[2px] border-white bg-gray-200 overflow-hidden relative z-0 shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" className="w-full h-full object-cover" />
               </div>
             ))}
             <div className="w-8 h-8 rounded-full border-[2px] border-white bg-[#CBFC01] flex items-center justify-center text-[10px] font-bold text-black z-10 relative shadow-sm">
               2K+
             </div>
          </div>
        </div>

        {/* Floating 3D Shapes */}
        
        {/* Top Left Yellow Spring */}
        <div className="absolute top-[221px] left-[-60px] z-0">
           <img src="/images/Mask Group.png" alt="Shape" className="w-[385px] h-[385px] object-contain" />
        </div>

        {/* Middle Left White Spring */}
        <div className="absolute top-[490px] left-1/2 ml-[-500px] z-0">
           <img src="/images/Frame.png" alt="Shape" className="w-[177px] h-auto object-contain transform -rotate-12 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        </div>
        
        {/* Bottom Left White Donut */}
        <div className="absolute top-[720px] left-[-20px] z-0">
           <img src="/images/Cone.png" alt="Shape" className="w-[317px] h-auto object-contain transform -rotate-[20deg] animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }} />
        </div>

        {/* Top Right Yellow Cylinder */}
        <div className="absolute top-[200px] right-[-5px] z-0">
           <img src="/images/Cone (2).png" alt="Shape" className="w-[200px] h-auto object-contain transform rotate-[-2deg]" />
        </div>

        {/* Middle Right White Pyramid */}
        <div className="absolute top-[470px] left-1/2 ml-[380px] z-0">
           <img src="/images/triangle.png" alt="Shape" className="w-[190px] h-auto object-contain transform rotate-[-4deg] animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }} />
        </div>

        {/* Bottom Right White Spring */}
        <div className="absolute top-[680px] right-[20px] z-0">
           <img src="/images/Frame (1).png" alt="Shape" className="w-[266px] h-auto object-contain transform -rotate-6 animate-pulse" style={{ animationDelay: '3s', animationDuration: '5.5s' }} />
        </div>

      </div>
    </div>
  );
}
