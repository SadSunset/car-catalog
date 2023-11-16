import { useEffect, useState } from 'react'
// import { cars as carsData } from '../../assets/mocks/cars.data'
import { CarForm } from './car-form/CarForm'
import { CarItem } from './car-item/CarItem'


export const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('')
            const data = await response.json()
            setCars(data)
        }
    }, [cars])

    return (
        <div>
            <h1>Car catalog</h1>
            <CarForm setCars={setCars}/>
            <div>
                {cars.length ?
                    cars.map(car =>
                        <CarItem
                            key={car.id}
                            car={car}
                        />
                    ) :
                    <p>There are not cars</p>
                }
            </div>
        </div>
    )
}