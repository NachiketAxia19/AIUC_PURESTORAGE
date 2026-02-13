import { createTheme } from "@mui/material/styles";

// Pure Storage theme color
export const PURE_ORANGE = "#fe5000";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: PURE_ORANGE,
            light: "#ff7a33",
            dark: "#cc4000",
            contrastText: "#ffffff",
        },
        background: {
            default: "#ffffff",
            paper: "#ffffff",
        },
        text: {
            primary: "#1a1a1a",
            secondary: "#666666",
        },
    },
    typography: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        h4: {
            fontWeight: 600,
            color: "#1a1a1a",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff5f2",
                    color: "#1a1a1a",
                    border: `1px solid ${PURE_ORANGE}`,
                    margin: "2px",
                    height: "24px",
                    fontSize: "0.75rem",
                    "&:hover": {
                        backgroundColor: "#ffe8e0",
                        borderColor: PURE_ORANGE,
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&.Mui-selected": {
                        color: PURE_ORANGE,
                    },
                },
            },
        },
    },
});
