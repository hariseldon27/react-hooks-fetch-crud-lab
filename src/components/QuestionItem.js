import React from "react";

function QuestionItem({ question, onDeleteItem, onChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleDeleteClick() {
    console.log(question)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDeleteItem(question))
  }

  function handleChangeAnswer(event){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "correctIndex": event.target.value
      })
    }
    )
    .then((resp) => resp.json())
    .then((updatedAnswerQuestion) => onChangeAnswer(updatedAnswerQuestion))
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChangeAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
