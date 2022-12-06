import axios from "axios";

function Profile({user={}}){
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    const user = await response.data[0];
    return {
        props: {user}
    }
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {id: '1'}},
            {params: {id: '2'}},
        ],
        fallback:true,
    };
}

export default Profile;