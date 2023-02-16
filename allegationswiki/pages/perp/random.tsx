import { useRouter } from "next/router";
import {useState, useEffect } from "react";
import perpsService from "../../services/perpsService";
import PerpInfoCard from "@/components/perps/PerpInfoCard";

const RandomPerp = () => {

  ///UseEffect/State

  
  //   const imgBorderStyle = myPerpCancelled ? "#8B0000" : "#006400";
  //   const imgStyle = { border: "7px solid " + imgBorderStyle };
  //   const nameStyle = { fontSize: "30px" };
  //   const allegationStatusStyle = { size: "10px", color: imgBorderStyle };
  //   const allegationStatusText = myPerpCancelled ? "CANCELLED" : "Unproblematic";
  //   const allegationSocialStatusText = myPerpCancelled ? "Cancelled" : "Good";
    const [perpInfo, setPerpInfo] = useState('');

    useEffect(() => {
      let isMounted = true;
        perpsService
          .getRandomPerp()
          .then((myPerp) => {
            if (isMounted) setPerpInfo(myPerp[0]);
          });
      return () => {
        isMounted = false;
      };
    }, []);



  if (!perpInfo) {
    return <div className="pp-loading">LOADING</div>;
  } else if (perpInfo === "Not Found") {
    return <div className="pp-notfound">NOT FOUND</div>;
  } else {
    // const myPerpCancelled = perpInfo.svcout >= 0.65 || perpInfo.lrout >= 0.65;
    const myPerpCancelled = true;

    return (
      <>
        <PerpInfoCard perpInfo={perpInfo} myPerpCancelled={myPerpCancelled} />
        <div className="bodyGap"></div>
        <div className="main-footer"></div>
      </>
    );
  }
};

export default RandomPerp;


