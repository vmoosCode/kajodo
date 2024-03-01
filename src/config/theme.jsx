import { createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";




export const colorsBase = (mode) => ({
    ...(mode === 'light')
        ?
        {
            common: {
                "50": "#EEEDEB",
                "100": "#fcfcfc",
                "200": "#f7f7f7",
                "300": "#f2f2f2",
                "400": "#ebebeb",
                "500": "#cacaca",
                "600": "#F6F5F5",
                "700": "#828282",
                "800": "#6d6d6d",
                "900": "#1F2544",
            },
            primary: {
                "100": "#f0e6ff",
                "200": "#d5c2ff",
                "300": "#b798ff",
                "400": "#966bff",
                "500": "#7745ff",
                "600": "#5013ff",
                "700": "#3b0eff",
                "800": "#0000ff",
                "900": "#0000fb",
            },
            danger: {
                "50": "#ffeaee",
                "100": "#ffcbd2",
                "200": "#ef9699",
                "300": "#e66d72",
                "400": "#f0494f",
                "500": "#f53434",
                "600": "#e62933",
                "700": "#d41d2d",
                "800": "#c71326",
                "900": "#b90019"
            },
            success: {
                "50": "#f2fce7",
                "100": "#dff8c4",
                "200": "#c9f39d",
                "300": "#b1ed70",
                "400": "#9ce849",
                "500": "#88e310",
                "600": "#76d200",
                "700": "#5dbd00",
                "800": "#43a900",
                "900": "#008600"
            },
            warning: {
                "50": "#fff8e1",
                "100": "#ffebb2",
                "200": "#ffde81",
                "300": "#ffd34e",
                "400": "#ffc826",
                "500": "#ffbe03",
                "600": "#ffb000",
                "700": "#ff9d00",
                "800": "#ff8c01",
                "900": "#ff6c03"
            },
            minor: {
                "50": "#fdffe7",
                "100": "#f9fcc2",
                "200": "#f5f998",
                "300": "#f5fa70",
                "400": "#f1f64a",
                "500": "#edf122",
                "600": "#f3e31e",
                "700": "#f5cb07",
                "800": "#f6b200",
                "900": "#f58800"
            },
            info: {
                "50": "#d8fdff",
                "100": "#99fafd",
                "200": "#00f7ff",
                "300": "#00f0ff",
                "400": "#00e8fb",
                "500": "#00e2fb",
                "600": "#00d0e7",
                "700": "#00b9ca",
                "800": "#00a5b0",
                "900": "#007f7e"
            },




            blue: '#0d6efd',
            indigo: "#6610f2",
            purple: "#6f42c1",
            pink: "#d63384",
            red: "#dc3545",
            orange: "#fd7e14",
            yellow: "#ffc107",
            green: "#198754",
            teal: "#20c997",
            cyan: "#0dcaf0",
            black: "#000000",
            gray: "#ced4da",
            light: "#EEF5FF",
            neon_blue: "#0079FF",
            neon_green: "#00DFA2",
            neon_yellow: "#F6FA70",
            neon_red: "#FF0060",
            neon_orange: "#F57D1F",

        }
        :
        {
            blue: '#0d6efd',
            indigo: "#6610f2",
            purple: "#6f42c1",
            pink: "#d63384",
            red: "#dc3545",
            orange: "#fd7e14",
            yellow: "#ffc107",
            green: "#198754",
            teal: "#20c997",
            cyan: "#0dcaf0",
            white: "#fff",
            black: "#000000",
            gray: "#dc3545",

        }

});

const themeSettings = (mode) => {
    const colors = colorsBase(mode);
    return {
        palette: {
            contrastThreshold: 4.5,
            common: {
                lighter: colors['common']["50"],
                light: colors['common']["200"],
                main: colors['common']["300"],
                dark: colors['common']["900"],
                contrastText: colors['common'][900]
            },
            primary: {
                light: colors['primary']["200"],
                main: colors['primary']["500"],
                dark: colors['primary']["600"],
                contrastText: colors['common']["200"]
            },
            danger: {
                light: colors['danger']["200"],
                main: colors['danger']["500"],
                dark: colors['danger']["900"],
                contrastText: colors['common']["200"]
            },
            success: {
                light: colors['success']["200"],
                main: colors['success']["500"],
                dark: colors['success']["900"],
                contrastText: colors['common']["900"]
            },
            warning: {
                light: colors['warning']["200"],
                main: colors['warning']["500"],
                dark: colors['warning']["900"],
                contrastText: colors['common']["900"]
            },
            minor: {
                light: colors['minor']["200"],
                main: colors['minor']["500"],
                dark: colors['minor']["900"],
                contrastText: colors['common']["900"]
            },
            info: {
                light: colors['info']["200"],
                main: colors['info']["500"],
                dark: colors['info']["900"],
                contrastText: colors['common']["900"]
            },
        },
        typography: {
            fontFamily: `"Inter", sans-serif`,
            fontSize: 12,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            h1: {
                fontSize: "6rem",
                fontWeight: 500,

            },
            h2: {
                fontSize: "5rem",
                fontWeight: 500,

            },
            h3: {
                fontSize: "4rem",
                fontWeight: 400,

            },
            h3Bold: {
                fontSize: "4rem",
                fontWeight: 700,

            },
            h4: {
                fontSize: "2rem",
                fontWeight: 400,

            },
            h4Bold: {
                fontSize: "2rem",
                fontWeight: 700,

            },
            h5: {
                fontSize: "1.5rem",
                fontWeight: 300,

            },
            h5Bold: {
                fontSize: "1.3rem",
                fontWeight: 700,

            },
            title: {
                fontSize: "14px",
                fontWeight: 400,

            },
            titleBold: {
                fontSize: "1rem",
                fontWeight: 500,

            },
            sideNav: {
                fontSize: "10pt",
                fontWeight: 450,


            },
            caption: {
                fontSize: "14px",
                fontWeight: 400,

            },
            small: {
                fontSize: "0.75rem",
                fontWeight: 300,

            },
            p: {
                fontSize: "1rem",
                fontWeight: 300,

            },
            button: {
                fontSize: "0.8rem",
                fontWeight: 500,

            },
            label: {
                fontSize: "10pt",
                fontWeight: 500,
            },
            header: {
                fontSize: "16px",
                fontWeight: 600,
            },
        },
        components: {
            // Name of the component
            MuiOutlinedInput: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        fontSize: '1rem',
                        borderRadius: "15px",
                        border: "2px solid",
                        borderColor: "#d5c2ff",
                        '& fieldset': {            // - The <fieldset> inside the Input-root
                            borderColor: 'green',
                            border: "none"  // - Set the Input border
                        },
                        "&.Mui-focused": { borderColor: "#7745ff" },

                    },

                },
            },
        },

    };
}

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});


export const useMode = (initialValue) => {
    const [mode, setMode] = useState(initialValue);
    localStorage.setItem('mode', mode)
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {

                setMode((prev) => (prev === "light" ? "dark" : "light"))

            }
        }),
        []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};