import React, { useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext'

const UserList = () => {

    const { getUsers, users } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="list-group h-100">
            {
                users.map(user => (
                    <a href="">{`${user.first_name} ${user.last_name}`}</a>
                ))
            }
        </div>
    )
}

export default UserList
