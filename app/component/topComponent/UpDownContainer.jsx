import React from 'react'

function UpDownContainer({handleQueryShow, queryShow, title}) {
  return (
    <div
      onClick={handleQueryShow}
      className="w-full flex items-center justify-between px-4 m-4"
    >
      <span className="text-[#8F97A3] text-[12px] font-medium leading-[normal] w-[150px]">
        {title}
      </span>
      <div className="h-[1px] w-[100%] bg-[#bcc1c8] mx-[8px]"></div>
      <span>
        {queryShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M12 10.5L8 6.5L4 10.5"
              stroke="#8F97A3"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#8F97A3"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  )
}

export default UpDownContainer