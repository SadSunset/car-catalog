import { useContext, useEffect, useState } from 'react'
// import { cars as carsData } from '../../assets/mocks/cars.data'
import { CarForm } from './car-form/CarForm'
import { CarItem } from './car-item/CarItem'
import { CarService } from '../../services/car.service'
import { AuthContext } from '../../providers/AuthProvider'



export const Home = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll()
            setCars(data)
        }
        fetchData();
    }, [])
    const {user, setUser} = useContext(AuthContext)
    return (
        <div>
            <h1>Car catalog</h1>
            {user ? (
                <>
                <h2>Welcome, {user.name}!</h2>
                <button onClick={() => setUser(null)}>Logout</button>
                </> 
            ): <button onClick={() => setUser({name: 'Alex'})}>Log in</button>}
            <CarForm setCars={setCars} />
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