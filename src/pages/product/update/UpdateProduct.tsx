import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../network/axiosInstance'

function UpdateProduct() {

  //name, unitPrice, unitsInStock, quantityPerUnit states

  const [name, setname] = useState('')
  const [unitPrice, setunitPrice] = useState(0)
  const [unitsInStock, setunitsInStock] = useState(0)
  const [quantityPerUnit, setquantityPerUnit] = useState('')

  //get id from useparams
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    
    axiosInstance.get(`/products/${id}`).then(response => {
      setname(response.data.name)
      setunitPrice(response.data.unitPrice)
      setunitsInStock(response.data.unitsInStock)
      setquantityPerUnit(response.data.quantityPerUnit)
    }
    )
  }, [])


  const update = () => {
      
      const data = {
        name,
        unitPrice,
        unitsInStock,
        quantityPerUnit
      }
  
      axiosInstance.put(`/products/${id}`, data).then(response => {
        alert('Updated')
        navigate('/products')

      }
      ).catch(err => console.log(err))
  }
  


  return (<>
    <h1>Update Product</h1>
    <hr />
    <div>
      <h3>Id: {id}</h3>
    </div>
    <div>
      <label htmlFor="">Name</label>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Unit Price</label>
      <input type="number" value={unitPrice} onChange={(e) => setunitPrice(parseInt(e.target.value))} />
    </div>
    <div>
      <label htmlFor="">Units In Stock</label>
      <input type="number" value={unitsInStock} onChange={(e) => setunitsInStock(parseInt(e.target.value))} />
    </div>
    <div>
      <label htmlFor="">Quantity Per Unit</label>
      <input type="text" value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} />
    </div>
    <div>
      <button onClick={update}>Update</button>
    </div>

  </>
  )
}

export default UpdateProduct