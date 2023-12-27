import React,{useState} from "react";
import LoadingFrame from "./topComponent/LoadingFrame";
import SqlData from "./topComponent/SqlData";
import PieChartFrame from "./topComponent/PieChartFrame";
import InfoFrame from "./topComponent/InfoFrame";
import ECcost from "./topComponent/ECcost";

function Top() {

    const [isSql, setIsSql] = useState(false)
    const [isPieChart, setIsPieChart] = useState(false)
    
  return (
    <div className="w-full">
      {/* Intro Frame */}
      <InfoFrame title={'Top cloud costs by services in production account (#24542)'} />

      {/* Query Box */}
      <LoadingFrame
        initialvalue={"Generating SQL Query..."}
        loadedValue={""}
        isShow={false}
        setFunction={setIsSql}
        loadingTime={2000}
      />
      {isSql && <SqlData />}

      {/* Pie Chat Graph Frame */}
      {isSql && <LoadingFrame
        initialvalue={"Compiling Data..."}
        loadedValue={
          "Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services ;"
        }
       setFunction={setIsPieChart}
        isShow={true}
        loadingTime={4000}
      />}
    
      {isPieChart && <PieChartFrame />}

      {/* Reduce My EC Cost Frame */}
      {isPieChart &&  <ECcost/>}
     
    </div>
  );
}

export default Top;
