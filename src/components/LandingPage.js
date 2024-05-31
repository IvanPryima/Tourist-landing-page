import React from "react";

export default function LandingPage() {
  const datas = [
    { title: "Bridge", avatar: "image/landing/avatar1.svg" },
    { title: "Fix & Flip", avatar: "image/landing/avatar2.svg" },
    { title: "Equipment", avatar: "image/landing/avatar3.svg" },
    { title: "Biz Funding", avatar: "image/landing/avatar4.svg" },
    { title: "Rental DSCR", avatar: "image/landing/avatar5.svg" },
  ];
  return (
    <div className="w-full">
      <div className="w-full relative font-inter">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
          <div className="h-[400px] md:h-[480px] xl:h-[576px] bg-[#1D212A] flex justify-center items-center"></div>
          <div className="h-[400px] md:h-[480px] xl:h-[576px] bg-[#F4B6A5] flex flex-col justify-center items-center"></div>
        </div>
        <div className="absolute top-2 left-0 w-full h-full flex justify-center items-center">
          <div className="fullContent grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-6 xl:gap-8">
            <div className="md:col-span-3 flex flex-col sm:flex-row gap-2 md:gap-6 xl:gap-8">
              <div className="flex-1 flex flex-col mb-8 md:md-16">
                <div className="text-2xl lg:text-2xl xl:text-4xl font-lexend font-IBM">
                  <p className="italic text-[#5AA0FF] font-medium leading-none">
                    Elevate your lending
                  </p>
                  <p className="text-white font-normal leading-none">
                    with our software suite
                  </p>
                </div>
                <p className="mt-6 text-sm xl:text-base text-white font-medium leading-none">
                  Streamline Your Lending Operations with Our Comprehensive
                  Software Solutions
                </p>
                <div className="flex md:flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mt-6 lg:mt-12 xl:mt-18">
                  <a aria-label="Book a demo" href="/bookademo">
                    <div className="w-fit">
                      <div className="bg-[#006CFF] rounded-full px-4 xl:px-6 py-2 lg:py-3 cursor-pointer">
                        <p className="text-sm xl:text-base text-white font-medium">
                          Book a demo
                        </p>
                      </div>
                    </div>
                  </a>
                  <p className="text-sm text-[#F9F9F7] max-w-32 xl:max-w-40">
                    Get 3 days free then 1 month for $49.
                  </p>
                </div>
                <p className="text-sm xl:text-base text-white font-medium mt-8 md:xl-12 lg:mt-24">
                  Curious about our loan options? Let's talk about it!
                </p>
                <div className="flex-1"></div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex sm:flex-col gap-2 md:gap-4 xl:gap-6 items-center">
                  <div className="rounded-md shadow-lg lg:rounded-lg bg-white flex flex-col p-2 lg:p-4 w-full">
                    <p className="text-tiber font-medium text-small max-w-32 lg:max-w-36 xl:max-w-44">
                      20700 Rockpoint Way, Malibu, CA 90265
                    </p>
                    <div className="flex font-medium gap-1 text-3xs lg:text-2xs xl:text-xs mt-1 lg:mt-2 w-max">
                      <p className="bg-[#E1FABD] text-[#65A30D] rounded p-1 leading-normal">
                        $4,375,000
                      </p>
                      <p className="text-red bg-red-lighter rounded p-1 leading-normal">
                        Underwriter Review
                      </p>
                    </div>
                    <div className="flex mt-2 lg:mt-4">
                      <div className="flex-1"></div>
                      <p className="text-tiber font-medium text-3xs lg:text-2xs xl:text-xs">
                        Fix and Flip
                      </p>
                    </div>
                  </div>
                  <div className="rounded-md shadow-lg lg:rounded-lg bg-white flex flex-col p-2 lg:p-4 w-full">
                    <p className="text-tiber font-medium text-small max-w-32 lg:max-w-36 xl:max-w-44">
                      1010 Passaic Ave, Linden, NJ 07036
                    </p>
                    <div className="flex font-medium gap-1 text-3xs lg:text-2xs xl:text-xs mt-1 lg:mt-2 w-max">
                      <p className="bg-[#E1FABD] text-[#65A30D] rounded p-1 leading-normal">
                        $422,513
                      </p>
                      <p className="text-[#FACA15] bg-[#FFF5CF] rounded p-1 leading-normal">
                        Approved
                      </p>
                    </div>
                    <div className="flex mt-2 lg:mt-4">
                      <div className="flex-1"></div>
                      <p className="text-tiber font-medium text-3xs lg:text-2xs xl:text-xs">
                        Ground Up Construction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:col-span-2">
              <div className="w-full">
                <div className="relative">
                  <div className="w-full h-full rounded-lg shadow-lg overflow-hidden bg-white text-medium pb-16">
                    <div className="w-full bg-[#153840] px-3 py-2 lg:px-4 lg:py-2">
                      <p className="text-white">Pipeline Status</p>
                    </div>
                    <div className="w-full ">
                      <div className="m-3 lg:m-5 w-full">
                        <div className="flex gap-2 xl:gap-4">
                          <div className="flex-1 rounded-lg bg-gray-50 flex flex-col gap-1 pt-1! lg:p-2! text-smallest">
                            <p className="text-tiber font-medium text-clip whitespace-nowrap overflow-hidden">
                              Submitted
                            </p>
                            <div className="font-medium px-2 py-1 bg-white rounded-md border border-1 border-[#5FE9FF]">
                              <p className="rounded">$205,000</p>
                            </div>
                            <div className="flex">
                              <p className="flex-1">1 Loans</p>
                              <p className="text-tiber font-medium">0.01 %</p>
                            </div>
                          </div>
                          <div className="flex-1 rounded-lg bg-gray-50 flex flex-col gap-1 pt-1! lg:p-2! text-smallest">
                            <p className="text-tiber font-medium text-clip whitespace-nowrap overflow-hidden">
                              Approved
                            </p>
                            <div className="font-medium px-2 py-1 bg-white rounded-md border border-1 border-[#FACA15]">
                              <p className="rounded">$42,751,477</p>
                            </div>
                            <div className="flex">
                              <p className="flex-1">53 Loans</p>
                              <p className="text-tiber font-medium">0.71 %</p>
                            </div>
                          </div>
                          <div className="flex-1 rounded-lg bg-gray-50 flex flex-col gap-1 pt-1! lg:p-2! text-smallest">
                            <p className="text-tiber font-medium text-clip whitespace-nowrap overflow-hidden">
                              Underwriter Review
                            </p>
                            <div className="font-medium px-2 py-1 bg-white rounded-md border border-1 border-[#C81E1E]">
                              <p className="rounded">$13,162,993</p>
                            </div>
                            <div className="flex">
                              <p className="flex-1">12 Loans</p>
                              <p className="text-tiber font-medium">0.01 %</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 w-2/3 flex flex-col pt-1! lg:pt-2! mt-2 gap-1 text-smallest">
                          <div className="flex">
                            <p className="text-tiber font-medium">Funded</p>
                            <div className="flex-1"></div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 32 32"
                              className="h-3 w-3 lg:h-4 lg:w-4"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z"></path>
                            </svg>
                          </div>
                          <div className="font-medium px-2 py-1 bg-[#03543F] rounded-md border border-1 border-tansparent">
                            <p className="rounded text-white">$299,000,146</p>
                          </div>
                          <div className="flex">
                            <p className="flex-1">800 Loans</p>
                            <p className="text-tiber font-medium">10.79 %</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mt-20 ">
                    <div className="w-full text-smallest">
                      <div className="m-3 lg:m-5 w-full">
                        <div className="w-fit mt-6">
                          <div className="rounded-lg shadow-lg bg-gray-50 flex flex-col p-2 pt-1! lg:p-3 lg:p-2!">
                            <div className="flex">
                              <p className="text-tiber text-sm lg:text-base font-medium">
                                $400,000
                              </p>
                            </div>
                            <p className="text-smallest mb-1">
                              Initial Loan Amount
                            </p>
                            <div className="flex items-center">
                              <p>LTC</p>
                              <div className="flex-1"></div>
                              <p className="bg-[#E1FABD] text-[#65A30D] rounded p-1">
                                85%
                              </p>
                            </div>
                            <div className="flex ms-1">
                              <p className="text-tiber font-medium">10.79 %</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative -mt-6 lg:-mt-8 xl:-mt-12">
        <div className="fullContent grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          {datas.map((item) => (
            <div className="flex flex-col rounded-lg p-4 bg-white shadow-lg gap-8 md:gap-12 xl:gap-16">
              <img
                alt=""
                loading="lazy"
                width="39"
                height="39"
                decoding="async"
                data-nimg="1"
                className="w-8 xl:w-10"
                src={item.avatar}
              />
              <p className="text-tiber text-sm xl:text-base">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center mt-16 md:mt-24 lg:mt-32 px-4 lg:px-5">
          <p className="text-small">OUR INTEGRATION</p>
          <div className="px-4 w-full mt-4 relative">
            <div className="w-full overflow-hidden">
              <div className="flex gap-4">
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="168"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad1.svg"
                  />
                </div>
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="104"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad2.svg"
                  />
                </div>
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="140"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad3.svg"
                  />
                </div>
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="158"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad4.svg"
                  />
                </div>
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="175"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad5.svg"
                  />
                </div>
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="147"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad6.svg"
                  />
                </div>
                <div className="lg:flex-1 min-w-fit h-10 flex justify-center items-center">
                  <img
                    alt="Brand"
                    loading="lazy"
                    width="94"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-full"
                    src="/image/landing/ad7.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute left-0 w-8 h-8 lg:w-10 lg:h-10 top-0 bg-tiber rounded-lg flex justify-center items-center cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="h-5 w-5 text-green_gray-dark"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
              </svg>
            </div>
            <div className="absolute right-0 w-8 h-8 lg:w-10 lg:h-10 top-0 bg-tiber rounded-lg flex justify-center items-center cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="h-5 w-5 text-green_gray-dark"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="fullContent my-16 gap-16 md:my-24 md:gap-24 lg:my-32 lg:gap-32 flex flex-col">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="px-2 py-1 md:px-3 md:py-2 rounded-full border-2 border-[#2A9FDA]">
              <p className="text-small">LOAN MANAGEMENT SYSTEM</p>
            </div>
            <p className="font-bold text-xl md:text-2xl xl:text-3xl mt-4 text-center text-[#153840]">
              Say hello to your new loan <br />
              origination software platform!
            </p>
            <div className="mt-4 flex items-center justify-center flex-col">
              <img
                alt=""
                loading="lazy"
                width="1036"
                height="513"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="image/landing/office.png"
                data-xblocker="passed"
              />
              <img
                alt=""
                loading="lazy"
                width="536"
                height="405"
                decoding="async"
                data-nimg="1"
                className="mt-[calc(-25%)] w-1/2"
                src="image/landing/computer.png"
                data-xblocker="passed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
