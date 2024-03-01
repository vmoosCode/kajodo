import React from 'react'
import TaskCard from '../components/specific/TaskCard'
import { useTasksContext } from '../context/TasksContext'
import { Box, Typography } from '@mui/material'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function Tasks() {
    const data = useTasksContext()

    return (
        <Box sx={{ width: "66%", height: "100%", borderRadius: "15px", display: 'flex', flexDirection: 'column', justifyContent: "space-between", gap: 1 }}>
            <Box sx={{ width: "100%", maxHeight: "50px" }} >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", width: "100%", bgcolor: "common.main", height: "50px", p: 1, borderRadius: "15px" }}>
                    <TaskAltIcon fontSize="medium" color="inherit" />
                    <Typography variant="header" color="initial">
                        Tasks
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "start", width: "100%", bgcolor: "common.main", height: "100%", p: 1, borderRadius: "15px", flexDirection: "column" }}>
                {
                    data.map((group) => (
                        Array.isArray(group.tasks) &&
                        group.tasks.map((task) => (
                            <TaskCard task={task} group={group} />
                        ))
                    ))
                }
            </Box>
        </Box >

    )
}

export default Tasks