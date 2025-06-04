import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


export const SectionContainer = styled.section`
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //box-shadow: 10px 0 10px #2c2c2c;

    
    h3 {
        text-align: center;
        padding-top: 5rem;
        font-size: 1.9rem;
    }
     
`

export const Underline = styled.div`
    width: 100px;
    height: 5px;
    background-color: #7ed957;
    border-radius: 9999px;
    margin: 8px  auto 0 auto;
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 0.5rem;


    img {
        border-radius: 8px;
        max-width: 100%;
        padding: 1rem;
    }

    &:hover{
    transform: translateY(-5px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 25px;
    padding: 10px;

    transition:all 0.2s;
    cursor: pointer;


}
`

export const ProductWrapper = styled.div`
    display:grid ;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 2rem;
    padding: 2rem;


    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
`

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;