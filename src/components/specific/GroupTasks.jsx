import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Chip, Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import AddGroupForm from '../Form/AddGroupForm';
import AddTaskForm from '../Form/AddTaskForm';
import TaskCard from './TaskCard';

function GroupTasks({ group }) {
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", bgcolor: "common.main", p: 1, borderRadius: "15px", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                <Box>
                    {
                        Array.isArray(group?.tasks) &&
                        group.tasks.map((task) => (

                            <TaskCard group={group} task={task} />
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