import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";

import styles from './inicio.module.css';

export default function Inicio() {

 let [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getApi() {
      const data = await fetch("https://apicinetag.onrender.com");
      const res = await data.json();
      setVideos(res.Movie)
    }

    getApi();
  }, [])
  
  return (
    <>
      <Banner imagem="Home" />
      <Titulo> <h1> Um lugar para guardar seus vídeos e filmes! </h1> </Titulo>
      <section className={styles.container}>
        {videos.map(video => (
          <Card key={video.id} id={video.id} titulo={video.titulo} capa={video.capa} />
        ))}
      </section>
    </>
  );
}
