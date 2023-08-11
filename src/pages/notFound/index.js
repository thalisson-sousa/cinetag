import PageError from './PageError.svg';
import styles from './notFound.module.css';

export default function NotFound() {
    return (
        <section className={styles.container}>
            <img src={PageError} alt='Pagina de erro' />
        </section>
    )
}