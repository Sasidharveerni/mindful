import React from "react";
import logo from '../assets/icon-logo.png'
import { FaceBook, HeartSymbol, HomeBanner, IdeaSymbol, Instagram, LikeSymbol, PeopleSymbol, Twitter } from "../assets/svg";
import Header from "./Header";

export default function HomePage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Responsive Header */}
        
        <Header />

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="p-4">
              <div
                className="flex min-h-[300px] md:min-h-[480px] flex-col gap-4 md:gap-8 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKBrWz_goVE05iqN5PtQt18U7frArV6h-fDmr4bpa_sc1Yx57uJhtMEhiXpYL7LkG6I2GPltHdWQyBepyQwsJWBo4u9qC9E0cBC-wpbL07VDjz-_mMLgE8BKwLgbB5v0KKn-8YmYe5nSG1dYyFtZbG6ix4udJwxfv33XflMEN_c8OnPnnWXzt5Bk5s28_KeUl6H9M5FDsjYm_Oy-R1CLbPV2AodPSnEYVazXVSGYhZwO7zA12Xdlsnxxm_IFKOq4nBVK13ySoWawMH")',
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-2xl md:text-4xl font-bold md:font-black leading-tight tracking-[-0.033em]">
                    Elevate Your Mind in the Heart of Dubai
                  </h1>
                  <h2 className="text-white text-sm md:text-base font-normal leading-normal">
                    Join leading experts and peers at our premier mental health conferences, set against the backdrop of Dubai's inspiring landscape.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 md:h-12 px-4 md:px-5 bg-[#f29e0d] text-[#1c160d] text-sm md:text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Book Your Seat Now</span>
                </button>
              </div>
            </div>

            {/* Upcoming Conferences */}
            <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Conferences</h2>

            <div className="flex overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch px-4 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex h-full flex-col gap-4 rounded-lg min-w-[280px] md:min-w-60">
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
                    <div>
                      <p className="text-[#1c160d] text-base font-medium leading-normal">{['World summit on leadership', 'World summit on Psychiatry, Mental Health ', '2nd world summit on Feminism'][i - 1]}</p>
                      <p className="text-[#9c7e49] text-sm font-normal leading-normal">{[
                        'Developing the Next Generation of Leaders.',
                        'Women Leading the Way in Mental Health, Psychiatry, Nursing & Healthcare.',
                        'Achieve gender equality and empower all women and girls',
                      ][i - 1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Mental Health Matters */}
            <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Mental Health Matters</h2>

            <div className="flex flex-col gap-8 px-4 py-6 md:py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#1c160d] tracking-light text-2xl md:text-4xl font-bold md:font-black leading-tight max-w-[720px]">
                  Prioritize Your Well-being
                </h1>
                <p className="text-[#1c160d] text-base font-normal leading-normal max-w-[720px]">
                  Investing in mental health is essential for personal and professional success. Our conferences provide the tools and knowledge to thrive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 flex-col">
                  <div className="text-[#1c160d]">
                   <HeartSymbol />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c160d] text-base font-bold leading-tight">Enhance Personal Growth</h2>
                    <p className="text-[#9c7e49] text-sm font-normal leading-normal">Gain insights into self-care practices and emotional intelligence.</p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 flex-col">
                  <div className="text-[#1c160d]">
                     <PeopleSymbol />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c160d] text-base font-bold leading-tight">Build Stronger Relationships</h2>
                    <p className="text-[#9c7e49] text-sm font-normal leading-normal">Learn effective communication and empathy-building techniques.</p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 flex-col">
                  <div className="text-[#1c160d]">
                     <IdeaSymbol />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c160d] text-base font-bold leading-tight">Unlock Your Potential</h2>
                    <p className="text-[#9c7e49] text-sm font-normal leading-normal">Discover strategies to overcome challenges and achieve your goals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Dubai */}
            <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience Dubai</h2>

            <div className="flex flex-col gap-8 px-4 py-6 md:py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#1c160d] tracking-light text-2xl md:text-4xl font-bold md:font-black leading-tight max-w-[720px]">
                  Why Attend in Dubai?
                </h1>
                <p className="text-[#1c160d] text-base font-normal leading-normal max-w-[720px]">
                  Dubai offers a unique blend of modern innovation and cultural richness, creating an inspiring environment for learning and networking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCGQKMoE7kxhSEiUDBrVWSDmMa06bB0Jypgtle4y6ekkCvyxSyFzA5dgVRHLc3HB91G5BZbnSdhteqNlfRZppL8ECYAL7n-PiTBTbfKYOdMatDgotJqgFxaNpOj_vzNiq7WtJ2XnFnBrMxd00wc0s0D93Au0AOk0I9hAI-CibX91VL4wINfAfpdcnrcXDP_jXneYPiul0u1OZlun_dwcFq50ncgNqV6j4FUQeLkZbonZHA4JrG8cx465qNJV0Ifl2JxDcvgGBOjK0-o',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBmLAvf1HWFqVAs3gOKWsUTT-ZaflKJ1p6tkTPSudTboV41Sz4G42UvPedBgWCnYNLnukzz4m3mxf_CLocKHpRz479BWqxCTa9Kk8TrGbTYrg0MB4Hf_QPWPpir1tdeCYrdAvNF9ztwvldhhUMZ43yru2dicy4AvARly3fZOZmbGrDi3vOFH4lv2sgsuGJmwkSZBOU3SW7t3QPt7EcmUARJoaIZuju3FWfLB_js8peXqlAxeFNdVTxmQK0O2s4hRGehhcuFy6Qy3Y9m',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuA-XVihatMJq7RGV6Aeo4ARQl4U2fokcih-DTkYKupvWjbpGH6MSxr2soIUmT5KGEkFKwgdvWJPphRON0HT9XGyiq54BaD8DkLOy4EWq6lIZzDOT7p3PW53iWmptw3hVvvikbTbhbb89Pwm1WBnjJ3ZYw5ubPXLyKorEkTDiV4pK_zV4WwrjNqJ-mywtRkUu3-hMz3XjJZtRQNzQ5Rmi5ys935v_osCJhYs9cG2K3hxlaSOIvZ3eIxtk-59j9ZhQUnTQSy_OyR3FXkg',
                ].map((src, idx) => (
                  <div key={idx} className="flex flex-col gap-3 pb-3">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: `url("${src}")` }} />
                    <div>
                      <p className="text-[#1c160d] text-base font-medium leading-normal">{['World-Class Facilities', 'Luxury Accommodation', 'Cultural Immersion'][idx]}</p>
                      <p className="text-[#9c7e49] text-sm font-normal leading-normal">{[
                        "Our conferences are held in state-of-the-art venues with cutting-edge technology.",
                        "Enjoy a comfortable stay in Dubai's renowned hotels and resorts.",
                        "Explore the vibrant culture, cuisine, and attractions of this dynamic city.",
                      ][idx]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonials</h2>

            <div className="flex flex-col gap-8 overflow-x-hidden bg-[#fcfaf8] p-4">
              {[
                { name: 'Aisha Al Mansouri', date: '2023-11-15', rating: 5, text: 'The Mindful Leadership Summit was transformative. The speakers were inspiring, and the networking opportunities were invaluable. I left with practical strategies to implement in my workplace.' },
                { name: 'Omar Hassan', date: '2023-10-20', rating: 5, text: 'Thriving Together provided a supportive environment to connect with others and learn about community wellness. The workshops were engaging and offered valuable insights.' },
                { name: 'Fatima Khan', date: '2023-09-05', rating: 5, text: 'The Future of Mental Health conference was exceptional. The presentations on innovative technologies and approaches were thought-provoking, and the Dubai setting added a unique dimension to the experience.' },
              ].map((t, i) => (
                <div key={i} className="flex flex-col gap-3 bg-[#fcfaf8]">
                  <div className="flex items-center gap-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnbBuYVDwKLFjyvM4nboRgqqGbO6MlA5QKnZRtfrC4Yv3tnxPGwC6QQy-9V-B7QpVl5GAoh-ieCn4EpSSl9XzDg3CadHAuF5O6dgT4Q3yaCqCMf84kop4X62x7-wK2R81kcGBXlWJY0BVb_lZ0QNO8itNpPybG4gy9jZQaOmQA5TkBP2RLKiGd6A8AnKkZmKLLqWKeO9xMgO_6ZI25uxD2TO3tQpiWF1_QHzMRS37YMwztHkvs3aD4qEeZ1MyAhaWNjIYWSDlIi3SF")' }} />
                    <div className="flex-1">
                      <p className="text-[#1c160d] text-base font-medium leading-normal">{t.name}</p>
                      <p className="text-[#9c7e49] text-sm font-normal leading-normal">{t.date}</p>
                    </div>
                  </div>

            
                  <p className="text-[#1c160d] text-base font-normal leading-normal">{t.text}</p>

                 
                </div>
              ))}
            </div>

            {/* Footer */}
            <footer className="flex justify-center">
              <div className="flex max-w-[960px] flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                  <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Home</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Conferences</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">About</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="#">
                      <Twitter />
                    </a>
                    <a href="#">
                       <Instagram />
                    </a>
                    <a href="#">
                      <FaceBook />
                    </a>
                  </div>

                  <p className="text-[#9c7e49] text-base font-normal leading-normal">© 2024 Mindful Meetings. All rights reserved.</p>
                </footer>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}