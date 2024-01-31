import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../assets/css/Accordions.css'
export default function Accordions({ data }) {
  return (
    <div className='Accordion-space'>
      {data.map((accordion, index) => (
        <Accordion key={index} sx={{paddingTop:"5px"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            className='Accordion-bg'
          >
            {accordion.title}
          </AccordionSummary>
          <AccordionDetails>
            <div dangerouslySetInnerHTML={{ __html: accordion.content }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
