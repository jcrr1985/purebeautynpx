import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions({ foundItem }) {
  const [expanded, setExpanded] = useState(null); // por defecto todos cerrados

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null); // pasado a null cuando se colapsa
  };

  return (
    <div className="idp--accordion-container">
      {foundItem &&
        foundItem.deepDescription2.map((item, index) => (
          <Accordion
            key={index} 
            expanded={expanded === index} // Verificar si este acordeón está expandido
            onChange={handleChange(index)} // Pasar el índice al manejador de cambios
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`} 
              id={`panel${index}bh-header`} 
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
