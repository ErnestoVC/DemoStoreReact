import { AppBar, Toolbar, Typography } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position="static" color="primary" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    DemoStore VC
                </Typography>
                <ThemeSwitcher darkMode={darkMode} handleThemeChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    )
}