import styles from '../scss/style.scss';
import React from "react";
import iphone from "../img/iphone.jpg";
import watch from "../img/watch.jpg";
import noFoto from "../img/no-foto.jpg";

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }

    return (
        <div className={styles.product}>
            <div className={styles.img}>
                {props.name != "Iphone" && props.name != "Watch" ? <img src={noFoto}/> : 
                props.name == "Iphone" ? <img src={iphone}/> : 
                props.name == "Watch" ? <img src={watch}/> : ""}
            </div>
            <div className={styles.body}>
                <h1 className={styles.title}>{props.name}</h1>
                <div className={styles.price}>{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;