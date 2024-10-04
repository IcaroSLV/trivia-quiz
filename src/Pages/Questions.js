import styles from './Questions.module.css';
import {useEffect, useState} from 'react'

function Questions() {

    return(
        <div className={styles.page}>
            <section className={styles.info}>
                <div>
                    <p>PERGUNTAS: 1 | 5</p>
                </div>
                <div>
                    <p>CIÊNCIAS: MATEMÁTICA</p>
                </div>
                <div>
                    <p>DIFICULDADE 3</p>
                </div>
            </section>
            <section className={styles.question}>
                <h1>
                    Qual é a sequência de fibonacci ?
                </h1>
                <div className={styles.options}>
                    <button>0,1,2,3,4,5</button>
                    <button>1,2,3,6,12,24</button>
                    <button>1,3,5,7,9,11</button>
                    <button>1,2,3,5,8,13</button>
                </div>
            </section>
        </div>
    )
}

export default Questions