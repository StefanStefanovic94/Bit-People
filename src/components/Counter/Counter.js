import React from 'react'
import style from './Counter.module.scss'

const Counter = (props) => {

    let female = 0;
    let male = 0;

    props.persons.map((gende) => {
        if (gende.gender === "female") {
            female++
        } else { male++ }
    })

    return (
        <div className={style.counter}>
            <h2>male:{male} female:{female}</h2>
        </div>
    )

}
export default Counter