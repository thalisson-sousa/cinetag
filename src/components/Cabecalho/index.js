import { Link } from "react-router-dom";
import Logo from './Logo-cinetag-branco 1.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={Logo} alt="Logo cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./"> Home </CabecalhoLink>
                <CabecalhoLink url="./favoritos"> Favoritos </CabecalhoLink>
            </nav>
        </header>
    )
}