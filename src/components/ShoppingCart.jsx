import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCardContext"
import { ProductInBasket } from "./ProductInBasket"

export function ShoppingCart({ isOpen}) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <Offcanvas placement="end" show={isOpen} onHide={closeCart} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <ProductInBasket key={item.id} {...item} />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}