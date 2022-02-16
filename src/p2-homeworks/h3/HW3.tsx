import React, {useState} from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from "./Greeting.module.css"
// types
export type UserType = {
    _id: string 
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType> | []>([]) // need to fix any

    const addUserCallback = (name: string) => {
        const newUser:UserType = {_id: v1(), name}
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div className={s.container}>
            <hr/>
           <h3>Homeworks 3</h3> 

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
          
        </div>
    )
}

export default HW3
