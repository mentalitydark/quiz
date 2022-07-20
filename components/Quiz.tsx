import styles from './../styles/Quiz.module.css';

import QuestionModel from './../model/question';
import Question from './Question';
import Button from './Button';

interface QuizProps {
    question: QuestionModel;
    lastQuestion: boolean;
    questionAnswered: (question: QuestionModel) => void;
    goToNextStep: () => void;
}

export default function Quiz(props: QuizProps) {

    const answerProvide = (index: number) => {
        if(props.question.notAnswered)
            props.questionAnswered(props.question.replayWith(index))
    }

    return (
        <div className={styles.quiz}>
            <Question
                value={props.question}
                timesUp={props.goToNextStep}
                timerToAnswer={6}
                onResponse={answerProvide}
            />
            <Button
                onClick={props.goToNextStep}
                text={props.lastQuestion ? 'Finalizar' : 'Próxima Pergunta'}
            />
        </div>
    )
}