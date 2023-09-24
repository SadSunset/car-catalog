import { cars } from '../../assets/mocks/cars.data'
import { CarItem } from './car-item/CarItem'


export const Home = () => {
    
    return (
        <div>
            <h1>Home</h1>
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