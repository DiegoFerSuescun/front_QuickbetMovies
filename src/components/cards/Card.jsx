import React from "react";
import { Row, Col } from "antd";
import style from "./Card.module.css"
import Image from "next/image";


const Card1 = () => {
    return(
        <div className={style.contentCard}>
            <Image
                width={200}
                height={223}
                src={"/images/pelicula.jpg"}
                className={style.image}
                alt="movie"      
            />   
            <Row className={style.contenTitleMovie}>
                <p className={style.titlemovie}>Nombre de la pelicula</p>
            </Row>
            <Row className={style.contentDate}>
                <p className={style.datemovie}>Fecha</p>
            </Row>
            <Row className={style.contentstats}>
                <Col>
                    <p className={style.stats}>Rating</p>
                </Col>
                <Col>
                    <p className={style.stats}>Favorites</p>
                </Col>
            </Row>
        </div>
    )
}

export default Card1;