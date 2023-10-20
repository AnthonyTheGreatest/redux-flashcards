import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectAllQuizzes } from "./quizzesSlice";
import { selectAllTopics } from "../topics/topicsSlice";
import { selectAllCards } from "../cards/cardsSlice";

export default function Quizzes() {
  const quizzes = useSelector(selectAllQuizzes);
  const topics = useSelector(selectAllTopics);
  const cards = useSelector(selectAllCards);

  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    localStorage.setItem('topics', JSON.stringify(topics));
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [quizzes, topics, cards]);

  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
