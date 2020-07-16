import React from 'react'
import style from './Search.module.scss'


const Search = ({searchPeople}) => {

    const searchOn = (event) => {
        searchPeople(event.target.value)
    }


    return (
        <div className={style.input}>
            <input onChange={searchOn} placeholder="search here..."></input>
        </div>
    )
}

export default Search