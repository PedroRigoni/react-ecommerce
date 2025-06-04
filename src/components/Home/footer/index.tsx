import { InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { FooterIcons, FooterSpec, FooterWrapper } from "./styles";
import { Logo } from "../../Header/styles";



export function Footer() {
   return (
    <FooterWrapper>
        <FooterSpec>
            <h3>Fale Conosco!</h3>
            <p>Atendimento 100% humanizado</p>
            <FooterIcons>
            <a href="https://www.instagram.com/dg.suplementos_/"><InstagramLogoIcon size={45} /></a>
            <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5528999924700%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafmzG8sg_y0YsTeir9JN9XXPxfhMAxw010LTlQ8WHAT1x_Z80DshcUxQRNqbg_aem_hRG7dIgOA8sPc7-J6TRwCQ&e=AT1FFNLRILJzumr9J12qIuxAFac36Oi8WCEFpWx-kJ3-vrHX-qmwtMuM-Tyhb59yc469vNv28BHna8LTeP0ZfNeO3pTn7in9rJtQ6A"><WhatsappLogoIcon size={45} /></a>
            </FooterIcons>
        </FooterSpec>

        <FooterSpec textAlign="center"  width="500px">
            <Logo><span>DG</span> SUPLEMENTOS</Logo>
            <p>A suplementação é a chave que desbloqueia o seu potencial máximo, transformando cada dia em uma oportunidade para superar os limites e alcançar a excelência</p>
        </FooterSpec>

        <FooterSpec>
            <h3>Fale Conosco!</h3>
            <a href="#">Cupons</a>
            <a href="#">Torne-se um parceiro!</a>
        </FooterSpec>

    </FooterWrapper>
   )
}