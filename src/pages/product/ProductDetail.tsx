import React, { useContext, useEffect, useState } from 'react'
import { ProductModel } from '../../models/Product'
import { axiosInstance } from '../../network/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { FavoritesContextType, favoritesContext } from '../../context/FavoritesContext'

function ProductDetail() {

  const [detail, setdetail] = useState<ProductModel>({} as ProductModel)

  //connect favorite context
  const { favorites, setFavorites } = useContext(favoritesContext) as FavoritesContextType

  const { id } = useParams()

  useEffect(() => {

    axiosInstance.get<ProductModel>(`/products/${id}`).then(response => {
      setdetail(response.data)
    }
    )


  }, [])


  const navigate = useNavigate()

  return (<>
    <h1>Detail</h1>
    <hr />
    <button onClick={() => navigate(-1)} >Go Back!</button>
    <div>
      <h3>Id: {detail.id}</h3>
    </div>
    <div>
      <h3>Name: {detail.name}</h3>
    </div>
    <div>
      <h3>Unit Price: {detail.unitPrice}</h3>
    </div>
    <div>
      <h3>Units In Stock: {detail.unitsInStock}</h3>
    </div>
    <div>
      <h3>Quantity Per Unit: {detail.quantityPerUnit}</h3>
    </div>
    <div>
      <button onClick={
        () => {
          //fav control
          const index = favorites.find(f => f.id === detail.id)

          if (index) {
            //remove
            const newFavorites = favorites.filter(f => f.id !== detail.id)
            setFavorites(newFavorites)
            alert('Removed from favorites')
          } else {
            //add
            const newFavorites = [...favorites, detail]
            setFavorites(newFavorites)
            alert('Added to favorites')
          }
        }
      } >{
          favorites.find(f => f.id === detail.id) ? 'Remove from favorites' : 'Add to favorites'
      }</button>
    </div>

  </>
  )
}

export default ProductDetail