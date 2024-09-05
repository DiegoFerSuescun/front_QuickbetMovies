import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../banner/Banner.jsx"
import style from "./index.module.css"


const index = () => {
    return(
        <div className={style.contenedor}>
            <Header/>
            <div>
                <Banner />    
            </div>
            <Footer />
        </div>
    )
}

export default index;