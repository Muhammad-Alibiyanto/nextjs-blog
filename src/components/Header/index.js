
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import ButtonComponent from '@/src/components/Button';

function HeaderComponent() {
    return(
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Link href="/">
                    <Image
                        alt="logo"
                        src="/images/logo.webp"
                        width={360}
                        height={49}
                        className={styles.header__logo__image}
                    />
                </Link>
            </div>
            <div className={styles.header__menus}>
                <ul className={styles.header__menus__items}>
                    <li className={styles.header__menus__item}>
                        <Link href="/category/destinations">Destinations</Link>
                    </li>
                    <li className={styles.header__menus__item}>
                        <Link href="/category/food">Food</Link>
                    </li>
                    <li className={styles.header__menus__item}>
                        <Link href="/category/well-being">Well Being</Link>
                    </li>
                    <li className={styles.header__menus__item}>
                        <Link href="/category/sport">Sport</Link>
                    </li>
                    <li className={styles.header__menus__item}>
                        <Link href="/category/family">Family</Link>
                    </li>
                    <li className={styles.header__menus__item}>
                        <Link href="/category/lifestyle">Lifestyle</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.header__actions}>
                <FaSearch size={22} color='#FFFFFF' />
                <ButtonComponent text="Get your $120 chrismas gift" href="https://www.youtube.com/watch?v=qmyepgTGcIc" type='dark' />
            </div>
        </div>
    )
}

export default (HeaderComponent);