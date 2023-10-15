import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ArrowBackIos } from "@mui/icons-material";

const BackButton = ({resetShowComponent}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-arrow">
      {location.pathname !== "/" && <ArrowBackIos onClick={handleGoBack} />}
    </div>
  );
};

export default BackButton;