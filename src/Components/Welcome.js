import Popup from "./Popup"
import QuoteData from "../quoteData"

export default function Welcome(props) {

    return (
        <div className="welcome">
            <h1>Quizzical</h1>
            <QuoteData />
            <form>
            <fieldset className="choose-difficulty">
                <legend>Select your difficulty</legend>
                <input 
                    type="radio"
                    id="easy"
                    name="difficulty"
                    value={"easy"}
                    onChange={(e) => props.handleChange(e)}
                />
                <label htmlFor="easy">Easy</label>
                <br /> 
                <input 
                    type="radio"
                    id="medium"
                    name="difficulty"
                    value="medium"
                    onChange={(e) => props.handleChange(e)}
                />
                <label htmlFor="medium">Medium</label>
                <br />
                <input 
                    type="radio"
                    id="hard"
                    name="difficulty"
                    value={"hard"}
                    onChange={(e) => props.handleChange(e)}
                />
                <label htmlFor="hard">Hard</label>
                <br />
            </fieldset>
            </form>
            <div className="button-wrapper">
                <button 
                    onClick={props.start}
                    className="start-quiz"
                >
                Start Quiz
                </button>
                {props.popup && 
                <Popup 
                    popupText={props.popupText}
                />}
            </div>
        </div>
    )
}