"use client"

import React from "react";
import style from "./Header.module.css"
import Image from "next/image";

const Header = () => {
    return(
        <div className={style.contenedorHeader}>
            <Image
                width={164}
                height={42}
                src={"/images/Logo.png"}
                className={style.logo}
            />
            {/* <h2>Este es el Header</h2> */}
            <button>popular</button>
            <button>favorites</button>
            <Image 
                width={32}
                height={32}
                src={"/images/login.png"}
            />
        </div>
    )
}

export default Header;