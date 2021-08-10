import style from "./Education.module.scss";
import React from "react";

class Education extends React.Component {
    render (){
        return(
            <div className={style.block}>
                <h2 className={style.title}>Education</h2>
                <p>Facility name: {this.props.university}</p>
                <p>Graduation year: {this.props.graduationYear}</p>
            </div>
        )
    }
}

export default Education;