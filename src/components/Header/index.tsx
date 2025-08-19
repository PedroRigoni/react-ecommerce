// src/components/Header.tsx
import React, { useState } from "react";
import { HeaderContainer, IconsHeader, List, Logo } from "./styles";
import { ListIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  onCartClick: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, cartCount }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderContainer>
      <NavLink to='/'><Logo><span>DG</span> SUPLEMENTOS</Logo></NavLink>
      <List className={menuAberto ? "aberto" : ""}>
        <li><NavLink to='/products'>Pré-treino</NavLink></li>
        <li><a href="#">Creatina</a></li>
        <li><a href="#">Whey Protein</a></li>
        <li><a href="#">Kits</a></li>
        <li><a href="#">Marcas</a></li>
      </List>
      <IconsHeader>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            onCartClick(); // Chama a função recebida via props
          }}
          style={{ position: "relative" }}
        >
          <ShoppingCartIcon size={28} />
          {cartCount > 0 && (
            <span style={{
              position: "absolute",
              top: -5,
              right: -5,
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 7px",
              fontSize: "12px"
            }}>
              {cartCount}
            </span>
          )}
        </a>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setMenuAberto(!menuAberto);
          }}>
          <ListIcon size={28} />
        </a>
      </IconsHeader>
    </HeaderContainer>
  );
};
