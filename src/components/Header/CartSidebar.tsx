import React from "react";
import styled from "styled-components";
import type { CartItem } from "../../types/index";
import { Trash } from "@phosphor-icons/react";



interface CartSidebarProps {
  aberto: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (item: CartItem) => void;
  onAddQuantity: (itemId: number) => void; 
  onRemoveQuantity: (itemId: number) => void;
}

const Sidebar = styled.div<{ aberto: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ aberto }) => (aberto ? "0" : "-500px")};
  width: 460px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0,0,0,0.1);
  transition: right 0.3s;
  z-index: 1000;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ButtonHeader = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 8px;

  &:hover {
    background-color: #e0e0e0;
}


`

const ButtonCart = styled(ButtonHeader)`
  border: 1px solid #e2e1e1;
  margin: 0 4px;

  &:hover {
    background-color: #cdf8ba;
  }

`;

const TrashButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 30px;
  margin-left: 8px;
`;


const CartHeader = styled.div`
  border-bottom: 1px solid #c0c0c0;
  margin-bottom:1rem;
  padding-bottom: 0.5rem;
`;

const FooterText = styled.p`
  margin-top: auto;
  font-weight: bold;
  font-size: 1.1rem;
  border-top: 1px solid #e2e1e1;
  padding-top: 0.5rem;

  span {
   color: #16a34a;
  }
`;

const ProductsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
`

export const CartSidebar: React.FC<CartSidebarProps> = ({
  aberto,
  onClose,
  cartItems,
  onRemove,
  onAddQuantity,
  onRemoveQuantity,
}) => {
  return (
    <Sidebar aberto={aberto}>
      <CartHeader>
        <ButtonHeader onClick={onClose} style={{ float: "right", width: "60px" }}> x </ButtonHeader>
        <h2>Carrinho de Compras</h2>
      </CartHeader>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {cartItems.map((item) => (
            <li key={item.id} style={{ height: "100px", display: "flex", alignItems: "center", marginBottom: "16px", border: '1px solid #e2e1e1', padding: '1rem', borderRadius: '8px', justifyContent: 'space-between'}}>
              <img
                src={item.imagem}
                alt={item.nome}
                style={{ width: "40px", height: "40px", objectFit: "cover", marginRight: "0.5rem", borderRadius: "6px" }}
              />
              <ProductsInfo>
              <span style={{ flex: 1 }}>{item.nome}</span>
              <span style={{ margin: "0 8px", color: '#16a34a', fontWeight: 'bold', }}>R$ {item.preco.toFixed(2)}</span>
              </ProductsInfo>
              <ButtonCart onClick={() => onRemoveQuantity(item.id)}>-</ButtonCart>
              <span>{item.quantidade}</span>
              <ButtonCart onClick={() => onAddQuantity(item.id)}>+</ButtonCart>
              <TrashButton onClick={() => onRemove(item)}><Trash size={24}/></TrashButton>
            </li>
          ))}
        </ul>
      )}
      <FooterText>
        Total: <span>R$ {cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0).toFixed(2)}</span>
      </FooterText>
    </Sidebar>
  );
};