import { ArrowRightIcon } from "@phosphor-icons/react";
import { ArticleContainer, ButtonCentral, HomeContainer, TextContainer } from "./styles";
import { motion } from "framer-motion";
import Creatina from '../assets/creqtina.webp'
import Image1 from '../assets/creatinamax.webp'
import Image2 from '../assets/insaneclown.webp'
import Image3 from '../assets/wheygold.avif'
import Image4 from '../assets/integral.png'
import { Products } from "./MaisVendidos";
import { MoreProducts } from "./MoreProducts";
import { Info } from "./experiences";
import { Footer } from "./footer";
import type { CartItem } from "../../types/index"; // ajuste o caminho conforme sua estrutura

// Defina as props:
interface HomeProps {
  addToCart: (item: CartItem) => void;
}

export const Home: React.FC<HomeProps> = ({ addToCart }) => {
  return (
    <div>
      <HomeContainer>
        <TextContainer>
          <h2>Dê o próximo passo na sua evolução!</h2>
          <p>Os melhores suplementos para mais energia, mais força e mais performance estão aqui! Fórmulas de alta
            qualidade para quem busca evolução de verdade.</p>
          <ButtonCentral
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>Ver mais <ArrowRightIcon size={28} /> 
            </ButtonCentral>
        </TextContainer>
        <motion.img src={Creatina} alt="" animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6 }} />
      </HomeContainer>

      <ArticleContainer>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </ArticleContainer>
      {/* Passe addToCart para Products */}
      <Products addToCart={addToCart} />
      {/* Passe para MoreProducts se necessário */}
      <MoreProducts addToCart={addToCart} />

      <HomeContainer flexDirection='row-reverse' imgRotate={17} backgroundColor=" #2c2c2c" marginTop="1rem">
        <TextContainer color="#ffff" alignItems="flex-start">
          <h2>Creatina</h2>
          <p>Desbloqueie seu potencial maximo com a Creatina, o suplemento mais eficaz para aumentar a forca muscular e melhorar o desempenho atletico,
            comprovado por decadas de pesquisa cientifica</p>
          <ButtonCentral
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>Ver mais
            <ArrowRightIcon size={28} />
          </ButtonCentral>
        </TextContainer>
        <img src={Image4} alt="" />
      </HomeContainer>
      <Info />
      <Footer />
    </div>
  )
}
