import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import perpsService from "../../services/perpsService";


const RandomPerp = () => {
const router = useRouter();
const [currentPerp, setCurrentPerp] = useState(router.query ? router.query : 'HOME')
const [randomPerpInit, setPerpRandom] = useState("")

useEffect(() => {
    perpsService.getRandomPerp().then((myPerp) => {
        setPerpRandom(myPerp[0].WEBID)
      
})}, [currentPerp]);


const handleClick = (e) => {
  e.preventDefault();
  router.push(`/perp/${randomPerpInit}`);
  setCurrentPerp(randomPerpInit)
};



  const padding = {
    padding: 5,
    fontSize: 22,
    textDecoration: "none",
  };

  return (
    <div className="header-request-new">
      <Button style={padding} onClick={handleClick}>
        Random Perp
      </Button>
    </div>
  );
}

export default RandomPerp;
