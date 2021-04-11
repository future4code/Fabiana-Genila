import React, {useState, useEffect} from 'react' 
import axios from 'axios'

const ClearButton = () => {
    const [clear, setClear] = useState([])

    useEffect(() => {
        const clearMatches = () => {
            axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabiana/clear")
            .then((res) => setClear(res.data))
            .catch((err) => console.log(err))
        }
        clearMatches()
    }, [setClear])


    return(
        <div>
            <button onCLikc={clear}>Limpar Matches</button>
        </div>
    )
}

export default ClearButton