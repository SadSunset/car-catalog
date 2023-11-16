import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import { CarItem } from "../../home/car-item/CarItem"


export const CarDetail = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if (!id)
            return;
        const fetchData = async () => {
            const data = await CarService.getById(id)
            setCar(data)
        }
        fetchData()
    }, [id])
    console.log(car)
    return <div>
        
        <CarItem car={car} />
        <Link className='btn' to='/'>Back</Link>
        </div>
}