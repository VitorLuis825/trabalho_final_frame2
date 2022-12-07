import axios from "axios";

function Profile({product={}}){
    return (
        <div>
            <p>{product.id}</p>
            <p>{product.title}</p>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products',
        {params: {id:context.params.id}}
    );

    const product = await response.data[0];
    return {
        props: {product}
    }
}

export async function getStaticPaths(){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );

    const products = await response.data;
    const paths = products.map((product) => {
        return {params: {id: String(product.id)}};
    });

    return {
        paths,
        fallback:true,
    };
}

export default Profile;