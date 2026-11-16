import React from 'react';

const Testimonials = () => {
  return (
    <div
      className="md:py-[160px] py-[70px] z-10 overflow-hidden relative w-full bg-white bg-vector bg-center md:bg-mockup md:bg-right bg-cover min-h-[100vh]">
      <div data-aos="zoom-in" className="container mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
        <div
          className="col-start-2 col-span-10 relative min-h-screen relative">
          <div className="relative text-center">
            <div className="z-20">
              <h2
                className="pt-[70px] font-dmSans leading-[1] md:block text-[2.5rem] md:text-[4.5rem] font-bold relative text-slate-800"
              >
                Hear what people <br/> have to say about 440
              </h2>
            </div>
          </div>
          <div className="py-10">
            <div className="bg-phoneTwo absolute top-0 mx-auto bg-cover rounded-lg w-[318px] h-[600px] relative">
              <div className="animate-bounceTwo p-4 absolute top-[1rem] right-[-1rem] md:left-[-12rem] rounded-lg bg-gray-200 h-[200px] w-[250px] md:w-[300px]">
                <div>
                  <svg className="h-8 mb-3 text-black" viewBox="0 0 24 27" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"/>
                  </svg>
                  <p className="text-[12px] text-bold py-4 text-black">
                    
                  My sales have gone up since I started importing through 440. They found me a reliable supplier in China and handled everything. I didn't have to stress about anything. <br/>Mr Chinedu — Lagos
                  </p>
                </div>
                <div className="p-4 absolute bottom-[-12rem] left-[-7rem] rounded-lg bg-primary h-[200px] w-[300px]">
                  <div>
                    <svg className="h-8 mb-3 text-secondary" viewBox="0 0 24 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"/>
                    </svg>
                    <p className="text-[12px] py-4 text-secondary">
                    I used to receive damaged goods and had no way to complain. 440 inspected my order before it left China. Everything arrived exactly as I ordered. <br/> Mrs Bola — Abuja
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 absolute bottom-[-1rem] right-[-1rem] md:top-[3rem] md:right-[-10rem] rounded-lg bg-gray-200 h-[200px] md:h-[250px] w-[300px]">
                <div>
                  <svg className="h-8 mb-3 text-black" viewBox="0 0 24 27" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"/>
                  </svg>
                  <p className="text-[12px] py-4 text-black">
                  The 50% financing changed everything for me. I could place a bigger order than I normally would, and pay the rest when my goods arrived. My business has grown since. <br/> Mr Emeka — Port Harcourt
                  </p>
                </div>
                {/* <div className="hidden md:block animate-bounceTwo animation-delay-1 p-4 absolute top-[3rem] right-[-15rem] rounded-lg bg-primary h-[180px] w-[300px]">
                  <div>
                    <svg className="h-8 mb-3 text-secondary" viewBox="0 0 24 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"/>
                    </svg>
                    <p className="text-[18px] py-4 text-secondary">
                      440 is providing simplified mobility solutions for all <br/> African businesses
                    </p>
                  </div>
                </div> */}
                <div className="hidden md:block p-4 absolute bottom-[-9rem] left-[-5rem] rounded-lg bg-primary h-[200px] w-[300px]">
                  <div>
                    <svg className="h-8 mb-3 text-secondary" viewBox="0 0 24 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"/>
                    </svg>
                    <p className="text-[12px] py-4 text-secondary">
                    I never had to follow up or chase anyone. 440 handled shipping, customs, and delivery straight to my shop. I just placed my order and waited for the knock on my door." <br/> Miss Ajoke — Ibadan
                    </p>
                  </div>
                  <div className="p-4 absolute bottom-[-10rem] left-[-20rem] rounded-lg bg-gray-200 h-[200px] w-[300px]">
                    <svg className="h-8 mb-3 text-black" viewBox="0 0 24 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"/>
                    </svg>
                    <p className="text-[12px] py-4 text-black">
                    I import from China now. Before 440, I didn't even know where to start. Now I shop directly from verified suppliers and my customers love the quality. <br/> Mr Opara — Enugu
                    </p>
                  </div>
                  <div className="animate-bounceTwo animation-delay-3 p-4 absolute bottom-[-10rem] right-[-15rem] rounded-lg bg-gray-200 h-[200px] w-[300px]">
                    <svg className="h-8 mb-3 text-black" viewBox="0 0 24 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"/>
                    </svg>
                    <p className="text-[12px] py-4 text-black">
                    I pay in naira. No dollar account, no forex wahala. 440 gave me the real rate and I knew exactly what I was paying from the start. <br/> Mrs Joy — Kano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>

  );
};

export default Testimonials;
