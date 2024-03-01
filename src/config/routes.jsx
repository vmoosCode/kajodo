import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage'
import Master from "../pages/Master";
import Dev from "../pages/Dev";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import Tasks from "../pages/Tasks";
import Groups from "../pages/Groups";
import Dashboard from "../pages/Dashboard";
import Calendar from "../pages/Calendar";


export const routes = [
    {
        id: 1,
        path: "/",
        element: <Master />,
        errorElement: <ErrorPage />,
        display_name: "Dashboard",
        menu: false,
        children: [
            {
                id: 11,
                path: "",
                element: <Dashboard />,
                display_name: "Dashboard",
                icon: <BubbleChartOutlinedIcon fontSize="inherit" color="inherit" />,
                menu: true
            },
            {
                id: 12,
                path: "all",
                element: < Tasks />,
                display_name: "All Tasks",
                icon: <TaskAltIcon fontSize="inherit" color="inherit" />,
                menu: true
            },
            {
                id: 13,
                path: "groups",
                element: < Groups />,
                display_name: "Groups",
                icon: <WorkspacesOutlinedIcon
                    fontSize="inherit" color="inherit" />,
                menu: true
            },
            {
                id: 14,
                path: "upcoming",
                element: < Dev />,
                display_name: "Upcoming",
                icon: <KeyboardDoubleArrowRightIcon fontSize="inherit" color="inherit" />,
                menu: true
            },
            {
                id: 15,
                path: "today",
                element: < Dev />,
                display_name: "Today",
                icon: <FormatListBulletedIcon fontSize="inherit" color="inherit" />,
                menu: true
            },
            {
                id: 15,
                path: "calendar",
                element: < Calendar />,
                display_name: "Calendar",
                icon: <CalendarMonthIcon fontSize="inherit" color="inherit" />,
                menu: true
            },
            // {
            //     path: "calendar",
            //     element: < Dev />,
            //     display_name: "Calendar",
            //     icon: <CalendarMonthIcon fontSize="inherit" color="inherit" />,
            //     menu: true
            // },
            // {
            //     path: "calendar",
            //     element: < Dev />,
            //     display_name: "Notes",
            //     icon: <TextSnippetOutlinedIcon fontSize="inherit" color="inherit" />,
            //     menu: true
            // },

        ]
    },
    {
        id: 2,
        path: "/settings",
        element: <Master />,
        errorElement: <ErrorPage />,
        display_name: "Settings",
        menu: false
    },
    {
        id: 3,
        path: "/logout",
        element: <Master />,
        errorElement: <ErrorPage />,
        display_name: "Logout",
        menu: false
    },



]


export const router = createBrowserRouter(routes)