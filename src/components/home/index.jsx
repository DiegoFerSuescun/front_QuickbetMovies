import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import style from "./index.module.css"


const index = () => {
    return(
        <div className={style.contenedor}>
            <Header/>
                <h1>HOLI ESTE ES EL COMPONENTE HOME</h1>
            <Footer />
        </div>
    )
}

export default index;