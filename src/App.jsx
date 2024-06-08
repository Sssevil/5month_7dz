import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Layout from './components/Layout'
import BasketPage from './pages/BasketPage'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ProductsPage />} />
                    <Route path="basket" element={<BasketPage />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
