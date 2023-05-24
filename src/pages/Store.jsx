import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

export const Store = () => {
    const [items, setItems] = useState([]);

    const getCuisine = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=119219a8d0dc4e509c8ef94b97df01ac`);
        const recepies = await data.json();
        setItems(recepies.results);
        // console.log(recepies);
    }

    useEffect(() => {
        getCuisine()

    }, [])

    return (
        <div>
            {items && (
                <div className='container'>
                    {items.map(item => (
                        <div className='cart-item' key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={items.image} alt="" />
                            <p>Price: {items.id}</p>
                            <Button variant="primary">Add to Cart</Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

