import { Chip, Radio, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const GroupBar = (({ group, selectedGroup, handleGroupSelection }) => {
    const handleChange = (groupId) => {
        handleGroupSelection(groupId);
    };
    return (
        <Box sx={{ p: 0.5 }}>
            <Box sx={{
                cursor: "pointer", width: "100%", display: "flex", alignItems: "center", bgcolor: selectedGroup === group.id && "common.lighter", py: 0.5, px: 1, borderRadius: "15px", justifyContent: "space-between",
                '&:hover': { outline: "2px solid", outlineColor: "primary.light" }
            }}
                onClick={() => handleChange(group.id)}
            >
                <Box>
                    <Radio
                        checked={selectedGroup === group.id}
                        onChange={() => handleChange(group.id)}
                        value={group.id}
                        name={`radio-buttons-${group.name}`}
                    />
                    <Typography variant="caption" color="inherit" gutterBottom={false}>
                        {group.name}
                    </Typography>
                </Box>
                <Typography variant="sideNav" color="inherit" gutterBottom={false}>
                    {group.priority}
                </Typography>
                <Chip label={group.tasks.length} sx={{
                    bgcolor: group.color,
                    '& .MuiChip-label': {
                        fontSize: "12px", fontWeight: "bold",
                        "& .MuiChip-root": {
                            border: "1px solid black",
                            borderRadius: "10x"
                        }
                    }
                }} />
            </Box>
        </Box>
    )
}
)