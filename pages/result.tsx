import { useRouter } from 'next/router';
import Button from './../components/Button';
import Statistic from './../components/Statistic';

import styles from './../styles/Result.module.css';

export default function Result() {
    const router = useRouter();

    const { total, hits } = router.query;

    const percentage = Math.round((+hits / +total) * 100);

    return (
        <div className={styles.result}>
            <h1>Resultado</h1>
            <div style={{ display: 'flex'}}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Certas" value={hits} />
                <Statistic
                    text="Percentual"
                    value={`${percentage}%`}
                    backgroundColor={ percentage >= 70 ? '#BCE596' : percentage >= 50 ? '#F2C866' : '#F266BA'}
                />
            </div>
            <Button href="/" text='Nova tentiva' />
        </div>
    )
}