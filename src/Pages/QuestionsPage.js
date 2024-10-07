import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Question from '../Componentes/Question';

function QuestionsPage() {

    const [questionList, setQuestionList] = useState([])

    const location = useLocation()
    const apiKey = location.state

    useEffect(() => {
        const fetchTrivia = async () => {
            try {
                if(apiKey != '') {
                    const response = await fetch(`https://tryvia.ptr.red/api.php?amount=5&token=${apiKey}`)
                    const data = await response.json()
                    setQuestionList(data.results)
                }
            } catch(err) {
                console.log(err)
            }
        } 

        if(apiKey != '') {
            fetchTrivia()
        }
    }, [apiKey])

    console.log(questionList[0])

    return(
        <>
        {questionList.length > 0 && 
            <Question 
            fetchPergunta={questionList[0].question}
            fetchOpcoesErradas={questionList[0].incorrect_answers}
            fetchOpcaoCerta={questionList[0].correct_answer}
            fetchTema={questionList[0].category}
            fetchDificuldade={questionList[0].difficulty}
            
            />
        }
        </>
    )
}

export default QuestionsPage