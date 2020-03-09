import React, {useState, useCallback} from 'react'
import CarsContext from "./CarsContext"

const CarsProvider = ({children}) => {
    const [cars, setCars] = useState([
        { name: "Honda", price: 100 },
        { name: "BMW", price: 200 },
        { name: "Toyota", price: 400 }
    ])

    const incrementCarPrice = useCallback(index => {
        const newCars = Object.assign([], cars)
        newCars[index].price = newCars[index].price + 1
        setCars(newCars)
    }, [cars])

    const decrementCarPrice = useCallback(index => {
        const newCars = Object.assign([], cars)
        newCars[index].price = newCars[index].price - 1
        setCars(newCars)
    }, [cars])

    return (
        <CarsContext.Provider
            value={{
                cars: cars,
                incrementCarPrice: incrementCarPrice,
                decrementCarPrice: decrementCarPrice
            }}
        >
            {children}
        </CarsContext.Provider>
    )
}

export default CarsProvider