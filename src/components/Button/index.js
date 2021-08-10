import React from "react";
import style from "./Butoon.module.scss"
import "./some-style.css";


class Button extends React.Component {
    render() {
        return (
            <button className={style.button}>Send</button>
        )
    }
}

export default Button;