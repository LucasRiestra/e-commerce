import { createContext, useState, useEffect } from "react";

export type Product = {
  id: number;
  name: string;  
  price: number; 
  quantity: number;
  image: string;
  description: string
}

export type CartContextProps = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void; 
  clearCart: () => void;
  cartCheckboxId: string; 
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartCheckboxId, setCartCheckboxId] = useState<string>("");

  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);
  
    if (productInCartIndex >= 0) {
      const newCart = [...cart];
      newCart[productInCartIndex].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }
  };

useEffect(() => {
    const savedCart = localStorage.getItem("product");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setCartCheckboxId("");
    localStorage.removeItem("product");
  };
  
  return (
    <CartContext.Provider value={{ cart, cartCheckboxId, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}