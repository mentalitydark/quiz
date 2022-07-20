import styles from './../styles/Timer.module.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TimerProps {
    key: number;
    duration: number;
    timesUp : () => void;
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.timesUp}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}