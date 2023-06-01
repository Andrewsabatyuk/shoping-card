import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useShoppingCart } from '../context/ShoppingCardContext'

export const CardItem = ({ id, title, image, price }) => {
    const { getItemQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="fs-3 d-flex justify-content-between align-items-baseline mb-4">{title}</Card.Title>
                <p className="fs-4 ms-2 d-flex justify-content-between"><span>Price:</span> $ {price}</p>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="primary" className='w-100'
                            onClick={() => increaseCartQuantity(id)}>Add to Cart</Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm'
                                onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}
