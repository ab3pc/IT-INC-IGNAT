import React from 'react'
import { AffairItemType } from './HW2';
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairItemType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const stylesForPriority = {
        low: styles.low,
        high: styles.high,
        middle: styles.middle,
    }
    const deleteCallback:React.ReactEventHandler = () => {
        props.deleteAffairCallback(props.affair._id)

        //props.deleteAffairCallback(props.affair[_id])
    }// need to fix

    return (
        <div className={styles.item}>
            
            <span className={styles.name }> {props.affair.name}</span>
            <span className={`${styles.priority} ${stylesForPriority[props.affair.priority]}`}> {props.affair.priority}</span>
                      
          <button className={styles.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
