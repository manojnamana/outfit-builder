import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: number;
  timestamp: number;
  items: Array<{
    id: number;
    name: string;
    image: string;
    position: { x: number; y: number };
  }>;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (items: CartItem['items']) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (items: CartItem['items']) => {
    const newCartItem: CartItem = {
      id: Date.now(),
      timestamp: Date.now(),
      items,
    };
    setCartItems(prev => [...prev, newCartItem]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 