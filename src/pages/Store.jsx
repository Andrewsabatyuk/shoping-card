import { CardItem } from '../components/CardItem'
import { useShoppingCart } from '../context/ShoppingCardContext'

export const Store = () => {
	const { items } = useShoppingCart()

	return (
		<div>
			{items && (
				<div className='d-flex flex-wrap justify-content-center gap-5'>
					{items.map(item => (
						<div key={item.id}>
							<CardItem title={item.title} id={item.id} price={item.price} image={item.image} />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

