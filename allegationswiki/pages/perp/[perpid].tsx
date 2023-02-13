import { useRouter } from "next/router";
import perpsDataRetrievalUtil from "../../lib/perpDataRetrievalUtils";
import PerpInfoCard from "@/components/perps/PerpInfoCard";

const SpecificPerp = ({ perpInfo }) => {
  const router = useRouter();
  const { perpid } = router.query;
  const myPerpCancelled = perpInfo.svcout >= 0.65 || perpInfo.lrout >= 0.65;
//   const imgBorderStyle = myPerpCancelled ? "#8B0000" : "#006400";
//   const imgStyle = { border: "7px solid " + imgBorderStyle };
//   const nameStyle = { fontSize: "30px" };
//   const allegationStatusStyle = { size: "10px", color: imgBorderStyle };
//   const allegationStatusText = myPerpCancelled ? "CANCELLED" : "Unproblematic";
//   const allegationSocialStatusText = myPerpCancelled ? "Cancelled" : "Good";


  if (!perpInfo) {
    return <div className="pp-loading">LOADING</div>;
  } else if (perpInfo === "Not Found") {
    return <div className="pp-notfound">NOT FOUND</div>;
  } else {
    return (
      <>
        <PerpInfoCard perpInfo={perpInfo} myPerpCancelled={myPerpCancelled} />
        <div className="bodyGap"></div>
        <div className="main-footer"></div>
      </>
    );
  }
};

export default SpecificPerp;

export async function getStaticProps(context) {
  const { params } = context;
  const myData = await perpsDataRetrievalUtil.getSpecificPerp(params.perpid);
  if(!myData) return {notFound:true}
  return {
    props: {
      perpInfo: myData,
    },
    revalidate: 100,
  };
}

// export async function getStaticPaths(){
// 	return {
//         paths: [{parmas: {perpid: 'Salvatore_Testa'}},
//                 {params: {perpid: 'Sylvie_Testud'}}
//     ],
//         fallback: true
//     }
// }

export async function getStaticPaths() {

const myPerps = await perpsDataRetrievalUtil.getTopPerps();

const myPerpIds = myPerps.map((perp) => {
  return { params: { perpid: perp.WEBID } };
});

  return {
    paths: myPerpIds,
    fallback: 'blocking',
  };
}
