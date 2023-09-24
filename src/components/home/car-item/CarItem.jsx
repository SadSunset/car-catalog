import styles from '../Home.module.css'


export const CarItem = ({car}) => {
    return (
        <div key={car.id} className={styles.car}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}
            />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{new Intl.NumberFormat('ru-Ru', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'narrowSymbol',
                }).format(car.price)}</p>
                <button>Read more</button>
            </div>
        </div>
    )
}