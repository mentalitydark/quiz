import styles from './../styles/Question.module.css'; 
import QuestionModel from './../model/question'
import Description from './Description';
import Answer from './Answer';
import Timer from './Timer';

interface QuestionProps {
    value: QuestionModel;
    onResponse: (index: number) => void;
    timesUp: () => void;
    timerToAnswer?: number;
}

const letters = [
    { value: 'A', color: '#F2C866'},
    { value: 'B', color: '#F266BA'},
    { value: 'C', color: '#85D4F2'},
    { value: 'D', color: '#BCE596'},
]

export default function Question(props: QuestionProps) {
    const question = props.value

    const renderAnswer = () => {
        return question.answers.map(
            (answer, index) => (
                <Answer
                    key={`${question.id}-${index}`}
                    value={answer}
                    index={index}
                    letter={letters[index].value}
                    backgroundLetterColor={letters[index].color}
                    onResponse={props.onResponse}
                />
            )
        );
    }

    return (
        <div className={styles.question}>
            <Description value={question.description} />
            <Timer duration={props.timerToAnswer ?? 10} timesUp={props.timesUp} key={question.id} />
            {renderAnswer()}
        </div>
    )

}