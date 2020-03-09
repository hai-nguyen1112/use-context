import React from 'react'

const Car = ({index, name, price, incrementCarPrice, decrementCarPrice}) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <button onClick={() => incrementCarPrice(index)}>&uarr;</button>
            <button onClick={() => decrementCarPrice(index)}>&darr;</button>
        </>
    )
}

export default Car