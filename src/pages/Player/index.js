import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "pages/notFound";

export default function Player() {
  const parametros = useParams();

  let [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getApi() {
      const data = await fetch("https://apicinetag.onrender.com");
      const res = await data.json();
  
      const videosFiltrados = await res.Movie.find((video) => {
        return video.id === Number(parametros.id);
      });
  
      setVideos(videosFiltrados);
    }

    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!videos) {
    return <NotFound />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={videos.link}
          title={videos.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
