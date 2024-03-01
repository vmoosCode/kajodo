import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip'
import { Box } from '@mui/material';
import { useFormikContext } from 'formik';
import { useState } from 'react';


export default function MenuWrapper({
    btnName, items, name, tooltipLabel, colors = false
}) {
    const [selected, setSelected] = useState('')
    const { setFieldValue } = useFormikContext()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {
        console.log(item)
        setAnchorEl(null);
        setSelected(item)
        setFieldValue(name, item)
    };
    const handleCloseNoSelect = () => {
        setAnchorEl(null);

    };

    return (
        <div>
            <Tooltip title={tooltipLabel}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: colors && selected }}
                >
                    {
                        (!colors && selected !== '') ? selected : btnName
                    }

                </Button>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseNoSelect}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    items.map((item, index) => (
                        colors ?
                            <MenuItem key={index} onClick={() => handleClose(item)} >
                                <Box sx={{ width: "50px", bgcolor: item }}>
                                    &emsp;
                                </Box>
                            </MenuItem>
                            :
                            <MenuItem key={index} onClick={() => handleClose(item)}>{item}</MenuItem>
                    ))
                }
            </Menu>
        </div >
    );
}