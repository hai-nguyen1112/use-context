import React from 'react'
import './App.css'
import CarsProvider from "./contextAPI/CarsProvider"
import ProductList from "./components/ProductList"

function App() {
    return (
        <CarsProvider>
            <div className="App">
                <header><h1>Welcome to my web store</h1></header>
                <ProductList />
            </div>
        </CarsProvider>
    )
}

export default App
