import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, neutralColor } from '../constants/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            constrastText: "white"
        },
        text: {
            primary: neutralColor
        }
        // secondary: {
        //     light: '',
        //     main: '',
        //     constrastText: '',
        // }
    }
})

export default theme