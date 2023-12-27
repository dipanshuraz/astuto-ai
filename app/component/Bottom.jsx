import React from "react";
import Option from "./bottomComponent/Option";
import Svg from "./bottomComponent/Svg";

export default function Bottom({ setIsChartStart, isChartStart }) {
  return (
    <div className="w-full flex flex-col items-center">
      {isChartStart && (
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row">
            <Option
              title={
                "Top cloud costs by services in production account (#24542)"
              }
              setIsShow={setIsChartStart}
            />
            <Option
              title={"Which application's cost are increasing the fastest?"}
              disable={true}
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <Option
              title={
                "How much money are we losing by not moving to graviton instances?"
              }
              disable={true}
            />
            <Option
              title={"Which are the largest s3 buckets by size?"}
              disable={true}
            />
          </div>
        </div>
      )}
      <div className="flex justify-center items-center gap-4 mb-4">
        <p className="text-[#8F97A3] text-[12px] font-medium leading-[normal]s">
          Have the answers been satisfactory so far?
        </p>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_1199_627)">
              <path
                d="M4.66683 7.3335L7.3335 1.3335C7.86393 1.3335 8.37264 1.54421 8.74771 1.91928C9.12278 2.29436 9.3335 2.80306 9.3335 3.3335V6.00016H13.1068C13.3001 5.99797 13.4915 6.03783 13.6679 6.11697C13.8442 6.19612 14.0012 6.31265 14.1281 6.45851C14.2549 6.60436 14.3485 6.77604 14.4024 6.96166C14.4563 7.14728 14.4692 7.3424 14.4402 7.5335L13.5202 13.5335C13.4719 13.8514 13.3105 14.1412 13.0654 14.3495C12.8204 14.5578 12.5084 14.6705 12.1868 14.6668H4.66683M4.66683 7.3335V14.6668M4.66683 7.3335H2.66683C2.31321 7.3335 1.97407 7.47397 1.72402 7.72402C1.47397 7.97407 1.3335 8.31321 1.3335 8.66683V13.3335C1.3335 13.6871 1.47397 14.0263 1.72402 14.2763C1.97407 14.5264 2.31321 14.6668 2.66683 14.6668H4.66683"
                stroke="#BCC1C8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1199_627">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_1199_629)">
              <path
                d="M11.1217 8.66699L8.45508 14.667C7.92464 14.667 7.41594 14.4563 7.04086 14.0812C6.66579 13.7061 6.45508 13.1974 6.45508 12.667L6.45508 10.0003L2.68174 10.0003C2.48847 10.0025 2.29704 9.96266 2.1207 9.88351C1.94436 9.80437 1.78734 9.68783 1.66051 9.54198C1.53368 9.39613 1.44007 9.22444 1.38618 9.03882C1.3323 8.8532 1.31941 8.65809 1.34841 8.46699L2.26841 2.46699C2.31663 2.14905 2.47812 1.85925 2.72314 1.65099C2.96816 1.44272 3.28019 1.33002 3.60175 1.33366L11.1217 1.33366M11.1217 8.66699L11.1217 1.33366M11.1217 8.66699L13.1217 8.66699C13.4754 8.66699 13.8145 8.52652 14.0646 8.27647C14.3146 8.02642 14.4551 7.68728 14.4551 7.33366L14.4551 2.66699C14.4551 2.31337 14.3146 1.97423 14.0646 1.72418C13.8145 1.47413 13.4754 1.33366 13.1217 1.33366L11.1217 1.33366"
                stroke="#BCC1C8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1199_629">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex items-center w-full md:w-[80%] max-w-[800px] h-14 mb-1  flex-shrink-0 rounded-[16px] border-[1px] border-solid border-[#BCC1C8)] bg-[var(--White-Astuto-White,_#F8F9FC)] [box-shadow:0px_0px_24px_0px_rgba(5,_5,_5,_0.15)]">
        <input
          className="w-full h-14 pl-6 outline-[none] rounded-2xl bg-[var(--White-Astuto-White,_#F8F9FC)]"
          type="text"
          placeholder="Start typing your query here..."
        />
        <Svg />
      </div>
    </div>
  );
}
