import React, { useContext, useEffect, useState } from 'react'
import { ProductModel } from '../../../models/Product'
import { FavoritesContextType, favoritesContext } from '../../../context/FavoritesContext'
import { Link } from 'react-router-dom'

function Products() {

    const [products, setproducts] = useState<ProductModel[]>([])
    const [loading, setloading] = useState(true)

    const { favorites, setFavorites } = useContext(favoritesContext) as FavoritesContextType

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data)
                setloading(false)
            })
            .catch(err => console.log(err))


    }, [])


    const favOperation = (item:ProductModel) => {

        //fav control
        const index = favorites.find(f => f.id === item.id)

        if (index) {
            //remove
            const newFavorites = favorites.filter(f => f.id !== item.id)
            setFavorites(newFavorites)
            alert('Removed from favorites')
        } else {
            //add
            const newFavorites = [...favorites, item]
            setFavorites(newFavorites)
            alert('Added to favorites')
        }

    }


    return (<>
        <h1>Products</h1>

        {
            loading ? <div>Loading...</div> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity Per Unit</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><Link to={`/products/${product.id}`}>{product.id}</Link></td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.quantityPerUnit}</td>
                            <button onClick={() => favOperation(product)}>{
                                favorites.find(f => f.id === product.id) ? 'Remove from favorites' : 'Add to favorites'
                            }</button>
                            <td><Link to={`/products/update/${product.id}`}>Update</Link></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        }

    </>
    )
}

export default Products


