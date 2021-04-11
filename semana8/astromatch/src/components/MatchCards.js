import React, {useState, useEffect} from 'react'
import './MatchCards.css'
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { red } from '@material-ui/core/colors'


const MatchCards = () => {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        const getProfileToChoose = () => {
            axios
              .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabiana/person")
              .then((res) => setProfile(res.data.profile))
              .catch((err) => console.log(err))
          }
          getProfileToChoose()
    }, [setProfile])

    return(
        <div className="Match-container">
            {/* key={profile.id} */}
            <img 
            className="Match-image"
            src={profile.photo} 
            alt={profile.name} />
            <h2 className="Match-name">{profile.name}</h2>
            <p className="Match-age">{profile.age}</p>
            <div className="Match-bio">
            <p>{profile.bio}</p>
                <div className="Match-buttons">
                <IconButton>
                    <CloseIcon fontSize="large" style={{ color: red[500] }}/>
                </IconButton>
                <IconButton>
                    <FavoriteIcon fontSize="large" style={{ color: green[500] }}/>
                </IconButton>
                </div>
                </div>
            </div>
    )
}

export default MatchCards