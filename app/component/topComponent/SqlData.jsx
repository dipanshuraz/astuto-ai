import React,{useState} from 'react'
import UpDownContainer from './UpDownContainer';

const SqlData = () => {
    const [queryShow, setQueryShow] = useState(true);
  
    const handleQueryShow = () => {
      queryShow ? setQueryShow(false) : setQueryShow(true);
    };
    return (
      <div className="flex flex-col px-0  my-4 items-center gap-[24px] self-stretch rounded-[8px] bg-[#F8F9FC]">
        <UpDownContainer handleQueryShow={handleQueryShow} queryShow={queryShow} title={'Query'}/>
        {/* Query inside CodeBox */}
        {queryShow && (
          <div className="px-4 flex flex-col w-full pb-4">
            <div className="flex flex-col className='text-[#E2E9F3] text-sm font-normal leading-5' p-4  items-start gap-3 self-stretch rounded-[8px] bg-[#182330]">
              <span className="text-[#4A5FC9] text-sm font-normal leading-5">
                1. SELECT
              </span>
              <span className="text-[#E2E9F3] text-sm font-normal leading-5">
                2. service,
              </span>
              <span className="text-[#E2E9F3] text-sm font-normal leading-5">
                3. SUM(cost) AS total_cost
              </span>
              <span className="text-[#4A5FC9] text-sm font-normal leading-5">
                4. FROM
              </span>
              <span className="text-[#E2E9F3] text-sm font-normal leading-5">
                5. cloud_costs
              </span>
              <span className="text-[#4A5FC9] text-sm font-normal leading-5">
                6. WHERE
              </span>
              <span className="text-[#E2E9F3] text-sm font-normal leading-5">
                7. account_type = 'production (#24542)'
              </span>
              <span className="text-[#4A5FC9] text-sm font-normal leading-5">
                8. GROUP BY
              </span>
            </div>
            <div className="flex justify-between items-center mt-4 px-4">
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
                <p className="text-[#0C9556] text-xs ml-[3px] font-normal leading-[normal]">
                  Copy Query
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-[#8F97A3] text-xs font-medium leading-[normal] mr-[10px]">
                  Last run on 12 Oct, 2023
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                  >
                    <path
                      d="M10.245 4C9.99142 3.28339 9.56043 2.6427 8.99227 2.13771C8.4241 1.63272 7.73727 1.27988 6.99586 1.11213C6.25445 0.944375 5.48262 0.96717 4.7524 1.17839C4.02219 1.3896 3.35737 1.78236 2.82 2.32L0.5 4.5M11.5 6.5L9.18 8.68C8.64263 9.21764 7.97781 9.6104 7.2476 9.82161C6.51738 10.0328 5.74555 10.0556 5.00414 9.88787C4.26273 9.72012 3.5759 9.36728 3.00773 8.86229C2.43957 8.3573 2.00858 7.71661 1.755 7"
                      stroke="#0C9556"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-[#0C9556] text-xs font-normal leading-[normal] ml-[5px]">
                  Re-run Query
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default SqlData