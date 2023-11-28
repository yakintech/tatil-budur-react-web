import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import AddProduct from './pages/product/add/AddProduct'
import UpdateProduct from './pages/product/update/UpdateProduct'
import Products from './pages/product/list/Products'
import Products2 from './pages/product/list/Products2'
import ProductsDataGrid from './pages/product/list/ProductsDataGrid'
import ProductsReactQuery from './pages/product/list/ProductsReactQuery'
import AddProduct2 from './pages/product/add/AddProduct2'
import Favorites from './pages/favorites/Favorites'
import { FavoritesContextType, favoritesContext } from './context/FavoritesContext'
import ProductDetail from './pages/product/ProductDetail'
import Parent from './pages/memo/Parent'

function App() {

  //get favorites length from context
  const { favorites } = useContext(favoritesContext) as FavoritesContextType

  return (<>
    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/products2'>Products-2</Link></li>
      <li><Link to='/products3'> Products-3</Link></li>
      <li><Link to='/products4'> Products-4</Link></li>
      <li><Link to='/products/add'>Add Product</Link></li>
      <li><Link to='/products/add2'>Add Product-2</Link></li>
      <li> <Link to='/favorites'>Favorites (<span style={{color:'tomato'}}>{favorites.length}</span>) </Link> </li>
      <li><Link to='/parent'>Parent</Link></li>
    </ul>

    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products2' element={<Products2 />} />
      <Route path='/products3' element={<ProductsDataGrid />} />
      <Route path='/products4' element={<ProductsReactQuery />} />
      <Route path='/products/add' element={<AddProduct />} />
      <Route path='/products/add2' element={<AddProduct2 />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/products/update/:id' element={<UpdateProduct />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/parent' element={<Parent />} />

      
    </Routes>

    <footer style={{position:'fixed', bottom:0, width:'100%', textAlign:'center'}}>
      <hr />
      <span>Footer</span>
    </footer>

  </>)
}

export default App