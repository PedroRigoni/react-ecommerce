import { useState } from "react";
import { HeaderContainer, IconsHeader, List, Logo } from "./styles";
import { ListIcon, ShoppingCartIcon } from "@phosphor-icons/react";


export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

    return (
        <HeaderContainer>

            <Logo><span>DG</span>  SUPLEMENTOS</Logo>
            <List className={menuAberto ? "aberto" : ""}>
                <li><a href="#">Pré-treino</a></li>
                <li><a href="#">Creatina</a></li>
                <li><a href="#">Whey Protein</a></li>
                <li><a href="#">Kits</a></li>
                <li><a href="#">Marcas</a></li>
            </List>

            <IconsHeader>
                <a href="#"><ShoppingCartIcon size={28} /></a>
                <a
          href="#"
          onClick={e => { e.preventDefault();
            setMenuAberto(!menuAberto);
          }}>
          <ListIcon size={28} />
        </a>
            </IconsHeader>



        </HeaderContainer>
    )
}