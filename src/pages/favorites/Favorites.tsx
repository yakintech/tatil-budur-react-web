import React, { useContext } from 'react'
import { FavoritesContextType, favoritesContext } from '../../context/FavoritesContext'

function Favorites() {

    const { favorites, setFavorites } = useContext(favoritesContext) as FavoritesContextType

    return (<>
        <h1>Favorites</h1>
        <hr />
        <button onClick={
            () => {
                setFavorites([])
            }
        } >Empty All Fav</button>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Quantity Per Unit</th>
                    <th>Remove fav</th>
                </tr>
            </thead>
            <tbody>
                {favorites.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>
                            <button onClick={() => {
                                const newFavorites = favorites.filter(f => f.id !== product.id)
                                setFavorites(newFavorites)
                            }}>Remove</button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Favorites