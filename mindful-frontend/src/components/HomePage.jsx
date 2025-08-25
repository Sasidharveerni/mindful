import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { HeartSymbol, PeopleSymbol, IdeaSymbol } from "../assets/svg";
import { useNavigate } from "react-router";
// import bgVideo from "../assets/background-video.mp4";

export default function HomePage() {
  const navigate = useNavigate()

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Auto-scroll only on desktop
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    let scrollInterval;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
          if (scrollLeft >= scrollWidth - clientWidth) {
            // Reset to beginning
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
  <div
    className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
    style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      {/* Responsive Header */}
      <Header />

      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden rounded-none sm:rounded-lg">
        {/* Background Video - Mobile Friendly */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl">
          <h1 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
            Elevate your brand and personal visibility on global stage  in the ICON STAR Conferences
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-4 sm:mb-6">
            Join our interactive forums to enhance your personal and professional brand.
          </p>

          <div className="flex flex-row xs:flex-row gap-3 sm:gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#f29e0d] text-[#1c160d] font-bold text-sm sm:text-base w-full xs:w-auto" onClick={() => navigate('/aboutus')}>
              About us
            </button>
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/80 text-[#1c160d] font-bold text-sm sm:text-base w-full xs:w-auto" onClick={() => navigate('/events')}>
              Explore Events
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-[#1c160d] tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">About ICON STAR CONFERENCES </h1>
          </div>

          {/* Introduction */}
          <p className="text-[#1c160d] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Welcome to ICON STAR CONFERENCES the premier destination for ambitious entrepreneurs, innovative startups, and visionary small business owners ready to scale new heights.
            At ICON STAR CONFERENCE we are passionate about empowering the next generation of business leaders. Our mission is to provide a transformative platform where dynamic ideas and actionable strategies converge. As the essential business-to-business event of the year, we are dedicated to creating an environment that fosters growth, collaboration, and success.
          </p>

          <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#f29e0d] text-[#1c160d] font-bold text-sm sm:text-base ml-4 min-w-[120px] max-w-[200px]" onClick={() => navigate('/aboutus')}>
            Read more
          </button>
        </div>
      </div>
       

       {/* added a customer card here with 2 fields, email, and mobile */}

       <div className="lg:px-12 xl:px-40 px-4 md:px-40 bg-white rounded-lg border border-[#e8dfce] p-6 shadow-sm">
  <h3 className="text-[#1c160d] text-lg font-semibold mb-4">Customer Details</h3>
  
  <div className="space-y-3">
    <div className="flex items-center">
      <div className="text-[#9c7e49] mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V64H216V192ZM173.66,85.66,128,131.31,82.34,85.66A8,8,0,0,0,70.34,97.66l48,48a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32Z"/>
        </svg>
      </div>
      <div>
        <p className="text-[#9c7e49] text-sm font-medium">Email</p>
        <p className="text-[#1c160d]">customer.support@iconstarconferences.com</p>
      </div>
    </div>
    
    <div className="flex items-center">
      <div className="text-[#9c7e49] mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/>
        </svg>
      </div>
      <div>
        <p className="text-[#9c7e49] text-sm font-medium">Mobile</p>
        <p className="text-[#1c160d]">+44 7901091329</p>
      </div>
    </div>
  </div>
</div>


        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        
            {/* <div className="p-2 sm:p-4">
              <div
                className="flex min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[480px] flex-col gap-4 md:gap-8 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4 sm:p-6 md:p-8"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKBrWz_goVE05iqN5PtQt18U7frArV6h-fDmr4bpa_sc1Yx57uJhtMEhiXpYL7LkG6I2GPltHdWQyBepyQwsJWBo4u9qC9E0cBC-wpbL07VDjz-_mMLgE8BKwLgbB5v0KKn-8YmYe5nSG1dYyFtZbG6ix4udJwxfv33XflMEN_c8OnPnnWXzt5Bk5s28_KeUl6H9M5FDsjYm_Oy-R1CLbPV2AodPSnEYVazXVSGYhZwO7zA12Xdlsnxxm_IFKOq4nBVK13ySoWawMH")',
                }}
              >
                <div className="flex flex-col gap-3 sm:gap-4 text-center">
                  <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:font-black leading-tight tracking-[-0.033em] px-2">
                    Elevate Your Business in the ICON STAR Conferences
                  </h1>
                  <h2 className="text-white text-xs sm:text-sm md:text-base font-normal leading-normal px-2">
                    Join leading experts and visionary entrepreneurs at our premier business conferences.
                  </h2>
                </div>
                <button className="flex min-w-[120px] max-w-[280px] sm:max-w-[320px] md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-11 md:h-12 px-4 md:px-5 bg-[#f29e0d] text-[#1c160d] text-sm md:text-base font-bold leading-normal tracking-[0.015em] mt-2">
                  <span className="truncate">Book Your Seat Now</span>
                </button>
              </div>
            </div> */}

     



           {/* Upcoming Conferences */}
            <h2 className="text-[#1c160d] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5 sm:pt-6 md:pt-8">
              Upcoming Conferences
            </h2>

            <div className="px-2 sm:px-4">
              <div 
                ref={scrollRef}
                className="flex flex-col sm:flex-row sm:overflow-x-auto pb-4 gap-4 sm:gap-4 md:gap-6 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col gap-3 sm:gap-4 rounded-lg w-full sm:min-w-[280px] md:min-w-[300px] sm:flex-shrink-0">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{
                        backgroundImage:
                          i === 1
                            ? 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_O07LJe740BLiSWjOnVq6I46xhW_xRX3bVtEBfTMehgIt8Q0WGsF9tC7T-I2i9vJKrZPuu5nEyl_4dqecAXuJPEdG-qAduKeMbACvcuTkVeVKBz6Jfwywj-p7dOBKJL0SobM4xevnmD_DMkRjUQ76CGi7pTMl_AZjbPAP5ylWSJIq7xq5TcCYONASZSmX9IY4enW5FGsonSE4b6gtVkNQ3DY_h5BHMWTh-nUHSTalbqzc6E6UOu_gcyl4zXg6R9X_IwbWakoZHZFC")'
                            : i === 2
                            ? 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDx2L6F6TVmZiHGZWKLb_N1JMJAlEz44gNBdR4gzceGYoutaX18x0LvraVArJD-D_VqDaXGr1yPW1a9TUdUU6lfC52prDlb813X3EyN4wQP6gfyXrQUgsxiE60KvJRBynK3Z-JTsKoYwNcSpnvZaPYLEso86h-JpRTUi2oZs19ru3taSWMrnbvsLURKiLQJ1R_56VaBwHdcdb1mtuM08dgdfZyBBL2JLiP2f2AdDaL_tvvdx-9434f_El1pj9zjvif29EoQRXiwO2sz")'
                            : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYHfQBX6JKLLg4KtEVysZWnnKHelsBpw6wZFY8LQAN4BB9onIFmOEoYodJvN4FzyaGFvv_3RpjpxDzwMtuPn2bVsiXdhgIjM_2EPb58CnLHmd1YR2jxlhEOWilbFbTSwgAAs2ytSm-JawMQfnpByt4wZ2UsCiJOEafZmXsuF7LztaCjya6nFijgSiIfVPQcFDfUvuGJbMTDSAKVHdnA4IETkntA0CH58kFTg6jyg4kt2Z5pwfN0F1lCE5nO7HK0jxd8PaZVckTFx6L")'
                      }}
                    />
                    <div className="px-1">
                      <p className="text-[#1c160d] text-sm sm:text-base font-medium leading-normal mb-1">
                        {['World summit on leadership', 'World summit on Psychiatry, Mental Health', '2nd world summit on Feminism'][i - 1]}
                      </p>
                      <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">
                        {[
                          'Developing the Next Generation of Leaders.',
                          'Women Leading the Way in Mental Health, Psychiatry, Nursing & Healthcare.',
                          'Achieve gender equality and empower all women and girls',
                        ][i - 1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

{/*             
            <h2 className="text-[#1c160d] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5 sm:pt-6 md:pt-8">
              Why Business Growth Matters
            </h2> */}

            <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-4 py-4 sm:py-6 md:py-10">
              {/* <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-[#1c160d] tracking-light text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:font-black leading-tight max-w-[720px]">
                  Prioritize Your Business Growth
                </h1>
                <p className="text-[#1c160d] text-sm sm:text-base font-normal leading-normal max-w-[720px]">
                  Investing in professional development and business growth is essential for entrepreneurial success. Our conferences provide the tools and knowledge to thrive.
                </p>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 sm:p-5 flex-col">
                  <div className="text-[#1c160d]">
                   <HeartSymbol />
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className="text-[#1c160d] text-sm sm:text-base font-bold leading-tight">Enhance Business Growth</h2>
                    <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">Gain insights into innovative strategies and entrepreneurial best practices.</p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 sm:p-5 flex-col">
                  <div className="text-[#1c160d]">
                     <PeopleSymbol />
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className="text-[#1c160d] text-sm sm:text-base font-bold leading-tight">Build Stronger Networks</h2>
                    <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">Connect with industry leaders and build valuable professional relationships.</p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 sm:p-5 flex-col md:col-span-2 lg:col-span-1">
                  <div className="text-[#1c160d]">
                     <IdeaSymbol />
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className="text-[#1c160d] text-sm sm:text-base font-bold leading-tight">Unlock Your Potential</h2>
                    <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">Discover strategies to overcome challenges and achieve your business goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why ICON STAR Conferences */}
            {/* <h2 className="text-[#1c160d] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5 sm:pt-6 md:pt-8">
              Why Choose ICON STAR Conferences
            </h2> */}

            <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-4 py-4 sm:py-6 md:py-10">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-[#1c160d] tracking-light text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:font-black leading-tight max-w-[720px]">
                  Transformative Platform for Visionaries
                </h1>
                <p className="text-[#1c160d] text-sm sm:text-base font-normal leading-normal max-w-[720px]">
                  Welcome to ICON STAR CONFERENCES - the premier destination for ambitious entrepreneurs, innovative startups, and visionary small business owners ready to scale new heights.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg bg-[#f4efe7]">
                  <h3 className="text-[#1c160d] text-base sm:text-lg font-bold leading-tight">Our Mission</h3>
                  <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">
                    We are passionate about empowering the next generation of business leaders by providing a transformative platform where dynamic ideas and actionable strategies converge.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg bg-[#f4efe7]">
                  <h3 className="text-[#1c160d] text-base sm:text-lg font-bold leading-tight">Our Vision</h3>
                  <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">
                    To create a vibrant ecosystem where innovative ideas flourish and entrepreneurial dreams become reality, inspiring a new generation of business leaders.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg bg-[#f4efe7]">
                  <h3 className="text-[#1c160d] text-base sm:text-lg font-bold leading-tight">What We Offer</h3>
                  <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">
                    Essential B2B events that foster growth, collaboration, and success by connecting visionaries with resources, knowledge, and networks essential for success.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg bg-[#f4efe7] sm:col-span-2 lg:col-span-3">
                  <h3 className="text-[#1c160d] text-base sm:text-lg font-bold leading-tight">Who We Serve</h3>
                  <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">
                    Ambitious entrepreneurs, innovative startups, and visionary small business owners who are ready to scale new heights and shape the future of business.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
                <p className="text-[#1c160d] text-sm sm:text-base font-normal leading-normal">
                  At ICON STAR CONFERENCES, we are dedicated to creating an environment that fosters growth, collaboration, and success. 
                  As the essential business-to-business event of the year, we bring together the brightest minds and most innovative thinkers 
                  to share knowledge, build connections, and drive meaningful change in the business world.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <h2 className="text-[#1c160d] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5 sm:pt-6 md:pt-8">
              Testimonials
            </h2>

            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-x-hidden bg-[#fcfaf8] p-2 sm:p-4">
              {[
                { 
                  name: 'Aisha Al Mansouri', 
                  date: '2023-11-15', 
                  text: 'The Leadership Summit was transformative. The speakers were inspiring, and the networking opportunities were invaluable. I left with practical strategies to implement in my business.' 
                },
                { 
                  name: 'Omar Hassan', 
                  date: '2023-10-20', 
                  text: 'ICON STAR provided a supportive environment to connect with other entrepreneurs and learn about business growth. The workshops were engaging and offered valuable insights.' 
                },
                { 
                  name: 'Fatima Khan', 
                  date: '2023-09-05', 
                  text: 'The conference was exceptional. The presentations on innovative business strategies were thought-provoking, and the Dubai setting added a unique dimension to the experience.' 
                },
              ].map((t, i) => (
                <div key={i} className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg bg-[#f4efe7]">
                  <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 sm:size-12 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnbBuYVDwKLFjyvM4nboRgqqGbO6MlA5QKnZRtfrC4Yv3tnxPGwC6QQy-9V-B7QpVl5GAoh-ieCn4EpSSl9XzDg3CadHAuF5O6dgT4Q3yaCqCMf84kop4X62x7-wK2R81kcGBXlWJY0BVb_lZ0QNO8itNpPybG4gy9jZQaOmQA5TkBP2RLKiGd6A8AnKkZmKLLqWKeO9xMgO_6ZI25uxD2TO3tQpiWF1_QHzMRS37YMwztHkvs3aD4qEeZ1MyAhaWNjIYWSDlIi3SF")' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1c160d] text-sm sm:text-base font-medium leading-normal truncate">{t.name}</p>
                      <p className="text-[#9c7e49] text-xs sm:text-sm font-normal leading-normal">{t.date}</p>
                    </div>
                  </div>
                  <p className="text-[#1c160d] text-xs sm:text-sm md:text-base font-normal leading-normal italic">"{t.text}"</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}