import React, {useState} from 'react'

const LoadingFrame = ({ initialvalue, loadedValue, isShow, setFunction = ()=>{}, loadingTime }) => {
    const [ifValue, setIfValue] = useState(true);
    const [ifShow, setIfShow] = useState(true);
    setTimeout(() => {
      setIfValue(false);
      setIfShow(isShow);
      setFunction(true)
    }, loadingTime);
    return (
      <>
        {ifShow && (
          <div className="flex justify-between p-4 my-4 items-center gap-4 self-stretch rounded-[12px] bg-[var(--White-Astuto-White,_#F8F9FC)]">
            <div className="flex items-center w-[94%]">
              <div>
                <img
                  src="https://icones.pro/wp-content/uploads/2021/04/icone-de-nuage-vert.png"
                  alt=""
                  className="w-[32px] h-[32px]  rounded-full"
                />
              </div>
              <div className="pl-4">
                <p className="text-[#373C43]  text-[14px] font-normal leading-[normal]">
                  {ifValue ? initialvalue : loadedValue}
                </p>
              </div>
            </div>
            <div className="w-[6%]">
              {ifValue && <div className="loader"></div>}
            </div>
          </div>
        )}
      </>
    );
  };

export default LoadingFrame