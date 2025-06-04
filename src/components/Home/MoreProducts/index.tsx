import { ProductName, StarsAvaliation } from "../../Products-Info/styles";
import { Product, ProductWrapper, SectionContainer, Underline } from "../MaisVendidos/styles";
import product1 from '../MoreProducts/assets/00-WHEY-TECH-BAUNILHA---900g-removebg-preview.png'
import product2 from '../MoreProducts/assets/1632249225478-imagem_2021-09-21_153343-removebg-preview.png'
import product3 from '../MoreProducts/assets/71wjHuluM8L-removebg-preview.png'
import product4 from '../MoreProducts/assets/Creatina-300g-removebg-preview.png'
import product5 from '../MoreProducts/assets/cdcadc0b-d772-4526-b4d6-167fabef52f9-removebg-preview.png'
import product6 from '../MoreProducts/assets/dux.png'
import product7 from '../MoreProducts/assets/panic.png'
import product8 from '../MoreProducts/assets/tasty.png'


export function MoreProducts() {
    return(
        <SectionContainer>
            <h3>Clientes tambem compram</h3>
            <Underline/>


            <ProductWrapper>
            <Product>
                <img src={product1} alt="" />
                <ProductName>Whey Tech Atletica</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product2} alt="" />
                <ProductName>Pre treino DUX</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product3} alt="" />
                <ProductName>Dark Whey Darkness</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product4} alt="" />
                <ProductName>Creatina Probiotica</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product5} alt="" />
                <ProductName>Pre treino Huger Integralmedica</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product6} alt="" />
                <ProductName>Fresh Whey DUX</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product7} alt="" />
                <ProductName>Pre Treino Panic Adaptogen</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            <Product>
                <img src={product8} alt="" />
                <ProductName>Tasty Whey Adaptogen</ProductName>
                <StarsAvaliation>&#9733; &#9733; &#9733; &#9733; &#9733;</StarsAvaliation>
                <span>R$ 84,90</span>
            </Product>
            </ProductWrapper>

        </SectionContainer>
    )
}