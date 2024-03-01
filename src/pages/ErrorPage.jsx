import { useRouteError } from "react-router-dom";
import { Box, Paper, Typography, Stack } from "@mui/material";

export default function ErrorPage({ message }) {
    const error = useRouteError();
    console.error(error);

    return (
        <Box sx={{ minWidth: "100wv", minHeight: "100vh", }}>
            <Paper sx={{ backgroundColor: "yellow", minWidth: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Stack spacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h1" color="initial">
                        Ooops!
                    </Typography>
                    <Typography variant="title" color="initial">
                        Sorry, an unexpected error has occurred
                    </Typography>
                    {
                        message ?

                            <Typography variant="title" color="initial">
                                <i>{message}</i>
                            </Typography>
                            :
                            <Typography variant="title" color="initial">
                                <i>{error.statusText || error.message}</i>
                            </Typography>
                    }
                </Stack>
            </Paper>
        </Box>
    );
}