import React from "react";
import styles from "./about.module.css";


function Intro(){
    return(
        <div>
            <div class={styles.container}>
                <h1>VALVERSE TEAM</h1>
                <div class={styles.team}>
                    <div class={styles.divider}>
                        <img src="https://i.imgur.com/zSAVfEm.jpg?1" alt="photoprofile" />
                        <h3>Virtus Tan</h3>
                        <span>Project Manager, Web Developer</span>
                    </div>
                    <div class={styles.divider}>
<<<<<<< HEAD
=======
                        <img src="https://i.imgur.com/Z0I54nX.png" alt="photoprofile" />
>>>>>>> 4faa1d16ff2a57abfa5dbc7e3384c3eb5057b7b3
                        <h3>Axel Santoso</h3>
                        <span>Framework Mastery, CSS Specialist, Web Developer</span>
                    </div>
                    <div class={styles.divider}>
                        <img src="https://i.imgur.com/jXY7vxQ.jpg?1" alt="photoprofile" />
                        <h3>Kevin Ghebre</h3>
                        <span>React Master, Web Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
