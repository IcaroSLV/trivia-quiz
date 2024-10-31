import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Question from '../Componentes/Question';

function QuestionsPage() {

    const [questionList, setQuestionList] = useState([])

    const location = useLocation()
    const {apiToken, qntPerguntas, opSelect} = location.state || {}

    useEffect(() => {
        const fetchTrivia = async () => {
            try {
                if(apiToken !== '') {
                    if(opSelect === 0) {
                        const response = await fetch(`https://tryvia.ptr.red/api.php?amount=${qntPerguntas}&token=${apiToken}`)
                        const data = await response.json()
                        setQuestionList(data.results)
                    } else if (opSelect !== '') {
                        const response = await fetch(`https://tryvia.ptr.red/api.php?amount=${qntPerguntas}&category=${opSelect}&token=${apiToken}`)
                        const data = await response.json()
                        setQuestionList(data.results)
                    }
                }
            } catch(err) {
                console.log(err)
            }
        } 

        if(apiToken !== '') {
            fetchTrivia()
        }
    }, [apiToken])

    return(
        <>
        {questionList.length > 0 && 
            <Question 
            fetchArrayPerguntas={questionList}
            qntPerguntas={qntPerguntas}
            />
        }
        </>
    )
}

export default QuestionsPage