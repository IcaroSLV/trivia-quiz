import { Link } from "react-router-dom";
import styles from './Home.module.css';
import { GiThink } from "react-icons/gi"; 

function Home() {
    return(
        <div>
            <div className={styles.content}>
                <h1 className={styles.title}>TRIVIA QUIZ <GiThink className={styles.icon}/></h1>
                <div className={styles.buttons}>
                    <Link to='/Questions'><button>COMEÇAR</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home