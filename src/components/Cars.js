import React, {useContext} from 'react'
import CarsContext from "../contextAPI/CarsContext"
import Car from "./Car"

const Cars = () => {
    const carsContext = useContext(CarsContext)
    let carCards = carsContext.cars.map((car, index) => <Car
        key={index}
        index={index}
        name={car.name}
        price={car.price}
        incrementCarPrice={carsContext.incrementCarPrice}
        decrementCarPrice={carsContext.decrementCarPrice}
    />)

    return (
        <>
            <h3>Cars</h3>
            {carCards}
        </>
    )
}

export default Cars