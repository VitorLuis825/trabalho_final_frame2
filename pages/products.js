import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import styles from "../styles/Produtos.module.css"

import Topo from '../components/Topo'
import Base from '../components/Base'

function Produtos({produtos}){
    return (
        <div>
            <Topo/>
            <div class={styles.container_content}>
                <h1>Catálogo de Produtos</h1>
                {produtos.map((produto) => (
                <>
                    <div>
                        <Link href='/profile/[id]' as={`/profile/${produto.id}`}>
                            <p>{produto.title}</p>
                        </Link>
                    </div>
                </>
                ))}
            </div>
            <Base/>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return {
        props: {produtos:data}
    }
}

export default Produtos;