import './App.css';
import Quiz from "./Components/Quiz";
import Welcome from "./Components/Welcome";
import blob from "./Assets/blob 5.png"
import blueBlob from "./Assets/blob 1.png"

import { useState } from "react";

function App() {

  const [startData, setStartData] = useState({
    startQuiz: false,
    difficulty: ""
  })

  const [popup, setPopup ] = useState({
    isShown: false,
    text: ""
  })


  function start() {
    if (startData.difficulty !== "") {
      setPopup({
        isShown: false,
        text: ""
      })
      setStartData(prevData => ({
        ...prevData,
        startQuiz: true
      }))
    } else {
      setPopup({
        isShown: true,
        text: "Please select a difficulty"
      })
    }
    
  }

  function handleChange(event) {
    closePopup()
    const {name, value} = event.target
    setStartData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function closePopup() {
    setPopup({
      isShown: false,
      text: ""
    })
  }

  function openPopup() {
    setPopup({
      isShown: true,
      text: "Please answer all questions"
    })
  }


  return (
    <div className="App">
      <img src={blob} className="blob blob-top" alt=""></img>
      <img src={blueBlob} className="blob blob-bottom" alt=""></img>
      {!startData.startQuiz && 
      <Welcome 
        start={start}
        handleChange={handleChange}
        close={closePopup}
        popup={popup.isShown}
        popupText={popup.text}
        difficulty={startData.difficulty}
      />}
      {startData.startQuiz && 
      <Quiz
        difficulty={startData.difficulty} 
        close={closePopup}
        open={openPopup}
        popup={popup.isShown}
        popupText={popup.text}
      />}
    </div>
  );
}

export default App;
