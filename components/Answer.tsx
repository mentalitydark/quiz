import styles from '../styles/Answer.module.css';
import AnswerModel from "../model/answer";

interface AnswerProps {
    value: AnswerModel;
    index: number;
    letter: string;
    backgroundLetterColor: string;
    onResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
    const answer = props.value;

    const answerRevealed = answer.revealed ? styles.answerRevealed : ''

    return (
        <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
            <div className={`${answerRevealed} ${styles.content}`}>
                <div className={styles.frontCardContent}>
                    <div className={styles.letter} style={{ backgroundColor: props.backgroundLetterColor }}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.backCardContent}>
                    {answer.correct ? (
                        <div className={styles.correct}>
                            <span>A resposta certa é...</span>
                            <span className={styles.value}> {answer.value} </span>
                        </div>
                    ) : (
                        <div className={styles.wrong}>
                            <span>A resposta informada está errada...</span>
                            <span className={styles.value}> {answer.value} </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}