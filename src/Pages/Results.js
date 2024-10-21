import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import styles from './Results.module.css'

function Results() {
    const location = useLocation();
    const {qntCorrect = 0, qntPerguntas = 0} = location.state || {};
    
    return(
        <div>
            <h1 className={styles.title}>Esse foi o resultado:</h1>
            <p className={styles.info}>
                Você acertou <span>{qntCorrect}</span> de {qntPerguntas} perguntas
            </p>
            <div className={styles.buttonContainer}>
                <button className={styles.button}><Link to='/'>Voltar para o menu</Link></button>
            </div>
        </div>
    )
}

export default Results