
import styles from "../styles.module.css";
import { Link } from "react-router-dom";

interface IProps {}

function Onboarding(props: IProps) {
  return(
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <img src="/images/Group 4.png" alt=" "/>
            <h2>Connecting Talent,</h2>
            <h3>Creating Success.</h3>

            <div className={styles.but}>
                <Link to="/Signup">
                <button type="button">
                    SignUp
                </button>
                </Link>

                <Link to="/login">
                <button type="button">
                    Login
                </button>
                </Link>
                
            </div>

            <div className={styles.wrap}>
                <img src="/images/animation.png" alt=" "/>
            </div>
        </div>
    </div>
  )
}

export default Onboarding;