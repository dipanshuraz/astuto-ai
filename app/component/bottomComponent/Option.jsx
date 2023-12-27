import React from 'react'

const Option = ({ title, disable = false, setIsShow }) => {
    return (
      <button onClick={()=>setIsShow(false)} disabled={disable} className={`flex w-[392px] h-[56px] mr-[16px] mb-[16px]  px-[24px] py-[12px] items-center gap-[16px] flex-shrink-0 rounded-[16px] border-[1px] border-[solid] border-[var(--Grey-G4,#BCC1C8)] ${disable? "bg-[#F1F3F9]" : "bg-[rgba(255,_255,_255,_0.80)]"}`}>
        <p className="text-[14px] text-[#373C43] font-normal text-[#777]">
          {title}
        </p>
      </button>
    );
  };

export default Option