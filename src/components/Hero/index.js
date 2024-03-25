import clsx from 'clsx';
import styles from './hero.module.css';

function HeroComponent(props) {
    return (
        <div className={clsx(styles.hero_bgimage, styles[props.className])} style={{ backgroundImage: `url(${props.bgimage})` }}>
            <div className={styles.hero__container}>
                {props.children}
            </div>
        </div>
    )
}

export default (HeroComponent);