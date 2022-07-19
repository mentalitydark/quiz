import styles from '../styles/Description.module.css'

interface DescriptionProps {
    value: string;
}

export default function Description(props: DescriptionProps) {
    return (
        <div className={styles.description}>
            <span className={styles.value}>
                {props.value}
            </span>
        </div>
    )
}