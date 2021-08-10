import style from "./Education.module.css";
import React from "react";

class Education extends React.Component {
    render (){
        return(
            <section className={style.block}>
                <h2 className={style.title}>Education</h2>
                <p>Facility name: {this.props.university}</p>
                <p>Graduation year: {this.props.graduationYear}</p>
            </section>
        )
    }
}

export default Education;