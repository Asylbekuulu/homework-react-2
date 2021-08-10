import style from "./Experiense.module.css"


const Experience = (props) => {
    const {
        lastWorkPlace,
        experience,
        skills
    } = props;
    return (
        <div className={style.block}>
            <h2>Job experience</h2>
            <p>Last workplace: {lastWorkPlace}</p>
            <p>Experience in (years): {experience}</p>
            <p>Skills ({skills.length}):</p>
            <ul className={style.skills}>{
                skills.map(item => {
                    return <li className={style.text}>{item}</li>
                })
            }
            </ul>
        </div>
    )
}
export default Experience;