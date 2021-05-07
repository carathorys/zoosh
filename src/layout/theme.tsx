import {lightBlue, teal} from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core'

export const theme = (prefersDarkTheme: boolean) => createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[600]
        },
        secondary: {
            main: teal[500]
        },
        type: prefersDarkTheme ? 'dark' : 'light'
    }
})