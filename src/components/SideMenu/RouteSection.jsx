import React from 'react'
import { routes } from '../../config/routes';
import { Box, Chip, Paper, Stack, Tooltip, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CustomModal from '../util/CustomModal';
import AddTaskForm from '../'
function RouteSection({ setOpenAddTask }) {

    const Item = ({ item }) => (
        <Tooltip title={true && item.display_name} placement="right-end">
            <Link to={item.path} style={{ textDecoration: 'none' }}  >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "common.dark", p: 1, fontSize: "18pt", "&:hover": { bgcolor: "common.light", borderRadius: "10px" } }}>
                    {item.icon}
                    <Typography variant="sideNav" color="inherit">
                        {item.display_name}
                    </Typography>
                </Box>
            </Link>
        </Tooltip>
    )


    const Group = ({ groups }) => {
        return (
            <Paper sx={{ mt: 2, bgcolor: "bgLight.main", p: 1.5, borderRadius: "15px" }} elevation={4}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="titleBold" color="dark.main">Groups</Typography>
                </Box>
                <Box sx={{
                    overflow: "auto",
                    scrollbarWidth: 'thin',

                    height: "200px"
                }} >
                    <Stack spacing={2}>
                        {
                            groups.map((group) => (
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <CircleIcon fontSize='small' color={group.color} />
                                        <Typography variant="title2" color="inherit">{group.name}</Typography>
                                    </Box>
                                    <Link>
                                        <Chip label={group.tasks_count} color={group.color} />
                                    </Link>
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper >
        )
    }

    const groups = [
        {
            name: "group1",
            tasks_count: 4,
            color: "dark"
        },
        {
            name: "group2",
            tasks_count: 4,
            color: "bgMenu"
        },
        {
            name: "group3",
            tasks_count: 4,
            color: "success"
        },
        {
            name: "group4",
            tasks_count: 4,
            color: "warning"
        },
        {
            name: "group1",
            tasks_count: 4,
            color: "dark"
        },
        {
            name: "group2",
            tasks_count: 4,
            color: "bgMenu"
        },
        {
            name: "group3",
            tasks_count: 4,
            color: "success"
        },
        {
            name: "group4",
            tasks_count: 4,
            color: "warning"
        },
    ]

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "start", height: "100%" }}>
            {/* links to pages  */}
            <Box sx={{ height: "100%", width: "100%" }}>
                <Stack spacing={1}>
                    {
                        routes.map((route) => (
                            <Box key={route.id}>
                                {(route.display_name && route.menu) && < Item item={route} />}
                                {Array.isArray(route.children) &&
                                    (
                                        route.children.map((child) => (
                                            child.menu &&
                                            < Item item={child} key={child.id} />
                                        ))
                                    )}
                            </Box>
                        ))
                    }
                    {/* tasks groups  */}
                </Stack>
            </Box>
            {/* <Group groups={groups} /> */}

            <Box sx={{ height: "50%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>

                    <CustomModal icon={<AddTaskIcon size="large" sx={{ fontSize: 64, color: "primary.dark" }} />} >
                        <AddTaskForm></AddTaskForm>
                    </CustomModal>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                    <Stack spacing={1}>
                        <Tooltip placement="right" title="Settings">
                            <IconButton >
                                <TuneIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="right" title="Logout">
                            <IconButton >
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default RouteSection