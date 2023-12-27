import React from 'react'

function InfoFrame({title}) {
  return (
    <div className="flex  px-4 py-4 items-center gap-4 flex-shrink-0 rounded-[16px] bg-[#E2E9F3]">
    <span>
      <img
        src="/images/unsplash_EZ4TYgXPNWk.png"
        alt=""
        className="w-[32px] h-[32px] rounded-[50%]"
      />
    </span>
    <p className="text-sm font-medium leading-[normal]">
      {title}
    </p>
  </div>
  )
}

export default InfoFrame