import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext"

export function ProductInBasket({ id, quantity }) {
    const { removeFromCart, items } = useShoppingCart();

    const storeItem = items.find(i => i.id === id)
    if (storeItem === 0) return null

    return (
        <>
            <Stack direction="horyzontal" gap={2} className='d-flex alighn-items-center'>
                <img src={storeItem.image} style={{ width: '125px', height: '75px', objectFit: 'cover' }} alt="pizza" />

                <div className="me-auto">
                    <div>
                        <h3>
                            {storeItem.title}
                        </h3>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <p className="text-muted">
                        Prise: $ {storeItem.price}
                    </p>
                </div>
                <h3> Total prise: $ {storeItem.price * quantity}</h3>
                <Button variant="outline-danger" size="sm"
                    onClick={() => removeFromCart(storeItem.id)}
                >
                    Delete from Cart
                </Button>
            </Stack>
            <Button variant="outline-primary" size='sm'> Make Order</Button>
        </>
    )
}