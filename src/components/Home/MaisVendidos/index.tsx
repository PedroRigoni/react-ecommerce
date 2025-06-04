import { ProductName, StarsAvaliation } from "../../Products-Info/styles";
import { NavLinkStyle, Product, ProductWrapper, SectionContainer, Underline } from "./styles";
import Product1 from '../MaisVendidos/assets/max_creatine-removebg-preview-removebg-preview.png'

export function Products() {
    return(
            <SectionContainer>
            <h3>Mais Vendidos</h3>
            <Underline/>


            <ProductWrapper>
            <NavLinkStyle to=''>
            <Product>
                <img src={Product1} alt="" />
                <ProductName>Creatina Maxtitanium</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            </NavLinkStyle>

            <NavLinkStyle to=''>
            <Product>
                <img src={Product1} alt="" />
                <ProductName>Creatina Maxtitanium</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            </NavLinkStyle>

            <NavLinkStyle to=''>
            <Product>
                <img src={Product1} alt="" />
                <ProductName>Creatina Maxtitanium</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            </NavLinkStyle>

            <NavLinkStyle to=''>
            <Product>
                <img src={Product1} alt="" />
                <ProductName>Creatina Maxtitanium</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            </NavLinkStyle>
            </ProductWrapper>

        </SectionContainer>
    )
}