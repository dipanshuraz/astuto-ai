import React, { useState } from "react";
import UpDownContainer from "./UpDownContainer";
import Option from "../bottomComponent/Option";
import InfoFrame from "./InfoFrame";
import LoadingFrame from "./LoadingFrame";
import FourFrame from "./FourFrame";

function ECcost() {
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
                title={"How can I reduce my EC2 costs?"}
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
          <div className="flex flex-col items-center my-4 self-stretch rounded-[8px] bg-[#F8F9FC)]">
            <LoadingFrame
              initialvalue={"Recive Data..."}
              loadedValue={`You can save $2500 per month overall in EC2 costs. Click here to access a detailed report.Here are your top 2 saving areas:`}
              setFunction={setFlag}
              isShow={true}
              loadingTime={3000}
            />
          {flag && <div className="bg-[#F8F9FC] rounded-[8px] w-full  pr-4 mb-4">
            <UpDownContainer
              handleQueryShow={() =>
                ECqueryShow ? setECQueryShow(false) : setECQueryShow(true)
              }
              queryShow={ECqueryShow}
              title={"Top 2 saving areas"}
            />
            {ECqueryShow && (
                <div className="w-full bg-[#F8F9FC]">
                    <div className="flex px-4 py-4 mx-4 mb-4 flex-col items-start self-stretch rounded-[8px] border-[2px] border-[solid] border-[var(--Dark-D1,#0C9556)] bg-[#F8F9FC]">
                        <span className="text-[14px] font-bold leading-[normal]">Bucket xyz-logs-1 (production account #12345)</span>
                        <p className="text-[14px] font-normal leading-[normal]">This bucket has 1 TB of data, and it does not use any storage tiers. There is more than 500 GB of data that has not been accessed. You can save $1000 by deleting that data or $700 by moving them to lower tier.</p>
                    </div>
                    <div className="flex px-4 py-4 mx-4 mb-4  flex-col items-start self-stretch rounded-[8px] border-[2px] border-[solid] border-[var(--Dark-D1,#0C9556)] bg-[#F8F9FC]">
                        <span className="text-[14px] font-bold leading-[normal]">Bucket abc-user-1 (production account #12345) </span>
                        <p className="text-[14px] font-normal leading-[normal]">This bucket has abnormally high reads and writes cost of $5000 per month, increasing by the day. Consider reading smaller chunks of data or changing your storage that is more cost effective for reads and writes.</p>
                    </div>
                </div>
            )}
          </div>}
          {
                flag && <FourFrame/>
            }
          </div>
        </>
      )}
    </>
  );
}

export default ECcost;
