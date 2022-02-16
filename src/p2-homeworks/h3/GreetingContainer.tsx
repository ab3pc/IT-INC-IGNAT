import React, {useState} from 'react'
import AlternativeGreeting from './AlternativeGreeting'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<string>('') 
    const [modal, showModal] = useState<boolean>(false) 

    const setNameCallback = (e:React.ChangeEvent<HTMLInputElement>) => { 
        setError('')
        setName(e.currentTarget.value) ;
    }
    const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => { 
        if(e.key === 'Enter') {
            addUser()
        }
    }

    const addUser = () => {
        if(!name.trim()) {
            setError('Please enter some name')
           }
        else {
           // alert(`Hello ${name}`)
           showModal(true)
            addUserCallback(name)
            setName('');
        }
       
      
    }

    const totalUsers = users.length

    return (
        <>
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            onKeyPress={onKeyPress}
        />
        {modal&& <AlternativeGreeting name = {users[users.length-1].name} showModal={showModal} modal={modal}/>}
       
        </>
        
    )
}

export default GreetingContainer
