import React from 'react'
import Affair from './Affair'
import {AffairType, AffairItemType, FilterType} from './HW2'
import styles from './Affairs.module.css'
type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairItemType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={styles.container}>

            {mappedAffairs}

            <button className={styles.btn__filters} onClick={setAll}>All</button>
            <button className={styles.btn__filters} onClick={setHigh}>High</button>
            <button className={styles.btn__filters} onClick={setMiddle}>Middle</button>
            <button className={styles.btn__filters} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
