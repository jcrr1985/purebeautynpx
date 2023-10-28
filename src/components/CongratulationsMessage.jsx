import { Snackbar } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const CongratulationMessage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          Congratulations! You've bought X items!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CongratulationMessage;
