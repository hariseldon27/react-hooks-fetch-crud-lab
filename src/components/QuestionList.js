import React, { useState } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList( { listOfQuestions, onDeleteItem, onChangeAnswer  } ) {



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {listOfQuestions.map((question) => 
        <QuestionItem 
        key={question.id}
        question={question} 
        onDeleteItem={onDeleteItem}
        onChangeAnswer={onChangeAnswer}
        />
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
