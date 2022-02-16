import React from 'react'
import Affair from './Affair'
import {AffairType, AffairItemType, FilterType} from './HW2'
import styles from './Affairs.module.css'
type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id: number)=> void
    filters: FilterType
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


    const stylesForButtons = {
        low: styles.btn__filters + ' ' + (props.filters === 'low' ? styles.active:'') ,
        high: styles.btn__filters + ' ' + (props.filters === 'high' ? styles.active:''),
        middle: styles.btn__filters + ' ' + (props.filters === 'middle' ? styles.active:''),
        all: styles.btn__filters + ' '+(props.filters === 'all' ? styles.active:'') ,
    }

    return (
        <div className={styles.container}>

            {mappedAffairs}

            <button className={stylesForButtons.all} onClick={setAll}>All</button>
            <button className={stylesForButtons.high} onClick={setHigh}>High</button>
            <button className={stylesForButtons.middle} onClick={setMiddle}>Middle</button>
            <button className={stylesForButtons.low} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
