import { Avatar, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/img/logo.jpeg'
import RouteSection from './RouteSection';
import AddTaskDrawer from '../specific/AddTaskDrawer';
import AddTaskIcon from '@mui/icons-material/AddTask';

import CustomModal from '../util/CustomModal';
function SideMenu() {
    const [openAddTask, setOpenAddTask] = useState(false)

    return (

        <Box sx={{ display: "flex", height: "100%", flexDirection: "column", gap: 2, flex: "1 1 auto" }}>
            {/* logo and menu collpase btn  */}
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                {/* logo  */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar alt="Remy Sharp" src={logo} sizes='large' />
                    <Typography variant="title" color="common.dark">KajoDo</Typography>
                </Box>
                {/* collapse btn  */}
                <Box>
                    {/* <IconButton size="large">
                            <MenuIcon />
                        </IconButton> */}
                </Box>
            </Box>
            {/* routes  */}
            <Box sx={{ height: "100%", width: "100%" }}>
                <RouteSection setOpenAddTask={setOpenAddTask} />
            </Box>

            {/* <AddTaskDrawer openAddTask={openAddTask} setOpenAddTask={setOpenAddTask} /> */}


        </Box >
    )
}

export default SideMenu