import {useState, useEffect} from "react"
import { nanoid } from "nanoid"
import { decode } from "he"
import Popup from "./Popup"

export default function Quiz(props) {

    const [trivia, setTrivia] = useState([])

    const [triviaData, setTriviaData] = useState({
        correctAnswers: 0,
        submitted: false,
        isLoading: true,
        newQuiz: false,
        allAnswered: false
    })
    
    const style = {
        correct: {
            backgroundColor: "#94D7A2",
            borderColor: "green"
        },
        incorrect: {
            backgroundColor: "#F8BCBC",
            borderColor: "red",
            opacity: 0.7
        },
        easy: {
            color: "green"
        },
        medium: {
            color: "goldenrod"
        },
        hard: {
            color: "red"
        }

    }

    useEffect(() => {
        async function getData() {
            
            const url = `https://opentdb.com/api.php?amount=5&difficulty=${props.difficulty}&type=multiple`
            const res = await fetch(url)
            const data = await res.json()

            let answersArr = (arr) => arr.sort(() => Math.random() - 0.5)
            let triviaArr = []
            let firstChar = props.difficulty[0] 
            let quizDiff = props.difficulty.replace(firstChar, firstChar.toUpperCase())
            
            data.results.forEach(item => {
                console.log(item.category)
                triviaArr.push({
                    id: nanoid(),
                    question: item.question,
                    answers: answersArr([...item.incorrect_answers, item.correct_answer]),
                    correct: item.correct_answer,
                    isCorrect: false,
                    checked: false,
                    category: item.category,
                    difficulty: quizDiff
                })
            })

            setTrivia(triviaArr)
            setTriviaData(oldData => ({
                ...oldData,
                isLoading: false
            }))
        }

        getData()
    // eslint-disable-next-line
    }, [triviaData.newQuiz])

    let quizElements = trivia.map((item, i) => {
       return <>
       <div key={item.id} className="quiz-question">
                <div className="quiz-details">
                    Category: {item.category}
                <p 
                id="difficulty" 
                style={
                    item.difficulty === "Easy" ?
                    style.easy :
                    item.difficulty === "Medium" ?
                    style.medium :
                    style.hard
                }>{
                item.difficulty
                }</p>
                </div>
                <h2>{decode(item.question)}</h2>
                <div>{item.answers.map(q => {
                    return <>
                        <input  
                        className="hidden"
                        type="radio" 
                        id={q}
                        name={"Question" + i}
                        value={q}
                        onChange={(e) => handleChange(e, item.id)}
                        disabled={triviaData.submitted}
                        />
                        <label 
                            className="answer"
                            htmlFor={q}
                            style={
                                q === item.correct && triviaData.submitted ?
                                style.correct :
                                q === item.checked && triviaData.submitted ?
                                style.incorrect :
                                null
                                }
                        >{decode(q)}
                        </label>
                    </>       
                })}
                </div>
            </div>
        
        </>
    })

    function handleChange(e, id) {
        props.close()
        const {value} = e.target
        setTrivia(prevState => prevState.map(question => {
            if (question.id === id) {
                return {
                    ...question, 
                    checked: value,
                    isCorrect : value === question.correct ? true : false
                }
            } else {
                return question
            }

        }))
    }

    function checkAnswers() {
        let counter = 0
        let allChecked = 0
        trivia.forEach(answer => {
            if (answer.checked) allChecked ++
            if (answer.isCorrect) counter ++
        })

        if (allChecked === trivia.length) {
            setTriviaData(oldData => ({
                ...oldData,
                submitted: true,
                correctAnswers: counter,
                allAnswered: true
            }))

        } else {
            setTriviaData(oldData => ({
                ...oldData,
                allAnswered: false
            }))
            props.open()
        }    
    }

    function newQuestions() {

        setTriviaData(oldData => ({
            ...oldData,
            newQuiz: true,
            isLoading: true,
            submitted: false
        }))
    }

    return (
        <>
            {triviaData.isLoading && <span class="loader"></span>}
            {!triviaData.isLoading && <>
                <div className="quiz">
                    { quizElements }
                </div>
                <div className="button-wrapper">
                    {triviaData.submitted && 
                    <p>You got {triviaData.correctAnswers}/5 Correct!</p>
                    }
                    <button 
                        className="submit"
                        onClick={ triviaData.submitted ? newQuestions : checkAnswers }
                    >{ triviaData.submitted ? "Play Again" : "Check Answers" }
                    </button>
                    { !triviaData.allAnswered && props.popup && 
                    <Popup popupText={props.popupText} /> }
                </div>
            </>}
        </>
        
    )
}