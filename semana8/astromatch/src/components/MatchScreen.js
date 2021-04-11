import React, {useState, useEffect} from 'react' 
import axios from 'axios'


const MatchScreen = () => {

    const [match, setMatch] = useState([])

    useEffect(() => {
        const getMatches = () => {
            axios
              .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabiana/matches")
              .then((res) => setMatch(res.data.matches))
              .catch((err) => console.log(err));
          };
          getMatches();
    }, [setMatch])

    const [person, setPerson] = useState({})

    useEffect(() => {
        const choosePersonMatch = () => {
            axios
            .get("")
            .then((res) => setPerson(res.data.id))
            .catch((error) => console.log(error))
        }
        choosePersonMatch()
    }, [setPerson])


    return (
        <div>
        {/* key={profile.id} */}
        <img 
        className="Match-image"
        src={match.photo} 
        alt={match.name} />
        <h2 className="Match-name">{match.name}</h2>
        </div>
    )
}

export default MatchScreen