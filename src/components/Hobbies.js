import style from "./Experiense.module.css";

const Hobbies = (props) => {
    const {
        hobbies
    } = props;
    return(
        <div className={style.block}>
            <h2>My hobbies</h2>
            <ul className={style.skills}>{
            hobbies.map(item => {
                return <li className={style.text}>{item}</li>
            })
            }
            </ul>
        </div>
    )
}
export default Hobbies;