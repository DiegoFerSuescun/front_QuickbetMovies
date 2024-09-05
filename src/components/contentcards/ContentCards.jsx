import React from "react";
import Card1 from "../cards/Card.jsx";
import style from "./ContentCards.module.css"

const ContentCards = () => {
    const cadsArray = Array.from({length: 4})

    return (
        <div className={style.containerCards}>
            {cadsArray.map ((_, index) => (
                <Card1 key={index} />
            ))}
            <Card1/>
        </div>
    )
};


export default ContentCards