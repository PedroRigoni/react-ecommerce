import React from "react";
import { ProductName, StarsAvaliation } from "../../Products-Info/styles";
import { AddToCart, NavLinkStyle, Product, ProductWrapper, SectionContainer, Underline } from "./styles";
import Product1 from '../MaisVendidos/assets/max_creatine-removebg-preview-removebg-preview.png';
import Product2 from '../MaisVendidos/assets/wheyNutragold.png';
import Product3 from '../MaisVendidos/assets/wheyintegralmedica.png';
import type { CartItem } from "../../../types/index";




interface ProductsProps {
    addToCart: (item: CartItem) => void;
}

const produtos: CartItem[] = [
    {
        id: 1,
        nome: "Creatina Maxtitanium",
        preco: 84.90,
        imagem: Product1,
        quantidade: 1,
    },
    {
        id: 2,
        nome: "Whey 3W NutraGold",
        preco: 134.90,
        imagem: Product2,
        quantidade: 1,
    },
    {
        id: 3,
        nome: "Whey 100% Integralmedica",
        preco: 134.90,
        imagem: Product3,
        quantidade: 1,
    },
    {
        id: 1,
        nome: "Creatina Maxtitanium",
        preco: 84.90,
        imagem: Product1,
        quantidade: 1,
    }];


    
export const Products: React.FC<ProductsProps> = ({ addToCart }) => {

    return (
        <SectionContainer>
            <h3>Mais Vendidos</h3>
            <Underline />
            <ProductWrapper>
                {produtos.map((produto) => (
                    <NavLinkStyle to='' key={produto.id}>
                        <Product>
                            <img src={produto.imagem} alt={produto.nome} />
                            <ProductName>{produto.nome}</ProductName>
                            <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                            <span>R$ {produto.preco.toFixed(2)}</span>
                            <AddToCart
                                onClick={(e) => {
                                    e.preventDefault(); // Impede comportamento padrão de links
                                    addToCart(produto);
                                }}
                            >
                                Adicionar ao Carrinho
                            </AddToCart>
                        </Product>
                    </NavLinkStyle>
                ))}
            </ProductWrapper>
        </SectionContainer>
    );
};
