import { Box, Typography, IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import { GroupBar } from '../components/specific/GroupBar';
import GroupTasks from '../components/specific/GroupTasks';
import AddGroupForm from '../components/Form/AddGroupForm';
import { useTasksContext } from '../context/TasksContext';

function Groups() {
    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedGroupObj, setSelectedGroupObj] = useState({})
    // const groupsApi = useContext(TasksContext)
    const groupsApi = useTasksContext()

    const handleGroupSelection = (groupId) => {
        setSelectedGroup(groupId)
        const filterSelectedGroup = groupsApi.filter(group => group['id'] === groupId);
        console.log(filterSelectedGroup)
        setSelectedGroupObj(filterSelectedGroup[0])

    }
    return (
        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
            {/* header container  */}
            <Box sx={{ width: "100%", height: "50px" }} >
                <Box sx={{
                    borderRadius: "15px", bgcolor: "common.main", p: 1, width: "33%",
                    display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: 24, height: "100%"
                }}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", height: "100%" }}>
                        <WorkspacesOutlinedIcon />
                        <Typography variant="header" color="initial">
                            Groups
                        </Typography>
                    </Box>

                </Box>
            </Box>
            {/* Groups content container  */}
            <Box sx={{ width: "100%", height: "100%", display: "flex", gap: 4 }} >
                {/* groups list with add group form  */}
                <Box sx={{ width: "33%", height: "100%", bgcolor: "common.main", borderRadius: "15px", display: "flex", p: 1, justifyContent: "space-between", flexDirection: "column" }}>
                    <Stack sx={{ width: "100%" }}>
                        {
                            groupsApi.map((group) => (
                                <GroupBar group={group} key={group.id} handleGroupSelection={handleGroupSelection} selectedGroup={selectedGroup} />
                            ))
                        }
                    </Stack>
                    <Box sx={{ width: "100%" }}>
                        <AddGroupForm />
                    </Box>
                </Box>
                {


                    Object.keys(selectedGroupObj).length !== 0 &&
                    <Box sx={{ width: "50%" }}>
                        <GroupTasks group={selectedGroupObj || []} />
                    </Box>
                }
            </Box>
        </Box>

    )
}

export default Groups