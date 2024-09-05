import React from "react";
import Header from "./Header";
import Banner from "../banner/Banner.jsx";
import ContentCards from "../contentcards/ContentCards.jsx";


//Estilos
import style from "./index.module.css"
import { Row, Col } from "antd";

const index = () => {
    return(
        <div className={style.contenedor}>
            <Header/>
            <div>
                <Banner />    
            </div>
            <Row>
                <Col md={4}>
                    <h1>Filtros</h1>
                </Col>
                <Col md={20}>
                    <Row className={style.contenedorTitlePopular}>
                        <h1 className={style.popularTitle}>Popular</h1>
                    </Row>
                        <ContentCards/>

                    <Row className={style.contenedorTitlePopular}>
                        <h1 className={style.popularTitle}>Now Paying</h1>
                    </Row>
                        <ContentCards/>

                    <Row className={style.contenedorTitlePopular}>
                        <h1 className={style.popularTitle}>Upcoming</h1>
                    </Row>
                    <ContentCards/>

                    <Row className={style.contenedorTitlePopular}>
                        <h1 className={style.popularTitle}>Top Rated</h1>
                    </Row>
                    <ContentCards/>

                    <Row className={style.contenedorTitlePopular}>
                        <h1 className={style.popularTitle}>Favorites</h1>
                    </Row>
                    <ContentCards/>
                </Col>
            </Row>
        </div>
    )
}

export default index;