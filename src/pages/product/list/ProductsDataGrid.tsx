import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../network/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { ProductModel } from '../../../models/Product'


function ProductsDataGrid() {
    const [products, setproducts] = useState<ProductModel[]>([])

    useEffect(() => {
        loadProducts()
    }
        , [])


    const loadProducts = () => {
        axiosInstance.get('/products')
            .then(res => {
                setproducts(res.data)
            })
            .catch(err => console.log(err))
    }


    const deleteProduct = (id: number) => {

        const confirm = window.confirm('Are you sure?')

        if (!confirm) return;

        axiosInstance.delete(`/products/${id}`)
            .then(res => {
                loadProducts()
            })
            .catch(err => console.log(err))
    }



    let columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product Name', width: 130 },
        { field: 'unitPrice', headerName: 'Unit Price', width: 130 },
        { field: 'unitsInStock', headerName: 'Units In Stock', width: 130 },
        { field: 'quantityPerUnit', headerName: 'Quantity Per Unit', width: 130 },
        {
            field: "delete", headerName: "Delete", width: 130, renderCell: (params:any) => {
                return (
                    <Button variant='contained' color='error' onClick={() => deleteProduct(params.row.id)} >Delete</Button>
                )
            }
        },

    ]

    return (<>
        <DataGrid
            rows={products}
            columns={columns}
            initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10, 25]}
        />
    </>
    )
}

export default ProductsDataGrid