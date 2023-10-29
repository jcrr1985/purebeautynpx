import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ArrowBackIos } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const BackButton = ({ resetShowComponent }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-arrow">
      {location.pathname !== "/" && (
        <ChevronLeftIcon className="chevron-icon" onClick={handleGoBack} />
      )}
    </div>
  );
};

export default BackButton;
