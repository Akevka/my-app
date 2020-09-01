import s from "../../Users/users.module.css";
import preloader from "../../../assets/images/preloader.gif";
import React from "react";


let Preloader = (props) => {
    return <div className={s.preloader} ><img src={preloader}/></div>
}

export default Preloader;