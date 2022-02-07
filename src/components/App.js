import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [listOfQuestions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then((questionData) => setQuestions(questionData))
  }, [])

  function handleNewQuestion(newQuestion) {
    setQuestions([...listOfQuestions, newQuestion])
  }

  function handleDeleteItem(deletedItem) {
    //creates a new empty array (updatedItems) then filters
    //by item whose id isn't the deleted item and then 
    //sets state with the new array of items that exist
    const updatedQuestions = listOfQuestions.filter((question) => question.id !== deletedItem.id)
    setQuestions(updatedQuestions)
  } 

  function handleChangeAnswer(updatedAnswerQuestion){
    console.log(listOfQuestions)
    console.log("answer index changed:", updatedAnswerQuestion.id)
    const updatedAnswerQuestionArry = listOfQuestions.map((question) => {
      if(question.id === updatedAnswerQuestion.id){
        return updatedAnswerQuestion
      } else {
        return question
      }
    })
    console.log(updatedAnswerQuestionArry)
    setQuestions(updatedAnswerQuestionArry)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onNewQuestion={handleNewQuestion} /> : <QuestionList onDeleteItem={handleDeleteItem} onChangeAnswer={handleChangeAnswer} listOfQuestions={listOfQuestions}/>}
    </main>
  );
}

export default App;
