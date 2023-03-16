import Banner from 'componentes/banner/Banner';
import Card from 'componentes/card/Card';
import Titulo from 'componentes/titulo/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Favoritos.module.css';

const Favoritos = () => {
    const {favorito} = useFavoritoContext();

    return(
        <>
            <Banner imagem='favoritos'/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map(item => {
                    return <Card {...item} key={item.id}/>
                })}
            </section>
        </>
    )
}
export default Favoritos;