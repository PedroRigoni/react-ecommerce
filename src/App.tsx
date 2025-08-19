// App.tsx
import { useState } from "react";
import { Header } from './components/Header';
import { GlobalStyle } from "./global";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./router";
import { CartSidebar } from "./components/Header/CartSidebar";
import type { CartItem } from "./types/index"; 

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Adiciona item ao carrinho
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        // Incrementa quantidade se o item já estiver no carrinho
        return prev.map((i) => 
          i.id === item.id ? { ...i, quantidade: (i.quantidade || 1) + 1 } : i
        );
      }
      return [...prev, { ...item, quantidade: 1 }]; // Adiciona com quantidade 1
    });
    setSidebarOpen(true);
  };

  // Remove item do carrinho
  const removeFromCart = (item: CartItem) => {
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  // Aumenta quantidade do item
  const onAddQuantity = (itemId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantidade: (item.quantidade || 1) + 1 } : item
      )
    );
  };

  // Diminui quantidade do item (mínimo 1)
  const onRemoveQuantity = (itemId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantidade: Math.max(1, (item.quantidade || 1) - 1) } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Header
        onCartClick={() => setSidebarOpen(true)}
        cartCount={cartItems.length}
      />
      <Router addToCart={addToCart} />
      <CartSidebar
        aberto={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onAddQuantity={onAddQuantity} 
        onRemoveQuantity={onRemoveQuantity} 
      />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
