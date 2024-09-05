"use client"

import React from "react";
import style from "./Header.module.css"
import Image from "next/image";

const Header = () => {

    const handleLogin = () => {
        console.log("Este va a ser el modal de Login");
        
    }
    return(
        <div className={style.contenedorHeader}>
            <Image
                width={164}
                height={42}
                src={"/images/Logo.png"}
                className={style.logo}
                alt="Logo"
            />
            <button className={style.buttonPopular}>popular</button>
            <button className={style.buttonfavorites}>favorites</button>
            <Image 
                width={32}
                height={32}
                src={"/images/login.png"}
                className={style.login}
                alt="login"
                onClick={handleLogin}
            />
        </div>
    )
}

export default Header;