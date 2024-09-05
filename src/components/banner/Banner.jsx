import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";

const Banner = () => {
    return (
        <div className={style.contenedorBanner}>
            <div className={style.contenedorPelicula}>
                <h1 className={style.tituloPelicula}>Titulo de la pelicula</h1>
                <h3 className={style.contendioDeLaPelicula}>Contendido de la PeliculaContendido de la PeliculaContendido de la PeliculaContendido de la PeliculaContendido de la PeliculaContendido de la PeliculaContendido de la Pelicula</h3>
            </div>
            <div className={style.contenedorfavs}>
                <Image 
                    width={83}
                    height={25}
                    src={"/images/favorites.png"}
                    className={style.favoritesIcon}
                    alt="fav"
                />
                <h3 className={style.favoritesCalification}>Califiacion</h3>
            </div>
        </div>
    )
}

export default Banner;