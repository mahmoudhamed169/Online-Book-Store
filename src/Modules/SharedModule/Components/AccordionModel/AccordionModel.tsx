import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";

export default function AccordionModel({ title }) {
  return (
    <Accordion
      sx={{
        pt: 1,
        pb: 1,
        mb: 2,
        width: 250,
        color: "#393280",
        fontWeight: 600,
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: "#393280", fontWeight: 600 }} />
        }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          ex? Laboriosam quos repellat ad nihil?
        </p>
      </AccordionDetails>
    </Accordion>
  );
}
