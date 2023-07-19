import React from 'react';
import products from '../../data/produtos'

export default (porps) => {
    // const productsTable = products.map(product => {
    //     return (
    //         <tr key={product.id}>
    //             <td>{product.id}</td>
    //             <td>{product.nome}</td>
    //             <td>{product.preco}</td>
    //         </tr>
    //     ) 
    // });

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <table border="1">
                <tr>
                    <td>Id Produto</td>
                    <td>Nome Produto</td>
                    <td>Preço</td>
                </tr>
                {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nome}</td>
                            <td>{product.preco}</td>
                        </tr>
                ))}
            </table>
        </div>
    )
}