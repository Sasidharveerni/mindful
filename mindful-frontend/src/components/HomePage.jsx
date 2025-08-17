import React from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4efe7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#1c160d]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#1c160d] text-lg font-bold leading-tight tracking-[-0.015em]">Mindful Meetings</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="/">Home</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="/events">Conferences</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="/aboutus">About</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="/contact">Contact</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f29e0d] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Book Now</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4efe7] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate('/login')}>
                <span className="truncate">Login</span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKBrWz_goVE05iqN5PtQt18U7frArV6h-fDmr4bpa_sc1Yx57uJhtMEhiXpYL7LkG6I2GPltHdWQyBepyQwsJWBo4u9qC9E0cBC-wpbL07VDjz-_mMLgE8BKwLgbB5v0KKn-8YmYe5nSG1dYyFtZbG6ix4udJwxfv33XflMEN_c8OnPnnWXzt5Bk5s28_KeUl6H9M5FDsjYm_Oy-R1CLbPV2AodPSnEYVazXVSGYhZwO7zA12Xdlsnxxm_IFKOq4nBVK13ySoWawMH")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Elevate Your Mind in the Heart of Dubai
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Join leading experts and peers at our premier mental health conferences, set against the backdrop of Dubai's inspiring landscape.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f29e0d] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Book Your Seat Now</span>
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-[#1c160d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Conferences</h2>

            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
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
                      <p className="text-[#1c160d] text-base font-medium leading-normal">{['Mindful Leadership Summit', 'Thriving Together: Community Wellness', 'The Future of Mental Health'][i - 1]}</p>
                      <p className="text-[#9c7e49] text-sm font-normal leading-normal">{[
                        'Explore innovative strategies for mental well-being in leadership.',
                        'Connect with others and learn practical tools for community support.',
                        'Discover the latest advancements in mental health care and technology.',
                      ][i - 1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-[#1c160d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Mental Health Matters</h2>

            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#1c160d] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Prioritize Your Well-being
                </h1>
                <p className="text-[#1c160d] text-base font-normal leading-normal max-w-[720px]">
                  Investing in mental health is essential for personal and professional success. Our conferences provide the tools and knowledge to thrive.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 flex-col">
                  <div className="text-[#1c160d]" data-icon="Heart" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c160d] text-base font-bold leading-tight">Enhance Personal Growth</h2>
                    <p className="text-[#9c7e49] text-sm font-normal leading-normal">Gain insights into self-care practices and emotional intelligence.</p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 flex-col">
                  <div className="text-[#1c160d]" data-icon="Users" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c160d] text-base font-bold leading-tight">Build Stronger Relationships</h2>
                    <p className="text-[#9c7e49] text-sm font-normal leading-normal">Learn effective communication and empathy-building techniques.</p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8dfce] bg-[#fcfaf8] p-4 flex-col">
                  <div className="text-[#1c160d]" data-icon="Lightbulb" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c160d] text-base font-bold leading-tight">Unlock Your Potential</h2>
                    <p className="text-[#9c7e49] text-sm font-normal leading-normal">Discover strategies to overcome challenges and achieve your goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[#1c160d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience Dubai</h2>

            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#1c160d] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Why Attend in Dubai?
                </h1>
                <p className="text-[#1c160d] text-base font-normal leading-normal max-w-[720px]">
                  Dubai offers a unique blend of modern innovation and cultural richness, creating an inspiring environment for learning and networking.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
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

            <h2 className="text-[#1c160d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonials</h2>

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

                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <svg key={k} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="text-[#f29e0d]">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                      </svg>
                    ))}
                    {t.rating < 5 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="text-[#d8c8ac]">
                        <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
                      </svg>
                    )}
                  </div>

                  <p className="text-[#1c160d] text-base font-normal leading-normal">{t.text}</p>

                  <div className="flex gap-9 text-[#9c7e49]">
                    <button className="flex items-center gap-2">
                      <div className="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
                        </svg>
                      </div>
                      <p className="text-inherit">{i === 0 ? 12 : i === 1 ? 8 : 15}</p>
                    </button>
                    <button className="flex items-center gap-2">
                      <div className="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                        </svg>
                      </div>
                      <p className="text-inherit">{i === 0 ? 2 : i === 1 ? 1 : 3}</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <footer className="flex justify-center">
              <div className="flex max-w-[960px] flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                  <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Home</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Conferences</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">About</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                    <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="#">
                      <div className="text-[#9c7e49]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div className="text-[#9c7e49]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div className="text-[#9c7e49]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                        </svg>
                      </div>
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
