import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import "./Filters.css"

function Filters() {
    return (
        <div className='filters'>
            {/* header */}
            <div>
                <Typography component={'h4'} variant='h5'>Filters</Typography>
            </div>

            {/* filters */}
            <div className='filters_container'>
                <Accordion variant='outlined' sx={{ marginTop: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="filter-header"
                    >
                        <Typography>Filter -1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Filter Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant='outlined' sx={{ marginTop: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="filter-header"
                    >
                        <Typography>Filter -1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Filter Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant='outlined' sx={{ marginTop: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="filter-header"
                    >
                        <Typography>Filter -1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Filter Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant='outlined' sx={{ marginTop: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="filter-header"
                    >
                        <Typography>Filter -1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Filter Here</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion variant='outlined' sx={{ marginTop: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="filter-header"
                    >
                        <Typography>Filter -1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Filter Here</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Filters