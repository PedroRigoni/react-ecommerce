import styled from 'styled-components'
import { motion } from "framer-motion";


interface BoxProps {
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    imgRotate?: number;
    backgroundColor?: string;
    height?: string;
    marginTop?: string;
}


export const HomeContainer = styled.main<BoxProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};;
    align-items: center;
    height: ${props => props.height || '560px'};
    background-color: ${props => props.backgroundColor || '#b8b8b8'};
    justify-content: center;



    img {
        margin-top: ${props => props.marginTop || '0'};
        width: 450px;
        height: 450px;
        transform: rotate(${props => props.imgRotate ?? -22}deg);

        
    }


    @media (max-width: 800px) {
        flex-direction: column;
        text-align: center;
        height: 600px;
        padding-top: 4rem;



        img {
            width: 220px;
            height: 220px;
            margin-top: 1.5rem;
            margin-bottom: 5rem;
        }
    }
`

interface TextContainerProps {
    color?: string;
    alignItems?: string;
}

export const TextContainer = styled.div<TextContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: center;
    margin-left: 25px;
    width: 520px;
    color: ${props => props.color || 'black'};


    h2 {
        font-size: 45px;
        font-weight: bold;
    }

    p {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 800px) {
        width: 370px;
        margin: 0;

        align-items: center;
        text-align: center;
        
    }
`

export const ButtonCentral = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    width: 230px;
    height: 50px;
    background-color: #7ed957;
    border-radius: 25px;
    border: 1px solid rgb(56, 245, 56);
    color: #ffff;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 0.6rem;
`

export const ArticleContainer = styled.article`
    display: flex;
    background-color: #2c2c2c;
    gap: 1rem;
    height: 400px;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    box-shadow: 10px 0 10px #2c2c2c;

    img {
        width: 300px;
        height: 280px;
        object-fit: cover;
    }


    @media (max-width: 800px) {
        flex-direction: column;
        height: 1000px;


        img {
            width: 340px;
            height: 280px;
        }
    }
`

