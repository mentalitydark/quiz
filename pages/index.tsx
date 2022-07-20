import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import QuestionModel from "../model/question";
import Quiz from '../components/Quiz';

import styles from '../styles/Index.module.css'

const BASE_URL = 'https://quiz-virid-kappa.vercel.app/api';

export default function Home() {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState(null);
  const [correctQuestions, setCorrectQuestions] = useState(0);

  async function loadIdsQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const ids = await resp.json();
    setQuestionsIds(ids);
  }

  async function loadQuestion(id: number) {
    const resp = await fetch(`${BASE_URL}/questions/${id}`);
    const json = await resp.json();
    setQuestion(QuestionModel.fromObject(json));
  }

  useEffect( () => {
    loadIdsQuestions();
  }, [])

  useEffect( () => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds])

  function questionAnswered(question: QuestionModel) {
    setQuestion(question);

    const correct = question.correct;
    setCorrectQuestions(correctQuestions + (correct ? 1 : 0));
  }

  function idNextQuestion() {
    const index = questionsIds.indexOf(question.id) + 1;
    return questionsIds[index];
  }

  function goToNextQuestion(id: number) {
    loadQuestion(id);
  }

  function finishQuiz() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIds.length,
        hits: correctQuestions
      }
    })
  }

  function goToNextStep() {
    const nextId = idNextQuestion();
    nextId ? goToNextQuestion(nextId) : finishQuiz();
  }

  return (
    <div className={styles.container}>
      {question ? (
        <Quiz
          question={question}
          lastQuestion={idNextQuestion() === undefined}
          questionAnswered={questionAnswered}
          goToNextStep={goToNextStep}
        />
      ) : (
        false
      )}
    </div>
  )
}
