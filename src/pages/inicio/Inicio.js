import Banner from "componentes/banner/Banner";
import Card from "componentes/card/Card";
import Titulo from "componentes/titulo/Titulo";
import { useEffect, useState } from "react";
import styles from './Inicio.module.css';

const Inicio = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/helton0204/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => setVideos(dados))
    }, [])

    return(
        <>
            <Banner imagem='home'/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map(video => {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
    )
}
export default Inicio;