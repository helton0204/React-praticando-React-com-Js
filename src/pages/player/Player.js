import Banner from 'componentes/banner/Banner';
import Titulo from 'componentes/titulo/Titulo';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import NaoEncontrado from 'pages/naoEncontrado/NaoEncontrado';
import { useState, useEffect } from 'react';

const Player = () => {
    const parametros = useParams(); //o hook "useParams()" obtem o valor do parâmetro de caminho dinâmico "id" definido na rota em routes.js.
    
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/helton0204/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => setVideo(...dados))
    }, [])
    
    if(!video){
        return <NaoEncontrado/>
    }

    return(
        <>
        {console.log(video)}
            <Banner imagem='player'/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link}
                    title={video.titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}
export default Player;