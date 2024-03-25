import Link from 'next/link';
import styles from './button.module.css';
import clsx from 'clsx';

function ButtonComponent(props) {
    return (
        <Link 
            href={props.href} 
            className={clsx(
                styles.button,
                props.type && styles[`button__${props.type}`],
                styles[props.className]
            )}
        >
            {props.text}
        </Link>
    )
}

export default (ButtonComponent);