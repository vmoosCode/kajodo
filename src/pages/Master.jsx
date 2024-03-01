import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../config/theme';
import { CssBaseline, IconButton, Typography } from "@mui/material";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import SideMenu from '../components/SideMenu/SideMenu';
import NavBar from '../components/layout/NavBar';
import wallpaper1 from '../assets/img/wallpaper7.jpg'
import { TasksContext } from '../context/TasksContext';

const data = [
    {
        id: 1,
        name: "group1",
        priority: "Major",
        color: "#cacaca",
        tasks: [
            {
                title: "task 1",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum!",
                start: "25/5/2014",
                end: "28/5/2014",
                color: "#cacaca",
                priority: "Major",
                group: {
                    name: "FinixCloud Project",
                    color: "warning"
                },
                subTasks: [
                    {
                        content: "task 1 sub task 1",
                        end: "25/5/2014"
                    },
                    {
                        content: "task 1 sub task 2",
                        end: "26/5/2014"
                    },
                    {
                        content: "task 1 sub task 3",
                        end: "26/5/2014"
                    },
                ],
                notes: [
                    { note: "make sure to do a b c" },
                    { note: "make sure to do x y z" },
                    { note: "subtask 2 depend on subtask 3" },
                ]
            },
            {
                title: "task 2",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum!",
                start: "25/5/2014",
                end: "28/5/2014",
                priority: "Major",
                color: "#ffbe03",
                group: {
                    name: "FinixCloud Project",
                    color: "success"
                },
                subTasks: [
                    {
                        content: "task 2 sub task 1",
                        end: "25/5/2014"
                    },
                    {
                        content: "task 2 sub task 2",
                        end: "26/5/2014"
                    },
                    {
                        content: "task 2 sub task 3",
                        end: "26/5/2014"
                    },
                ],
                notes: [
                    { note: "make sure to do a b c" },
                    { note: "make sure to do x y z" },
                    { note: "subtask 2 depend on subtask 3" },
                ]
            },
            {
                title: "task 3",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum!",
                start: "25/5/2014",
                end: "28/5/2014",
                priority: "Major",
                color: "#0000fb",
                group: {
                    name: "FinixCloud Project",
                    color: "primary"
                },
                subTasks: [

                ],
                notes: [
                    { note: "make sure to do a b c" },
                    { note: "make sure to do x y z" },
                    { note: "subtask 2 depend on subtask 3" },
                ]
            },
        ]
    },
    {
        id: 2,
        name: "group2",
        priority: "Major",
        color: "#88e310",
        tasks: [
            {
                title: "task 1",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum!",
                start: "25/5/2014",
                end: "28/5/2014",
                color: "#f53434",
                priority: "critcal",
                group: {
                    name: "FinixCloud Project",
                    color: "warning"
                },
                subTasks: [
                    {
                        content: "task 1 sub task 1",
                        end: "25/5/2014"
                    },
                    {
                        content: "task 1 sub task 2",
                        end: "26/5/2014"
                    },
                    {
                        content: "task 1 sub task 3",
                        end: "26/5/2014"
                    },
                ],
                notes: [
                    { note: "make sure to do a b c" },
                    { note: "make sure to do x y z" },
                    { note: "subtask 2 depend on subtask 3" },
                ]
            },

        ]
    },
    {
        id: 3,
        name: "group3",
        priority: "Major",
        color: "#7745ff",
        tasks: [
            {
                title: "task 1",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum!",
                start: "25/5/2014",
                end: "28/5/2014",
                group: {
                    name: "FinixCloud Project",
                    color: "warning"
                },
                subTasks: [
                    {
                        content: "task 1 sub task 1",
                        end: "25/5/2014"
                    },
                    {
                        content: "task 1 sub task 2",
                        end: "26/5/2014"
                    },
                    {
                        content: "task 1 sub task 3",
                        end: "26/5/2014"
                    },
                ],
                notes: [
                    { note: "make sure to do a b c" },
                    { note: "make sure to do x y z" },
                    { note: "subtask 2 depend on subtask 3" },
                ]
            },
            {
                title: "task 2",
                details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum!",
                start: "25/5/2014",
                end: "28/5/2014",
                group: {
                    name: "FinixCloud Project",
                    color: "success"
                },
                subTasks: [
                    {
                        content: "task 2 sub task 1",
                        end: "25/5/2014"
                    },
                    {
                        content: "task 2 sub task 2",
                        end: "26/5/2014"
                    },
                    {
                        content: "task 2 sub task 3",
                        end: "26/5/2014"
                    },
                ],
                notes: [
                    { note: "make sure to do a b c" },
                    { note: "make sure to do x y z" },
                    { note: "subtask 2 depend on subtask 3" },
                ]
            },

        ]
    },
]


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        w: width,
        h: height
    };
}

function Master() {
    const storedMode = localStorage.getItem("mode") || "light";
    const [theme, colorMode] = useMode(storedMode);
    console.log(data)
    return (
        <AnimatePresence mode='wait' >
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <TasksContext.Provider value={data}>
                        {/* Body wrapper  */}
                        <Box sx={{
                            width: "100vw",
                            minHeight: "100vh",
                            bgcolor: "dark.main", backgroundImage: `url(${wallpaper1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
                            position: "relative",
                            display: "flex",
                            gap: 0
                        }} >
                            <Box sx={{ width: '350px', height: "100vh", display: "flex", p: 1 }}>
                                {/* menu  */}
                                <Box sx={{ width: '100%', height: "100%", dislpay: "flex", p: 1, borderRadius: "15px", bgcolor: "common.main", boxShadow: 14 }}>
                                    <SideMenu />
                                </Box>
                                {/* contnet  wrrapper  */}
                            </Box>
                            <Box sx={{ width: "100%", height: ":100%", }}>
                                <Box sx={{ width: '100%', height: "100%", dislpay: "flex", p: 1, borderRadius: "15px" }}>
                                    <Outlet />
                                </Box>
                            </Box>


                        </Box>
                    </TasksContext.Provider>
                </ThemeProvider>
            </ColorModeContext.Provider >
        </AnimatePresence >
    )
}

export default Master