import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import styles from './Results.module.css'

function Results() {
    const location = useLocation();
    const {qntCorrect} = location.state || {};
    
    return(
        <div>
            <h1 className={styles.title}>Esse foi o resultado:</h1>
            {qntCorrect && (
                <p className={styles.info}>Você acertou <span>{qntCorrect}</span> de 5 perguntas</p>
            )}
            <div className={styles.buttonContainer}>
                <button className={styles.button}><Link to='/'>Voltar para o menu</Link></button>
                <button className={styles.button}><Link to='/Questions'>Tentar denovo</Link></button>
            </div>
        </div>
    )
}

export default Results