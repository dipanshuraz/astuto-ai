import React, { useState } from "react";
import UpDownContainer from "./UpDownContainer";
import Option from "../bottomComponent/Option";
import InfoFrame from "./InfoFrame";
import LoadingFrame from "./LoadingFrame";

function FourFrame() {
  const [queryShow, setQueryShow] = useState(true);
  const [ECqueryShow, setECQueryShow] = useState(true);
  const [isSelected, setIsSelected] = useState(true);
  const [flag, setFlag] = useState(false)

  const handleQueryShow = () => {
    queryShow ? setQueryShow(false) : setQueryShow(true);
  };
  return (
    <>
      <div className="flex flex-col  my-4  items-center gap-[24px] self-stretch rounded-[8px] bg-[#F8F9FC]">
        <UpDownContainer
          handleQueryShow={handleQueryShow}
          queryShow={queryShow}
          title={"You might also want to know "}
        />
        {queryShow && isSelected && (
          <div>
            <div className="flex flex-col lg:flex-row">
              <Option
                title={"Which services' costs are rising the fastest?"}
                disable={true}
              />
              <Option title={"How can I reduce my S3 costs?"} disable={true} />
            </div>
            <div className="flex flex-col lg:flex-row">
              <Option title={"How can I reduce my RDS costs?"} disable={true} />
              <Option
                setIsShow={setIsSelected}
                title={"Why are EC2 costs increasing so much?"}
              />
            </div>
          </div>
        )}
      </div>
      {!isSelected && (
        <>
          <div className="w-full">
            <InfoFrame title={"How can I reduce my EC2 costs?"} />
          </div>
          <div className="flex flex-col items-center gap-[24px] self-stretch rounded-[8px] bg-[#F8F9FC)]">
            <LoadingFrame
              initialvalue={"Recive Data..."}
              loadedValue={`Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services ;`}
              setFunction={setFlag}
              isShow={true}
              loadingTime={3000}
            />
          {flag && <div className="bg-[#F8F9FC] rounded-[8px] w-full pr-4 mb-4">
            <UpDownContainer
              handleQueryShow={() =>
                ECqueryShow ? setECQueryShow(false) : setECQueryShow(true)
              }
              queryShow={ECqueryShow}
              title={"Dashboard"}
            />
            {ECqueryShow && (
                <div className="flex flex-col items-center justify-center mb-4  mx-4 rounded-[8px] bg-[#EEF1F6] w-[98%]">
          <div className="flex items-center justify-center w-full">
            <img
              src="/images/Group 5.png"
              alt=""
              className="h-[200px] w-[200px] m-[12px] self-stretch "
            />
          </div>

          <div className="flex justify-between items-center my-[15px] px-4 w-full">
            <div className="flex">
              <span className="ml-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <path
                    d="M10 5H5.5C4.94772 5 4.5 5.44772 4.5 6V10.5C4.5 11.0523 4.94772 11.5 5.5 11.5H10C10.5523 11.5 11 11.0523 11 10.5V6C11 5.44772 10.5523 5 10 5Z"
                    stroke="#0C9556"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 8H2C1.73478 8 1.48043 7.89464 1.29289 7.70711C1.10536 7.51957 1 7.26522 1 7V2.5C1 2.23478 1.10536 1.98043 1.29289 1.79289C1.48043 1.60536 1.73478 1.5 2 1.5H6.5C6.76522 1.5 7.01957 1.60536 7.20711 1.79289C7.39464 1.98043 7.5 2.23478 7.5 2.5V3"
                    stroke="#0C9556"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[#0C9556] text-[12px] ml-[2px] font-normal leading-[normal]">
                Add to Dashboard
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[#D92D20] text-[12px] underline font-normal leading-[normal] ml-[5px]">
              End Prototype
              </p>
            </div>
          </div>
        </div>
            )}
          </div>}
          </div>
        </>
      )}
    </>
  );
}

export default FourFrame;
