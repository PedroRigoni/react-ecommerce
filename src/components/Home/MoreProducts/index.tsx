
import React from "react";
import { ProductName, StarsAvaliation } from "../../Products-Info/styles";
import { AddToCart, NavLinkStyle, Product, ProductWrapper, SectionContainer, Underline } from "../MaisVendidos/styles";
import Product1 from './assets/00-WHEY-TECH-BAUNILHA---900g-removebg-preview.png';
import Product2 from './assets/1632249225478-imagem_2021-09-21_153343-removebg-preview.png';
import Product3 from './assets/71wjHuluM8L-removebg-preview.png';
import Product4 from './assets/Creatina-300g-removebg-preview.png';
import Product5 from './assets/cdcadc0b-d772-4526-b4d6-167fabef52f9-removebg-preview.png';
import Product6 from './assets/dux.png';
import Product7 from './assets/panic.png';
import Product8 from './assets/tasty.png';
import type { CartItem } from "../../../types/index"; // Use o tipo centralizado!

interface MoreProductsProps {
    addToCart: (item: CartItem) => void;
}

const produtos: CartItem[] = [
    {
        id: 1,
        nome: "Whey Tech Athletica",
        preco: 84.90,
        imagem: Product1,
        quantidade: 1,
    },
    {
        id: 2,
        nome: "Pre treino DUX",
        preco: 84.90,
        imagem: Product2,
        quantidade: 1,
    },
    {
        id: 3,
        nome: "Dark Whey Darkness",
        preco: 84.90,
        imagem: Product3,
        quantidade: 1,
    },
    {
        id: 4,
        nome: "Creatina Probiotica",
        preco: 84.90,
        imagem: Product4,
        quantidade: 1,
    },
    {
        id: 5,
        nome: "Huger Integralmedica",
        preco: 84.90,
        imagem: Product5,
        quantidade: 1,
    },
    {
        id: 6,
        nome: "Fresh Whey Dux",
        preco: 84.90,
        imagem: Product6,
        quantidade: 1,
    },
    {
        id: 7,
        nome: "Pre treino Panic Adaptogen",
        preco: 84.90,
        imagem: Product7,
        quantidade: 1,
    },
    {
        id: 8,
        nome: "Tasty Whey Adaptogen",
        preco: 249.90,
        imagem: Product8,
        quantidade: 1,
    },
    // Adicione outros produtos conforme necessário
];

export const MoreProducts: React.FC<MoreProductsProps> = ({ addToCart }) => {
    return (
        <SectionContainer>
            <h3>Clientes tambem compraram</h3>
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
                                onClick={e => {
                                    e.preventDefault();
                                    addToCart(produto);
                                }}> Adicionar ao Carrinho
                            </AddToCart>
                        </Product>
                    </NavLinkStyle>
                ))}
            </ProductWrapper>
        </SectionContainer>
    );
};