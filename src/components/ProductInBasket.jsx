// import { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContext";

export function ProductInBasket({ id, quantity, item }) {
    const { removeFromCart } = useShoppingCart();

    const storeItem = item.find(i => i.id === id)
    if (storeItem === 0) return null

    return (
        <Stack direction="horyzontal" gap={2} className='d-flex alighn-items-center'>
            <img src={item.image} style={{ width: '125px', height: '75px', objectFit: 'cover' }} alt="" />

            <div className="me-auto">
                <div>
                    {item.title}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            {quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {item.id}
                </div>
            </div>
            <div> {item.id * quantity}</div>
            <Button variant="outline-danger" size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    )
}