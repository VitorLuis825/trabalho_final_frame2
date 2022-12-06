import React from 'react';
import axios from 'axios';

function Users ({users}){
    return (
        <div>
            <h1>Lista de Usuários</h1>
            {users.map((user) => (
                <div>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    const data = await response.data;
    return {
        props: {users:data}
    }
}

export default Users;