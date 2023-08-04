import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <img src="/logotype.svg" alt="nemo plus developer" />
            </div>
        </header>
    )
}

export default Header;