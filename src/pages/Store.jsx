import { useState, useEffect } from 'react'
import { CardItem } from '../components/CardItem';

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
				<div className='d-flex flex-wrap justify-content-center gap-5'>
					{items.map(item => (
						<CardItem title={item.title} id={item.id} image={item.image} key={item.id} />
					))}
				</div>
			)}
		</div>
	)
}

