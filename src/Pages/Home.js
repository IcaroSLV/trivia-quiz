import { Link } from "react-router-dom";
import styles from './Home.module.css';
import { GiThink } from "react-icons/gi"; 

import { useState, useEffect } from "react";

function Home() {

  const [apiToken, setApiToken] = useState()
  const [qntPerguntas, setQntPerguntas] = useState(5)
  const [opSelect, setOpSelect] = useState(0)
  const [temas, setTemas] = useState()

  useEffect(() => {
    fetch('https://tryvia.ptr.red/api_category.php')
    .then(resp => resp.json())
    .then(data => setTemas(data.trivia_categories))
  }, [])

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


    const handleChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setOpSelect(selectedOptions)
    }
    const handleNumberChange = (event) => {
        setQntPerguntas(event.target.value)
    }

    return(
        <div>
            <div className={styles.content}>
                <h1 className={styles.title}>TRIVIA QUIZ <GiThink className={styles.icon}/></h1>
                
                <div className={styles.forms}>
                    <div className={styles.temas}>
                        <label>Temas</label>
                        <select name="temas" onChange={handleChange}>
                            <option value={0}>Sem tema</option>
                            {temas && temas.map((op, index) => (
                                <option value={op.id} key={index}>{op.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.qntPerguntas}>
                        <label>Quantidade de perguntas: </label>
                        <input type="number" value={qntPerguntas} min={1} max={10} onChange={handleNumberChange}/>
                    </div>
                </div>

                <div className={styles.buttons}>
                    {apiToken && <Link to='/Questions' state={{apiToken, qntPerguntas, opSelect}}><button>COMEÇAR</button></Link>}
                </div>
            </div>
        </div>
    )
}

export default Home