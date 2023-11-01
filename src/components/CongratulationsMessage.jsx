import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import DealButton from "./DealButton";

const CongratulationMessage = ({ setItemCounters }) => {
  console.log(
    "🚀 ~ file: CongratulationsMessage.jsx:6 ~ CongratulationMessage ~ setItemCounters:",
    setItemCounters
  );
  const [open, setOpen] = useState(false);
  console.log(setItemCounters); // Log to check if setItemCounters is passed correctly

  useEffect(() => {
    setItemCounters({});
  }, [setItemCounters]);

  return (
    <div className="congratulationsMessage-content-wrapper">
      <p className="text-italianno">Tahnk you for purchase</p>
      <DealButton message="Continue Shopping" />
    </div>
  );
};

export default CongratulationMessage;
