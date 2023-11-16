import { useEffect, useState } from 'react'
// import { cars as carsData } from '../../assets/mocks/cars.data'
import { CarForm } from './car-form/CarForm'
import { CarItem } from './car-item/CarItem'
import axios from 'axios'


export const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/cars')
            setCars(response.data)
        }
        fetchData();
    }, [])

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