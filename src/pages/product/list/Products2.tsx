import React, { useEffect, useState } from 'react'
import { ProductModel } from '../../../models/Product'
import { axiosInstance } from '../../../network/axiosInstance'

function Products2() {
    const [products, setproducts] = useState<ProductModel[]>([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        axiosInstance.get('/products')
            .then(res => {
                setproducts(res.data)
                setloading(false)
            })
            .catch(err => console.log(err))

    }, [])



    return (<>
        <h1>Products</h1>

        {
            loading ? <div>Loading...</div> : <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity Per Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.quantityPerUnit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }

    </>
    )
}

export default Products2