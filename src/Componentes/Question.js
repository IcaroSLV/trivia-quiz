import { useEffect, useState } from 'react'
import styles from './Question.module.css'

function Question({fetchPergunta, fetchOpcoesErradas, fetchOpcaoCerta, fetchTema, fetchDificuldade}) {

    const[pergunta, setPergunta] = useState(fetchPergunta)
    const[tema, setTema] = useState(fetchTema)
    const[dificuldade, setDificuldade] = useState(fetchDificuldade)
    const[opcoes, setOpcoes] = useState([])

    const randomArray = (array) => {
        const newArray = [...array]; // Cria uma cópia do array original
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Troca elementos
        }
        return newArray; // Retorna o array embaralhado
    };

    useEffect(() => {
        setPergunta(fetchPergunta)
        setTema(fetchTema)
        setDificuldade(fetchDificuldade)
        // Define opcoes com base nas opções erradas e na opção certa
        if (Array.isArray(fetchOpcoesErradas) && fetchOpcaoCerta) {
            const allOpcoes = [...fetchOpcoesErradas, fetchOpcaoCerta];
            setOpcoes(randomArray(allOpcoes))
        } else {
            console.error('As opções erradas não são um array ou a opção certa é inválida:', fetchOpcoesErradas, fetchOpcaoCerta);
        }
    }, [fetchOpcoesErradas, fetchOpcaoCerta]); //

    console.log(opcoes)

    const renderDif = () => {
        if(dificuldade == 'easy') {
            return "Dificuldade: Fácil"
        } else if (dificuldade == 'medium') {
            return "Dificuldade: Média"
        } else if (dificuldade == "hard") {
            return "Dificuldade: Difícil"
        }
    }


    return(
        <div className={styles.page}>
            <section className={styles.info}>
                <div>
                    <p>Perguntas: 1 | 5</p>
                </div>
                <div>
                    <p>{tema}</p>
                </div>
                <div>
                    <p>{renderDif()}</p>
                </div>
            </section>
            <section className={styles.question}>
                <h1>
                    {pergunta}
                </h1>
                <div className={styles.options}>
                    {opcoes.map((op, index) => (
                        <button key={index}>{op}</button>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Question 