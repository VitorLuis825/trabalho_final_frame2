import React from 'react';
import axios from "axios";

// import Link from 'next/link';

// import styles from "../styles/Produtos.module.css"

import Head from 'next/head';
import Topo from '../../components/Topo';
import Base from '../../components/Base';

function Profile({product={}}){
    return (
        <>

        <Head>
            <title>Prova de Frameworks 2 - Nícolas Kurz Chimenes Silva</title>
            <meta name="description" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
            <Topo/>
            
                <div>
                    <p>{product.id}</p>
                    <p>{product.title}</p>
                </div>
            <Base/>
        </div>
        </>
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