import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function NavBar() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])
    return (
        <Box sx={{
            width: "100%", height: "100%", display: "flex",
            flexDirection: "row", gap: 1,
            borderRadius: "15px", alignItems: "center", justifyContent: "space-between",
            p: 2
        }}>
            <Box>
                <Typography variant="h5Bold" color="initial">
                    {date.toLocaleTimeString()}
                </Typography>
            </Box>

        </Box>
    )
}

export default NavBar