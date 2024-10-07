import { Link } from "react-router-dom";
import styles from './Home.module.css';
import { GiThink } from "react-icons/gi"; 

import { useState, useEffect } from "react";

function Home() {

  const [apiToken, setApiToken] = useState()

  useEffect(() => {
    const fetchToken = async () => {
     try {
         const response = await fetch('https://tryvia.ptr.red/api_token.php?command=request')
         const data = await response.json()
         setApiToken(data.token)
     } catch(err){
         console.log(err)
     }
    } 

    fetchToken()
 }, [])

    return(
        <div>
            <div className={styles.content}>
                <h1 className={styles.title}>TRIVIA QUIZ <GiThink className={styles.icon}/></h1>
                <div className={styles.buttons}>
                    {apiToken && <Link to='/Questions' state={apiToken}><button>COMEÇAR</button></Link>}
                </div>
            </div>
        </div>
    )
}

export default Home