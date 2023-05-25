import { useState, useEffect } from 'react'

import { CardItem } from '../components/Card';

export const Store = () => {
    const [items, setItems] = useState([]);

    const getCuisine = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=119219a8d0dc4e509c8ef94b97df01ac`);
        const recepies = await data.json();
        setItems(recepies.results);
    }

    useEffect(() => {
        getCuisine()
    }, [])

    return (
        <div>
            {items && (
                <div className='container'>
                    {items.map(item => (
                        // <div className='cart-item' key={item.id}
                        // style={{width:'40%', border:'1px solid'}}
                        // >
                        //     <h2>{item.title}</h2>
                        //     <img src={item.image} alt={item.title} style={{borderRadius:'3rem'}} />
                        //     <p>Price: {item.id}</p>
                        //     <Button variant="primary">Add to Cart</Button>
                        // </div>
                        <CardItem title={item.title} id={item.id} image={item.image} key={item.id} />
                        // <CardItem {item} key={item.id}/>
                    ))}
                </div>
            )}
        </div>
    )
}

