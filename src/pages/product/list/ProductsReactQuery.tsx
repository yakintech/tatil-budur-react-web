import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useQuery } from 'react-query'

function ProductsReactQuery() {

    const { data, isLoading, isError, error } = useQuery('products', () => {
        return fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
    },
    {
        // staleTime: 5000,
    }
    )

    let columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product Name', width: 130 },
        { field: 'unitPrice', headerName: 'Unit Price', width: 130 },
        { field: 'unitsInStock', headerName: 'Units In Stock', width: 130 },
        { field: 'quantityPerUnit', headerName: 'Quantity Per Unit', width: 130 },
    ]

    return (<>
        <DataGrid
            rows={data || []}
            columns={columns}
            loading={isLoading}
        />
    </>
    )
}

export default ProductsReactQuery