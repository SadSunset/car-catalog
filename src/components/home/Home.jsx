import { cars } from '../../assets/mocks/cars.data'
import { CarItem } from './car-item/CarItem'
import { useMemo } from 'react'


export const Home = () => {
    const filteredCars = useMemo(() => 
        cars.filter(car => car.price > 30000),[])
    
    return (
        <div>
            <h1>Home</h1>
            <div>
                {filteredCars.length ?
                    filteredCars.map(car =>
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