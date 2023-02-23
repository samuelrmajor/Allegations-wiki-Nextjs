import { useState } from "react";
import perpsService from '../../services/perpsService'
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";


const PerpVotingComponent = ({ perpInfo, myPerpCancelled}) => {
    const [perpVoteStage, setPerpVoteStage] = useState("Q1");
    const [displayQuestions, setDisplayQuestions] = useState(true)
  const handleQ1Click = async (event) =>{
    event.preventDefault();
    if (event.target.name === 'cancelledQ1') {
      setPerpVoteStage('Q2')
      const cancelledResponse = await perpsService.votePerp(perpInfo.WEBID, 0);
    }

    else {
      setPerpVoteStage("Done")
      setTimeout(() => {
          setDisplayQuestions(false);
       }, 3000);
    }
//test
    if (event.target.name==='unsureQ1'){
        const cancelledResponse = await perpsService.votePerp(perpInfo.WEBID, 1);
    }

    else if (event.target.name === "notCancelledQ1") {
      const cancelledResponse = await perpsService.votePerp(perpInfo.WEBID, 2);
    }
  }

  const handleQ2Click = async (event) => {
        event.preventDefault();

        if (event.target.name === "sexualQ2") {
          const cancelledResponse = await perpsService.votePerp(
            perpInfo.WEBID,
            3
          );
        }
        else if (event.target.name === "domesticQ2") {
          const cancelledResponse = await perpsService.votePerp(
            perpInfo.WEBID,
            4
          );
        }
        else if (event.target.name === "discQ2") {
          const cancelledResponse = await perpsService.votePerp(
            perpInfo.WEBID,
            5
          );
        } else {
            const cancelledResponse = await perpsService.votePerp(
              perpInfo.WEBID,
              6
            );
        }
      setPerpVoteStage("Done");
      setTimeout(() => {
        setDisplayQuestions(false);
      }, 3000);
      //Submit to Database
    };

    const handleQ3Click = async (event) => {
      event.preventDefault();

      console.log("Clicked q3");
    };


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#eeeeee",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#C45956",
    },
  },
});

  const q1Form = (
    <div className="q1">
      <Button variant="contained"
        name="cancelledQ1"
        style={{ color: "red" }}
        onClick={handleQ1Click}
      >
        Cancelled
      </Button>
      <Button variant="contained"
        name="unsureQ1"
        style={{ color: "Orange" }}
        onClick={handleQ1Click}
      >
        Unsure
      </Button>
      <Button variant="contained"
        name="notCancelledQ1"
        style={{ color: "Green" }}
        onClick={handleQ1Click}
      >
        Not Cancelled
      </Button>
    </div>
  );

  const q2Form = (
    <div className="q2">
      <Button
        variant="contained"
        color="secondary"
        name="sexualQ2"
        onClick={handleQ2Click}
      >
        Sexual Misconduct
      </Button>
      <Button
        variant="contained"
        color="secondary"
        name="domesticQ2"
        onClick={handleQ2Click}
      >
        Domestic Violence
      </Button>
      <Button
        variant="contained"
        color="secondary"
        name="discQ2"
        onClick={handleQ2Click}
      >
        Discrimination
      </Button>
      <Button
        variant="contained"
        color="secondary"
        name="otherQ2"
        onClick={handleQ2Click}
      >
        Other
      </Button>
    </div>
  );

  const q3Form = (
      <form>
        <Button variant="contained" onClick={handleQ1Click}>q1Form</Button>
      </form>
    );

  const doneForm = (
    <span>
       
    </span>
  );
      const currentQuestion =
          perpVoteStage === "Q1"
            ? 'How do you view this person?'
            : perpVoteStage === "Q2"
            ? 'What offenses has this person comitted?'
            : perpVoteStage === "Q3"
            ? q3Form
            : 'Thank you for submitting.';

    const currentQuestionForm = perpVoteStage === "Q1" ? q1Form : perpVoteStage === 'Q2' ? q2Form : perpVoteStage === 'Q3' ? q3Form : doneForm

    const myStatusStyles = myPerpCancelled
      ? {
          background: "linear-gradient(to bottom right, #3a2727,#8B0000)",
          boxShadow: "0 0 10px #8B0000",
        }
      : {
          background: "linear-gradient(to bottom right, #273a2d,#006400)",
          boxShadow: "0 0 10px #006400",
        };

  //Style
  return (
    <div>
      {displayQuestions && (
        <div className="pp-info-vote" style={myStatusStyles}>
          <div className="pp-info-vote-question">
            <span>{currentQuestion}</span>
          </div>
          <div className="pp-info-vote-options">
            <ThemeProvider theme = {theme}>{currentQuestionForm}</ThemeProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerpVotingComponent;

