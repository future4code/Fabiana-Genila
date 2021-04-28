import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, neutralColor, secondaryColor } from '../constants/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white',
        },
        secondary: {
            main: secondaryColor,

        },         
        text: {
            primary: neutralColor
        }
    }
})

export default theme