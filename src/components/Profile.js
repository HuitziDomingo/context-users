import { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {

    const { selectedUser } = useContext(UserContext)

    return (
        <>
            {
                selectedUser
                    ? (
                        <div className="card card-body text-center">
                            <img src={selectedUser.avatar} alt="detalles" className="card-img-top rounded-circle m-auto img-fluid" style={{width:180 }} />
                            <h1>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h1>
                            <h3>email: {`${selectedUser.email}`}</h3>
                        </div>
                    )

                    : (<h1>Usuario no seleccionado</h1>)
            }
        </>
    )
}

export default Profile
