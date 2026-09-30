import Image from "next/image";
import { Search, Star, PenTool, Code, Laptop, Building2, Megaphone, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#003BE2] overflow-hidden font-sans">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none z-0"></div>

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Wrapper - fixed height matching Figma 1024px */}
      <div className="relative w-full min-h-[1024px] mx-auto overflow-hidden">

        {/* Text Content */}
        <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[850px] flex flex-col items-center z-30 pointer-events-none">
          <h1 className="font-poppins font-semibold text-[64px] text-white leading-[1.2] tracking-[-0.01em] text-center pointer-events-auto w-full">
            Get Access to Hundreds<br />Courses Available
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
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-[2px] border-white bg-gray-200 overflow-hidden relative z-0 shadow-sm">
                <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" className="w-full h-full object-cover" />
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

      {/* Frame 2 Section */}
      <div className="relative w-full z-10 bg-[#F4F4F4] flex justify-center items-center h-[202px]">
        <img src="/images/Frame 2.png" alt="Partners" className="w-full h-full object-cover object-center max-w-[1440px]" />
      </div>

      {/* Discover Section */}
      <div className="relative w-full bg-white py-24 flex flex-col items-center z-10">
        {/* Title */}
        <h2 className="font-poppins font-semibold text-[44px] text-gray-900 leading-[1.2] tracking-[-0.01em] text-center max-w-[588px] mb-6">
          Discover Your Passion,<br />Build Your Skills
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-[18px] text-gray-500 leading-[1.6] text-center max-w-[917px] mb-12 px-4">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Categories */}
        <div className="flex flex-col items-center gap-4 w-full px-6">
          {/* Row 1 */}
          <div className="flex justify-center flex-wrap gap-4">
            <span className="px-6 py-2.5 bg-[#CBFC01] rounded-full text-gray-900 font-medium text-[15px] cursor-pointer">Featured</span>
            {['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((cat) => (
              <span key={cat} className="px-6 py-2.5 bg-[#F4F4F5] rounded-full text-gray-600 font-medium text-[15px] hover:bg-gray-200 transition-colors cursor-pointer">{cat}</span>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex justify-center flex-wrap gap-4">
            {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((cat) => (
              <span key={cat} className="px-6 py-2.5 bg-[#F4F4F5] rounded-full text-gray-600 font-medium text-[15px] hover:bg-gray-200 transition-colors cursor-pointer">{cat}</span>
            ))}
          </div>
          {/* Row 3 */}
          <div className="flex justify-center flex-wrap gap-4 items-center">
            {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((cat) => (
              <span key={cat} className="px-6 py-2.5 bg-[#F4F4F5] rounded-full text-gray-600 font-medium text-[15px] hover:bg-gray-200 transition-colors cursor-pointer">{cat}</span>
            ))}
            <span className="px-4 py-2.5 text-[#003BE2] font-medium text-[15px] cursor-pointer hover:underline">+ More</span>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="max-w-[1200px] w-full px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: 'Learn Figma from Basic', image: 'Card_pic_1.png' },
            { id: 2, title: 'Build Digital Asset', image: 'Card_pic_2.png' },
            { id: 3, title: 'the Power of Big Data', image: 'Card_pic_3.png' },
            { id: 4, title: 'Balancing Productivity an...', image: 'Card_pic_4.png' },
            { id: 5, title: 'Mastering Money Manage...', image: 'Card_pic_5.png' },
            { id: 6, title: 'From Idea to Startup Succ...', image: 'Card_pic_6.png' },
          ].map((course) => (
            <div key={course.id} className="group w-full max-w-[373px] mx-auto h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              {/* Thumbnail */}
              <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden shrink-0">
                <img src={`/images/${course.image}`} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              {/* Title & Rating */}
              <div className="flex justify-between items-start mt-4 gap-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-[17px] leading-snug">{course.title}</h3>
                  <p className="text-[12px] text-gray-400 mt-0.5 font-medium">by <span className="text-[#003BE2] font-semibold">purepearl studio</span></p>
                </div>
                <div className="flex items-center gap-1 shrink-0 pt-0.5">
                  <span className="font-semibold text-[13px] text-gray-400">4.5</span>
                  <Star className="w-3.5 h-3.5 text-gray-300 fill-gray-300" />
                </div>
              </div>

              {/* Level & Avatars */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M12 20V10"></path>
                    <path d="M18 20V4"></path>
                    <path d="M6 20v-4"></path>
                  </svg>
                  <span className="text-[12px] font-semibold text-gray-600 tracking-wide">Beginner</span>
                </div>

                <div className="flex items-center -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="avatar" className="w-[26px] h-[26px] rounded-full border-[1.5px] border-white object-cover" />
                  ))}
                  <div className="w-[26px] h-[26px] rounded-full border-[1.5px] border-white bg-[#CBFC01] flex items-center justify-center text-[10px] font-bold text-gray-900 relative z-10">
                    26+
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-auto flex items-end gap-0.5 pb-1">
                <span className="text-[22px] font-bold text-[#003BE2] leading-none">$25</span>
                <span className="text-[12px] text-gray-400 font-semibold pb-[2px]">/lifetime</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Learning Paths Section */}
      <div className="relative w-full bg-white py-24 flex flex-col items-center z-10 border-t border-gray-100">
        {/* Title */}
        <h2 className="font-poppins font-semibold text-[36px] text-gray-900 leading-[1.2] tracking-[-0.01em] text-center max-w-[792px] mb-4">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-[18px] text-gray-500 leading-[1.6] text-center max-w-[917px] mb-16 px-4">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* Categories Flex Row */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] w-full px-6">
          {[
            { title: 'Design', icon: 'design.png', isFullFrame: false },
            { title: 'Development', icon: 'development.png', isFullFrame: false },
            { title: 'IT & Software', icon: 'IT & Software.png', isFullFrame: true },
            { title: 'Business', icon: 'business.png', isFullFrame: true },
            { title: 'Marketing', icon: 'marketing.png', isFullFrame: false },
            { title: 'Photography', icon: 'photography.png', isFullFrame: false },
          ].map((cat, idx) => (
            <div key={idx} className="w-[167px] h-[167px] flex flex-col justify-center items-center gap-5 bg-white rounded-[24px] border border-[#CED0D3] hover:-translate-y-2 hover:shadow-xl hover:border-[#D4FB20] transition-all duration-300 cursor-pointer group">
              <div className="w-[60px] h-[60px] bg-[#D4FB20] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 overflow-hidden">
                <img
                  src={`/images/${cat.icon}`}
                  alt={cat.title}
                  className={`${cat.isFullFrame ? 'w-[60px] h-[60px]' : 'w-[28px] h-[28px]'} object-contain`}
                />
              </div>
              <span className="font-sans font-medium text-[16px] text-gray-900 text-center">{cat.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Growth Section */}
      <div className="relative w-full bg-[#f4f7f9] py-32 flex flex-col items-center gap-y-32 overflow-hidden border-t border-gray-100">

        <div className="max-w-[1250px] w-full px-6 flex flex-col lg:flex-row items-center gap-10 z-10 relative">

          {/* Background Gradients (Local to this section) */}
          <div className="absolute top-[-200px] left-[150px] w-[450px] h-[250px] bg-[#CBFC01] opacity-[55%] blur-[90px] rounded-[50%] pointer-events-none z-0"></div>
          <div className="absolute bottom-[-150px] left-[-50px] w-[600px] h-[600px] bg-[#003BE2] opacity-[0.10] blur-[130px] rounded-full pointer-events-none z-0"></div>

          {/* Left Column (Text & Stats) */}
          <div className="flex-1 flex flex-col items-start max-w-[620px] pt-4 relative z-10">
            <h2 className="font-poppins font-bold text-[46px] xl:text-[52px] text-[#1D2125] leading-[1.15] tracking-[-0.02em] mb-7 whitespace-nowrap">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="font-sans text-[17px] text-[#5C6574] leading-[1.7] mb-14">
              Explore our curated selection of courses tailored to enhance<br />
              your capabilities and accelerate your career journey.<br />
              Whether you are looking to sharpen specific skills, gain<br />
              industry expertise, or embark on a new career path entirely,<br />
              we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-[70px] mb-4">
              <div className="flex flex-col">
                <span className="font-semibold text-[38px] text-[#003BE2] leading-none mb-2.5 tracking-normal">12K</span>
                <span className="text-[15px] text-[#5C6574] font-normal">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[38px] text-[#003BE2] leading-none mb-2.5 tracking-normal">70+</span>
                <span className="text-[15px] text-[#5C6574] font-normal">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[38px] text-[#003BE2] leading-none mb-2.5 tracking-normal">16</span>
                <span className="text-[15px] text-[#5C6574] font-normal">Creators</span>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="flex-1 relative w-full flex justify-end items-center mt-10 lg:mt-0">
            <img
              src="/images/overleap.png"
              alt="Professional Growth"
              className="w-full max-w-[750px] h-auto object-contain drop-shadow-2xl scale-[1.15] origin-right translate-x-16 lg:translate-x-32"
            />
          </div>
        </div>

        {/* Create & Manage Courses Section */}

        <div className="max-w-[1250px] w-full px-2 flex flex-col lg:flex-row items-center gap-20 z-10 relative mt-10">

          {/* Background Gradients (Local to this section) */}
          <div className="absolute top-[30%] left-[-150px] w-[450px] h-[450px] bg-[#CBFC01] opacity-[0.6] blur-[100px] rounded-full pointer-events-none z-0"></div>
          <div className="absolute top-[40%] right-[-50px] w-[450px] h-[650px] bg-[#003BE2] opacity-[0.12] blur-[110px] rounded-[50%] pointer-events-none z-0"></div>

          {/* Left Column (Image) */}
          <div className="flex-1 relative w-full flex justify-start items-center z-10">
            <img src="/images/girl_c.png" alt="Manage Courses" className="w-full max-w-[587px] h-auto object-contain drop-shadow-2xl relative z-10" />
          </div>

          {/* Right Column (Text & Bullets) */}
          <div className="flex-1 flex flex-col items-start max-w-[574px]">
            <h2 className="font-poppins font-bold text-[48px] xl:text-[52px] text-[#1D2125] leading-[1.15] tracking-[-0.01em] mb-7">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="font-sans text-[17.5px] text-[#5C6574] leading-[28px] mb-10">
              <strong className="font-semibold text-[#1D2125]">ByteSpace</strong> supports individuals or entities in the creation, publication,<br />
              and administration of educational courses.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#0F52FF] flex items-center justify-center shrink-0 shadow-sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[17.5px] text-[#2B3036] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Creator Section */}
      <div className="relative w-full bg-[#003BE2] py-28 md:py-36 flex flex-col items-center overflow-hidden z-10 min-h-[500px]">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none z-0"></div>

        {/* Floating 3D Shapes (Figma 1440px coordinate system) */}
        <div className="absolute inset-0 max-w-[1440px] w-full mx-auto pointer-events-none z-0">
          <div 
            className="absolute" 
            style={{ top: '-66px', left: '0px', width: '300px', height: '385px' }}
          >
            <img src="/images/spring_10.png" alt="Yellow Spring" className="w-full h-full object-contain" />
          </div>
          
          {/* Bottom Left Half Circle */}
          <div className="absolute bottom-[1px] left-0">
            <img src="/images/half_circle.png" alt="Half Circle" className="w-[280px] h-auto object-contain" />
          </div>

          {/* Middle Left White Triangle */}
          <div className="absolute top-[400px] left-[0px]">
            <img src="/images/white_triangle.png" alt="White Triangle" className="w-[120px] h-auto object-contain animate-pulse" style={{ animationDuration: '4s' }} />
          </div>

          {/* Inner Left White Spring */}
          <div className="absolute top-[60px] left-[210px]">
            <img src="/images/white_spring.png" alt="White Spring" className="w-[180px] h-auto object-contain animate-pulse" style={{ animationDuration: '5s' }} />
          </div>

          {/* Middle Right Rectangle */}
          <div className="absolute top-[50px] right-[-2px] rotate-[-1deg]">
            <img src="/images/rec.png" alt="Rectangle" className="w-[200px] h-auto object-contain animate-pulse" style={{ animationDuration: '6s' }} />
          </div>

          {/* Inner Right Yellow Triangle */}
          <div className="absolute top-[40px] right-[150px]">
            <img src="/images/yellow_triangle.png" alt="Yellow Triangle" className="w-[180px] h-auto object-contain animate-pulse" style={{ animationDuration: '4s' }} />
          </div>

          {/* Bottom Right Half Spring */}
          <div className="absolute bottom-[0px] right-[50px]">
            <img src="/images/half_spring.png" alt="Half Spring" className="w-[300px] h-auto object-contain animate-pulse" style={{ animationDuration: '5s' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-6 mt-16">
          <h2 className="font-poppins font-semibold text-[44px] text-white leading-[1.2] tracking-[-0.01em] text-center max-w-[710px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="font-sans font-normal text-[18px] text-white leading-[1.6] tracking-normal text-center max-w-[1100px] mt-6">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a<br className="hidden lg:block" />
            part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your<br className="hidden lg:block" />
            expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button className="group relative mt-10 bg-[#CBFC01] text-[#1D2125] font-medium text-[16px] px-10 py-4 rounded-full overflow-hidden shadow-sm transition-all duration-300">
            <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            <span className="relative z-10 transition-colors duration-300">Join as Creator</span>
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full bg-[#FAFAFA] py-28 flex flex-col items-center overflow-hidden z-10 min-h-[784px] justify-center border-t border-gray-100">
        {/* Background Gradients */}
        <div className="absolute inset-0 max-w-[1440px] w-full mx-auto pointer-events-none z-0">
          {/* Ellipse 11 (Top Right Green) */}
          <div
            className="absolute rounded-full opacity-70"
            style={{
              width: '1137px',
              height: '1137px',
              top: '-241px',
              left: '842px',
              background: 'radial-gradient(50% 50% at 50% 50%, #CBFC01 0%, rgba(203, 252, 1, 0.23) 45%, rgba(203, 252, 1, 0.06) 75%, rgba(203, 252, 1, 0) 100%)'
            }}
          ></div>
          
          {/* Ellipse 12 (Middle Green) */}
          <div
            className="absolute rounded-full opacity-70"
            style={{
              width: '672px',
              height: '672px',
              top: '-138px',
              left: '395px',
              background: 'radial-gradient(50% 50% at 50% 50%, #CBFC01 0%, rgba(203, 252, 1, 0.23) 45%, rgba(203, 252, 1, 0.06) 75%, rgba(203, 252, 1, 0) 100%)'
            }}
          ></div>

          {/* Ellipse 8 (Left Blue) */}
          <div
            className="absolute rounded-full opacity-70"
            style={{
              width: '1137px',
              height: '1137px',
              top: '149px',
              left: '-442px',
              background: 'radial-gradient(50% 50% at 50% 50%, #003BE2 0%, rgba(0, 59, 226, 0.23) 45%, rgba(0, 59, 226, 0.06) 75%, rgba(0, 59, 226, 0) 100%)'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1250px] w-full px-6 flex flex-col gap-14 mt-4">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 w-full">
            <h2 className="font-poppins font-semibold text-[44px] text-[#1D2125] leading-[1.2] tracking-[-0.01em] max-w-[577px]">
              Discover What Our Community Is Saying
            </h2>
            <p className="font-sans font-normal text-[18px] text-[#5C6574] leading-[1.6] max-w-[580px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-4">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-start h-full hover:-translate-y-1 transition-transform duration-300 border border-gray-100 cursor-pointer">
              <img src="/images/Sarah M..png" alt="Sarah M." className="w-16 h-16 rounded-full object-cover mb-5 border-[3px] border-white shadow-sm" />
              <h4 className="font-bold text-[#1D2125] text-[18px]">Sarah M.</h4>
              <span className="text-[#003BE2] text-[14.5px] font-medium mb-5">Enthusiastic Learner</span>
              <p className="font-sans font-normal text-[#5C6574] text-[18px] leading-[1.6]">
                "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-start h-full hover:-translate-y-1 transition-transform duration-300 border border-gray-100 cursor-pointer">
              <img src="/images/James L..png" alt="James L." className="w-16 h-16 rounded-full object-cover mb-5 border-[3px] border-white shadow-sm" />
              <h4 className="font-bold text-[#1D2125] text-[18px]">James L.</h4>
              <span className="text-[#003BE2] text-[14.5px] font-medium mb-5">Lifelong Learner</span>
              <p className="font-sans font-normal text-[#5C6574] text-[18px] leading-[1.6]">
                "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-start h-full hover:-translate-y-1 transition-transform duration-300 border border-gray-100 cursor-pointer">
              <img src="/images/Alex B..png" alt="Alex B." className="w-16 h-16 rounded-full object-cover mb-5 border-[3px] border-white shadow-sm" />
              <h4 className="font-bold text-[#1D2125] text-[18px]">Alex B.</h4>
              <span className="text-[#003BE2] text-[14.5px] font-medium mb-5">Inspired Creator</span>
              <p className="font-sans font-normal text-[#5C6574] text-[18px] leading-[1.6]">
                "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-white pt-24 pb-8 flex flex-col items-center border-t border-gray-100 relative z-20">
        <div className="max-w-[1250px] w-full px-6 flex flex-col gap-16">
          
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-12 lg:gap-8">
            
            {/* Column 1 - Brand & Newsletter */}
            <div className="flex flex-col gap-6 pr-0 lg:pr-8">
              <img src="/images/footer_bytespace.png" alt="ByteSpace Logo" className="h-[28px] w-auto object-contain self-start" />
              <p className="text-[#5C6574] text-[15px] leading-[1.6]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
              
              <div className="flex flex-row items-center gap-3 mt-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 border border-gray-200 rounded-[50px] py-[12px] px-6 text-[#1D2125] text-[15px] outline-none focus:border-[#CED0D3] transition-colors bg-transparent"
                />
                <button className="bg-[#CBFC01] hover:bg-[#b5e000] text-[#1D2125] font-semibold text-[15px] py-[12px] px-8 rounded-[50px] transition-colors">
                  Search
                </button>
              </div>
              
              <p className="text-[#5C6574] text-[13px] leading-[1.6]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>

            {/* Column 2 - Links 1 */}
            <div className="flex flex-col gap-4 pt-1">
              <a href="#" className="font-semibold text-[#1D2125] text-[15px] mb-2">Featured Courses</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Featured Categories</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Business</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">IT</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Design</a>
            </div>

            {/* Column 3 - Links 2 */}
            <div className="flex flex-col gap-4 pt-1">
              <a href="#" className="font-semibold text-[#1D2125] text-[15px] mb-2">Development</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Marketing</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Photography</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Finance</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Sport</a>
            </div>

            {/* Column 4 - Links 3 */}
            <div className="flex flex-col gap-4 pt-1">
              <a href="#" className="font-semibold text-[#1D2125] text-[15px] mb-2">Become a Creator</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Affiliate Program</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Contact</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">Help</a>
              <a href="#" className="text-[#5C6574] text-[15px] hover:text-[#003BE2] transition-colors">About</a>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
            <p className="text-[#5C6574] text-[14px]">
              © 2023 ByteSpace. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#5C6574] text-[14px] hover:text-[#003BE2] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#5C6574] text-[14px] hover:text-[#003BE2] transition-colors">Terms of Service</a>
              <a href="#" className="text-[#5C6574] text-[14px] hover:text-[#003BE2] transition-colors">Cookies Settings</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
