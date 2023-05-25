import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingCart } from '../context/ShoppingCardContext';

export const CardItem = ({ id, title, image }) => {
    const { getItemQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity } = useShoppingCart
    const quantity = getItemQuantity(id)
    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">{title}</Card.Title>
                {/* <Card.Text className="ms-2 text-muted"> */}
                <span className="fs-2">{title}</span>
                <span className="ms-2 text-muted">{id.slice(0, 4)}</span>

                {/* </Card.Text> */}
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="primary"
                            onClick={() => increaseCartQuantity(id)}>Add to Cart</Button>
                    ) : <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                        <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in Cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant='danger' size='sm'
                            onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
