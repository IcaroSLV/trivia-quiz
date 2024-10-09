import { useEffect, useState } from 'react'
import styles from './Question.module.css'

function Question({fetchArrayPerguntas}) {

    const[pergunta, setPergunta] = useState('')
    const[tema, setTema] = useState('')
    const[dificuldade, setDificuldade] = useState('')
    const[opcoes, setOpcoes] = useState([])

    const[opcoesErradas, setOpcoesErradas] = useState([])
    const[opcaoCerta, setOpcaoCerta] = useState('')

    const[indexQuestion, setIndexQuestion] = useState(0)

    const[clickedIndex, setclickedIndex] = useState(null)
    const[awnserCorrect, setAwnserCorrect] = useState(false)

    useEffect(() => {
        setOpcaoCerta(fetchArrayPerguntas[indexQuestion].correct_answer)
        setOpcoesErradas(fetchArrayPerguntas[indexQuestion].incorrect_answers)
    }, [indexQuestion])

    useEffect(() => {
        setPergunta(fetchArrayPerguntas[indexQuestion].question)
        setTema(fetchArrayPerguntas[indexQuestion].category)
        setDificuldade(fetchArrayPerguntas[indexQuestion].difficulty)


        if (Array.isArray(opcoesErradas) && opcaoCerta) {
            const allOpcoes = [...opcoesErradas, opcaoCerta];
            setOpcoes(randomArray(allOpcoes))
        } else {
            console.error('As opções erradas não são um array ou a opção certa é inválida:', opcoesErradas, opcaoCerta);
        }
    }, [opcoesErradas, opcaoCerta, indexQuestion]);

    const randomArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const renderDif = () => {
        if(dificuldade == 'easy') {
            return "Dificuldade: Fácil"
        } else if (dificuldade == 'medium') {
            return "Dificuldade: Média"
        } else if (dificuldade == "hard") {
            return "Dificuldade: Difícil"
        }
    }

    function VerifyAwnser(awnser, index) {
        setclickedIndex(index)

        if(awnser == opcaoCerta) {
            setAwnserCorrect(true)
        } else {
            setAwnserCorrect(false)
        }

        if(indexQuestion < 4) {
            setTimeout(() => {
                setIndexQuestion(indexQuestion + 1)
                setAwnserCorrect(false)
                setclickedIndex(null)
            }, 1500);
        }


    }


    return(
        <div className={styles.page}>
            <section className={styles.info}>
                <div>
                    <p>Perguntas: {indexQuestion + 1} | 5</p>
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
                        <button 
                        className={index === clickedIndex ? (awnserCorrect ? styles.correct : styles.wrong) : ''} 
                        key={index} 
                        onClick={() => VerifyAwnser(op, index)} >{op}</button>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Question 