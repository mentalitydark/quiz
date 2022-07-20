import styles from './../styles/Button.module.css';

import Link from 'next/link';

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {

    const renderButton = () => (
        <button className={styles.button} onClick={props.onClick}>
            {props.text}
        </button>
    )

    return props.href ?
        (
            <Link href={props.href}>
                {renderButton()}
            </Link>
        ) : (
            renderButton()
        )
}