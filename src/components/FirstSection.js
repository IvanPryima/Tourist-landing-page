import React from "react";

function FirstSection() {
  const datas = [
    { title: "Bridge", avatar: "image/landing/avatar1.svg" },
    { title: "Fix & Flip", avatar: "image/landing/avatar2.svg" },
    { title: "Equipment", avatar: "image/landing/avatar3.svg" },
    { title: "Biz Funding", avatar: "image/landing/avatar4.svg" },
    { title: "Rental DSCR", avatar: "image/landing/avatar5.svg" },
  ];
  return (
    <>
      <div className="body-content mt-16 grid grid-cols-1 sm:grid-cols-2 bg-[#1D212A]">
        <div className="first-content flex justify-center">
          <div className="sm:flex">
            <div>
              <div className="mt-24 text-[#5AA0FF] font-plexSerif italic text-4xl font-medium">
                Elevate your lending
              </div>
              <div className="header-title-2 text-[#F9F9F7] font-plexSerif text-4xl font-medium">
                with our software suite
              </div>
              <div className="mt-4 w-80 font-inter font-text-base text-[#F9F9F7]">
                Streamline Your Lending Operations with Our Comprehensive
                Software Solutions
              </div>
              <div className="mt-20 flex">
                <button className="text-white w-40 h-16 bg-[#006CFF] rounded-full hover:bg-blue-800 font-inter font-text-base">
                  Book a demo
                </button>
                <p className="text-[#F9F9F7] w-36 text-sm my-2 mx-10">
                  Get 3 days free then 1 month for $49.
                </p>
              </div>
              <div className="mt-40 mb-20 text-white font-text-base">
                Curious about our loan options? Let's talk about it!
              </div>
            </div>

            <div className="mt-8 flex sm:block">
              <div className="block w-56 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  20700 Rockpoint Way, Malibu, CA 90265
                </h5>
                <div className="flex">
                  <div className="font-inter text-xs text-[#65A30D] bg-green-50 rounded px-1">
                    $4,375,000
                  </div>
                  <div className="ml-2 font-inter text-xs text-[#C81E1E] bg-red-200 rounded px-1">
                    Underwriter Review
                  </div>
                </div>
                <div className="flex">
                  <div className="grow" />
                  <button className="bg-[#F9FAFB] rounded my-4 font-inter text-xs right-0">
                    Fix and Flip
                  </button>
                </div>
              </div>
              <div className="mt-8 block w-56 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  1010 Passaic Ave, Linden, NJ 07036
                </h5>
                <div className="flex">
                  <div className="font-inter text-xs text-[#65A30D] bg-green-50 rounded px-1">
                    $422,513
                  </div>
                  <div className="ml-2 font-inter text-xs text-[#FACA15] bg-yellow-200 rounded px-1">
                    Approved
                  </div>
                </div>
                <div className="flex">
                  <div className="grow" />
                  <button className="bg-[#F9FAFB] rounded my-4 font-inter text-xs right-0">
                    Ground Up Construction
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4B6A5] flex justify-center">
          <div className="flex items-center">
            <div>
              <div className=" bg-white rounded-lg shadow ml-4 h-96 max-w-[509px] w-full">
                <ul className="flex flex-wrap text-sm text-center text-white  rounded-t-lg bg-[#153840] h-8 pt-1 pl-8">
                  Pipeline status
                </ul>
                <div id="defaultTabContent">
                  <div className="flex mt-8 ml-8 overflow-hidden">
                    <div className="w-[168px] h-24 bg-gray-100 rounded-lg">
                      <div className="mt-1 ml-3 text-xs font-medium font-inter">
                        Submitted
                      </div>
                      <input
                        className="w-36 h-7 mx-3 mt-3 rounded border text-xs border-[#5FE9FF]"
                        value=" $205,000"
                      />
                      <div className="mt-2 mx-3 text-xs font-medium font-inter flex">
                        <div>1 Loans</div>
                        <div className="grow" />
                        <div> 0.01%</div>
                      </div>
                    </div>

                    <div className="w-[168px] h-24 bg-gray-100 rounded-lg ml-2">
                      <div className="mt-1 ml-3 text-xs font-medium font-inter">
                        Approved
                      </div>
                      <input
                        className="w-36 h-7 mx-3 mt-3 rounded border  border-[#FACA15] text-xs"
                        value=" $42,751,477"
                      />
                      <div className="mt-2 mx-3 text-xs font-medium font-inter flex">
                        <div>53 Loans</div>
                        <div className="grow" />
                        <div> 0.71%</div>
                      </div>
                    </div>

                    <div className="w-[168px] h-24 bg-gray-100 rounded-lg ml-2">
                      <div className="mt-1 ml-3 text-xs font-medium font-inter">
                        Underwriter Review
                      </div>
                      <input
                        className="w-36 h-7 mx-3 mt-3 rounded border text-xs border-[#C81E1E]"
                        value=" $13,162,993"
                      />
                      <div className="mt-2 mx-3 text-xs font-medium font-inter flex">
                        <div>12 Loans</div>
                        <div className="grow" />
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[346px] h-24 bg-gray-100 rounded-lg ml-8 mt-4">
                    <div className="mt-1 ml-3 text-xs font-medium font-inter">
                      Funded
                    </div>
                    <input
                      className="w-[313px] h-7 mx-4 mt-3 rounded border  bg-[#03543F] text-xs text-white"
                      value=" $299,000,146"
                    />
                    <div className="mt-2 mx-3 text-xs font-medium font-inter flex">
                      <div>800 Loans</div>
                      <div className="grow" />
                      <div> 10.79%</div>
                    </div>
                  </div>

                  <div className="w-[171px] h-[129px] bg-white rounded-lg ml-8 mt-10 shadow-[0_4px_25px_0px_rgba(0,0,0,0.15)] pt-3">
                    <div className="ml-3 font-medium font-inter text-base">
                      Funded
                    </div>
                    <div className="mt-1 ml-3 font-medium font-inter text-[8px]">
                      nitial Loan AmounT
                    </div>
                    <div className="mt-2 mx-3 text-xs font-medium font-inter flex ">
                      <div>LTC</div>
                      <div className="grow" />
                      <div> 85%</div>
                    </div>
                    <input
                      className="w-[136px] h-7 mx-4 mt-3 rounded border  bg-gray-200 text-xs"
                      value=" 53.846%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-[73px]">
        <div className="sm:flex">
          {datas.map((item) => (
            <div className="w-[174px] h-[147px] shadow-[0_4px_25px_0px_rgba(0,0,0,0.15)] bg-white rounded-xl mx-3">
              <img src={item.avatar} alt="" className="m-4" />
              <p className="ml-4 mt-12 text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-xs font-inter mt-[130px]">
        OUR INTEGRATION
      </div>
      <div className="flex justify-center text-xs font-inter mt-10">
        <img src="image/landing/logos.png" className="h-14" alt="" />
      </div>

      <div className="flex justify-center text-xs font-inter mt-10">
        <button className="text-xs rounded-full border border-[#2A9FDA] w-[245px] h-[38px]">
          Loan Management System
        </button>
      </div>

      <div className="flex justify-center text-xs font-inter mt-4">
        <div className="w-[500px] text-[32px] font-bold leading-[38.73px] font-inter text-center text-[#153840]">
          Say hello to your new loan origination software platform!
        </div>
      </div>

      <div className="mt-[10px]">
        <div className="flex justify-center">
          <img
            src="image/landing/office.png"
            alt=""
            className="w-full rounded-xl"
          />
        </div>
        asdfaffff
        <div className="flex justify-center sm:-mt-[360px]">
          <img
            src="image/landing/computer.png"
            alt=""
            className="max-w-[532.25px] w-full rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
