import React from "react";
import { Row, Col } from "antd";
import style from "./Filter.module.css" 

const Filter = () => {

    return(
        <div className={style.containerGeneral}>
            <Row className={style.contentTitle}>
                <p className={style.titleSearch}>Search</p>
            </Row>
            <Row className={style.contentSearch}>
                <input type="text" className={style.inputSearch} />
            </Row>
            <Row className={style.contentGenres}>
                <p className={style.titleSearch}>Genres</p>
            </Row>
            <Row className={style.contentList}>
                <p>Lista</p>
            </Row>
        </div>
    )
}

export default Filter;