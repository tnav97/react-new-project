import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function User() {
    const [searchParams,setSearchParams]=useSearchParams();
    const showActiveUsers =searchParams.get('filter') === 'active';
    return (<>
    <p>user 1</p>
    <p>user 2</p>
    <p>user 3</p>
    <Outlet></Outlet>
    <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset </button>
    </div>
    {
        showActiveUsers ? <h2>Showing Active Users</h2>:<h2>show all users</h2>
    }
    </>
        
    )
}

export default User
