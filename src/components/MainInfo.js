import {main} from "./MainInfo.module.css"


function MainInfo ({fullName, age, desiredPosition}) {
    return (
        <div className={main}>
            <h2>Main Info</h2>
            <p>Full name: {fullName}</p>
            <p>Age: {age}</p>
            <p>Desired position: {desiredPosition}</p>
        </div>
    )
}

export default MainInfo;