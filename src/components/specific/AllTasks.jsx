import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Chip, Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';

import AddTaskForm from '../Form/AddTaskForm';

function GroupTasks({ tasks }) {
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", bgcolor: "common.main", p: 1, borderRadius: "15px", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                <Box>
                    {
                        Array.isArray(group?.tasks) &&
                        group.tasks.map((task) => (

                            <Accordion square='false' sx={{ width: "100%", bgcolor: "common.main", boxShadow: 0 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{ bgcolor: "common.light", borderLeft: "4px solid", borderColor: task.color }}

                                >
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, width: "100%", px: 1 }}>
                                        {/* task title  */}
                                        <Box sx={{ display: "flex", gap: 1, alignItems: "end" }}>
                                            <Typography variant="button" color="initial">
                                                {task.title}
                                            </Typography>
                                            {
                                                task.subTasks.length > 0 &&
                                                <Box>
                                                    <ShareIcon fontSize='6px' />
                                                </Box>
                                            }
                                        </Box>
                                        {/* prioruy  */}
                                        <Box>
                                            {task.priority}
                                        </Box>
                                        <Box>
                                            {task.end}
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: "common.lighter", borderRadius: "0px 0px 10px 10px", borderLeft: "4px solid", borderColor: task.color }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box>
                                            <Typography variant="button" color="initial">
                                                Start Date: {task.start}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="button" color="initial">
                                                End Date: {task.end}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "start", py: 2, alignItems: "center", alignContent: "center", gap: 1 }}>
                                        <Checkbox />
                                        <Typography variant="caption" color="initial">{task.details} </Typography>
                                    </Box>
                                    {
                                        Array.isArray(task.subTasks) &&
                                        <Box >
                                            <Typography variant="button" color="initial">Sub Tasks: &ensp; </Typography>
                                            {
                                                task.subTasks.map((sub) => (
                                                    <Box sx={{ display: "flex", justifyContent: "start", py: 1, px: 4, alignItems: "center" }}>
                                                        <Checkbox />
                                                        <Typography variant="caption" color="initial">{sub.content}</Typography>
                                                    </Box>
                                                ))
                                            }
                                        </ Box>
                                    }
                                    <Box sx={{ display: "flex", justifyContent: "start" }}>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Box>

                <Box sx={{ width: "100%" }}>
                    <AddTaskForm />
                </Box>
            </Box >
        </>

    )
}

export default GroupTasks