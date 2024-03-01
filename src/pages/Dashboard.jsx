import { Box } from '@mui/material'
import React from 'react'

function Dashboard() {
    return (
        <>
            <Box sx={{ bgcolor: "common.main", p: 2 }}>

                <div>Dashboard</div>
                <ul>
                    <li>tasks counts</li>
                    <li>progress, ratio of finished tasks</li>
                    <li>tasks near to target date(1-2 days)</li>
                    <li></li>
                </ul>
            </Box>
        </>
    )
}

export default Dashboard