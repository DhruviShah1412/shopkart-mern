import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState()
    const userId = localStorage.getItem("userId")
    const fehchUser = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/auth/profile/${userId}`)

            console.log(res.data.user)
            setUser(res.data.user)

        }
        catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        fehchUser()
    }, [])
    return (
        <div>
            Email : {user?.email}<br/>
            Role : {user?.role}
        </div>
    )
}

export default Profile
