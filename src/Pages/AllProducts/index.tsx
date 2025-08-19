import React from "react";
import { ProductName, StarsAvaliation } from "../../components/Products-Info/styles";
import { AddToCart, NavLinkStyle, Product, ProductWrapper, SectionContainer, Underline } from "../../components/Home/MaisVendidos/styles";
import Product1 from '../../components/Home/MaisVendidos/assets/max_creatine-removebg-preview-removebg-preview.png';
import Product2 from '../../components/Home/MaisVendidos/assets/wheyNutragold.png';
import Product3 from '../../components/Home/MaisVendidos/assets/wheyintegralmedica.png';
import Product5 from '../../components/Home/MoreProducts/assets/00-WHEY-TECH-BAUNILHA---900g-removebg-preview.png';
import Product6 from '../../components/Home/MoreProducts/assets/1632249225478-imagem_2021-09-21_153343-removebg-preview.png';
import Product7 from '../../components/Home/MoreProducts/assets/71wjHuluM8L-removebg-preview.png';
import Product8 from '../../components/Home/MoreProducts/assets/Creatina-300g-removebg-preview.png';
import Product9 from '../../components/Home/MoreProducts/assets/cdcadc0b-d772-4526-b4d6-167fabef52f9-removebg-preview.png';
import Product10 from '../../components/Home/MoreProducts/assets/dux.png';
import Product11 from '../../components/Home/MoreProducts/assets/panic.png';
import Product12 from '../../components/Home/MoreProducts/assets//tasty.png';
import type { CartItem } from "../../types/index";
import { Footer } from "../../components/Home/footer";




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
    },
    {
        id: 5,
        nome: "Whey Tech Athletica",
        preco: 84.90,
        imagem: Product5,
        quantidade: 1,
    },
    {
        id: 6,
        nome: "Pre treino DUX",
        preco: 84.90,
        imagem: Product6,
        quantidade: 6,
    },
    {
        id: 7,
        nome: "Dark Whey Darkness",
        preco: 84.90,
        imagem: Product7,
        quantidade: 1,
    },
    {
        id: 8,
        nome: "Creatina Probiotica",
        preco: 84.90,
        imagem: Product8,
        quantidade: 1,
    },
    {
        id: 9,
        nome: "Huger Integralmedica",
        preco: 84.90,
        imagem: Product9,
        quantidade: 1,
    },
    {
        id: 10,
        nome: "Fresh Whey Dux",
        preco: 84.90,
        imagem: Product10,
        quantidade: 1,
    },
    {
        id: 11,
        nome: "Pre treino Panic Adaptogen",
        preco: 84.90,
        imagem: Product11,
        quantidade: 1,
    },
    {
        id: 12,
        nome: "Tasty Whey Adaptogen",
        preco: 249.90,
        imagem: Product12,
        quantidade: 1,
    },
];

export const AllProducts: React.FC<ProductsProps> = ({ addToCart }) => {

    return (
        <>
        <SectionContainer>
            <h3>Confira Nossos Produtos</h3>
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
        <Footer/>
        </>
    );
};
