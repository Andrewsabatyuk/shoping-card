import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    // from api
    // const [items, setItems] = useState([]);

    // const getCuisine = async () => {
    //     const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=119219a8d0dc4e509c8ef94b97df01ac`)
    //     const recepies = await data.json()
    //     setItems(recepies.results)
    // }

    // useEffect(() => {
    //     getCuisine()
    // }, [])

    // from JSON
    const [items, setItems] = useState([]);
    const getCuisine = async () => {
        const data = await fetch('./products.json')
        const pizzas = await data.json()
        setItems(pizzas)
    }

    useEffect(() => {
        getCuisine()
    }, [])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    return (
        <ShoppingCartContext.Provider value={{items, getItemQuantity, increaseCartQuantity, removeFromCart, decreaseCartQuantity, cartQuantity, cartItems, openCart, closeCart }}>

            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>)
}