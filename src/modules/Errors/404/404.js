import styles from './styles.module.scss';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p>СТРАНИЦА НЕ НАЙДЕНА</p>
        </div >
    );
}

export default NotFound;