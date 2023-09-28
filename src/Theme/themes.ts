import { createTheme } from '@mui/material'; 


export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    },
    palette: {
        primary: {
            main: '#eb8e21'
        },
        secondary: {
            main: '#ffa901',
            light: '#585C85'
        },
        info : {
            main: '#363b78'
        }
    }
})