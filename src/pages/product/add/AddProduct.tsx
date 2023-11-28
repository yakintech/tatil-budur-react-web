import React, { useState } from 'react'
import { axiosInstance } from '../../../network/axiosInstance'

function AddProduct() {

  //name, unitPrice, unitsInStock, quantityPerUnit states
  const [name, setname] = useState('')
  const [unitPrice, setunitPrice] = useState(0)
  const [unitsInStock, setunitsInStock] = useState(0)
  const [quantityPerUnit, setquantityPerUnit] = useState('')


  const addProduct = () => {
    axiosInstance.post('/products', {
      name,
      unitPrice,
      unitsInStock,
      quantityPerUnit
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }


  return (<>
        <h1>Add Product Page</h1>
         <hr />
         <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
         </div>
          <div>
              <label htmlFor="">Unit Price</label>
              <input type="number" value={unitPrice} onChange={(e) => setunitPrice(Number(e.target.value))} />
          </div>
          <div>
              <label htmlFor="">Units In Stock</label>
              <input type="number" value={unitsInStock} onChange={(e) => setunitsInStock(Number(e.target.value))} />
          </div>
          <div>
              <label htmlFor="">Quantity Per Unit</label>
              <input type="text" value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} />
          </div>
          <div>
              <button onClick={addProduct}>Add Product</button>
          </div>
  </>
  )
}

export default AddProduct