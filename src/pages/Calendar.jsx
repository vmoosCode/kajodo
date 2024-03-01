import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Box } from '@mui/material'

function Calendar() {
    return (
        <div>
            <Box sx={{ width: "100vh", height: "100%", bgcolor: "common.main", borderRadius: "15px", p: 2 }}>

                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    events={[
                        { title: 'event 1', date: '2024-03-01' },
                        { title: 'event 2', date: '2024-03-02' }
                    ]}
                    height="auto"
                />
            </Box>
        </div>
    )
}

export default Calendar