import React from 'react'
import { useParams } from 'react-router-dom'

function DetailsUser() {
    const {id} = useParams();
    return (
        <><p>Details of User {id}</p></>
    )
}

export default DetailsUser
