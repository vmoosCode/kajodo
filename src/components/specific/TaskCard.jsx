import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Divider, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import Tasks from '../../pages/Tasks';

function TaskCard({ task, group }) {

    return (
        <Box sx={{ width: "100%", color: "common.dark" }}>
            <Accordion square='false' sx={{ width: "100%", bgcolor: "common.main", boxShadow: 0 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        bgcolor: "common.light", borderLeft: "4px solid", borderColor: task.color,
                        '&.Mui-expanded': { bgcolor: "common.lighter" },
                        '&:hover': { bgcolor: "common.lighter" }

                    }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, width: "100%", px: 1 }}>
                        {/* task title  */}
                        <Box sx={{ display: "flex", gap: 3, alignItems: "end" }}>
                            <Typography variant="title" color="inherit">
                                {task.title}
                            </Typography>

                            {
                                task.subTasks.length > 0 ?
                                    <Tooltip title="This task has sub-tasks">
                                        <Box>
                                            <ShareIcon fontSize='6px' />
                                        </Box>
                                    </Tooltip>
                                    : ' '
                            }

                        </Box>
                        {/* prioruy  */}
                        <Box>
                            <Typography variant="title" color="inherit">
                                {task.priority}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="title" color="inherit">
                                {task.end}
                            </Typography>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "common.lighter", borderLeft: "4px solid", borderColor: task.color }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Typography variant="button" color="inherit">
                                Start Date: {task.start}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="button" color="inherit">
                                End Date: {task.end}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "start", py: 2, alignItems: "center", alignContent: "center", gap: 1 }}>
                        <Checkbox />
                        <Typography variant="caption" color="inherit">{task.details} </Typography>
                    </Box>
                    {
                        (Array.isArray(task.subTasks) && task.subTasks.length > 0) &&
                        <Box >
                            <Typography variant="button" color="inherit">Sub Tasks: &ensp; </Typography>
                            {
                                task.subTasks.map((sub) => (
                                    <Box sx={{ display: "flex", justifyContent: "start", py: 1, px: 4, alignItems: "center" }}>
                                        <Checkbox />
                                        <Typography variant="caption" color="inherit">{sub.content}</Typography>
                                    </Box>
                                ))
                            }
                        </ Box>
                    }
                    <Box sx={{ display: "flex", justifyContent: "start" }}>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default TaskCard