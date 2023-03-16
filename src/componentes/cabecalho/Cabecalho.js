import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "componentes/cabecalhoLink/CabecalhoLink";

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <CabecalhoLink url='./'>
                <img src={logo} alt='Logo do Cinetag'/>
            </CabecalhoLink>
            <nav>
                <CabecalhoLink url='./'>Home</CabecalhoLink>
                <CabecalhoLink url='./favoritos'>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}
export default Cabecalho;