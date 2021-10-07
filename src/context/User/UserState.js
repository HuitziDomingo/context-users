import { useReducer } from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        let res = await fetch('https://reqres.in/api/users')
            .then(res => res.json())
            // .then(data => console.log(data.data))
            .then(data => {
                dispatch({
                    type: 'GET_USERS',
                    payload: data.data
                })
            })
    }
    const getProfile = async (id) => {
        let res = await fetch('https://reqres.in/api/users/' + id)
            .then(res => res.json())

        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUsers,
            getUsers,
            getProfile,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState