import React from 'react' 
import { IconButton } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import {Link, useHistory} from 'react-router-dom'
import './Header.css'
import { ArrowBackIosIcon } from '@material-ui/icons/ArrowBackIos'

const Header = ({backButton}) => {
    const history = useHistory()
    return(
        <div className="Header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header-icon"/>
                </IconButton>
                ) : (
                <IconButton>
                    <PeopleIcon fontSize="large" color="primary"/>
                </IconButton>
            )}
            <Link to="/">
                <p className="Astro-title">astromatch</p>
            </Link>
        </div>
    )
}

export default Header
