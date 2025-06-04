import styled from 'styled-components'


export const Logo = styled.h1`
    color: #ffff;

    
    span {
        color: #7ed957;
    }


    
    @media (max-width: 800px) {
    .logo-text {
        font-size: 1.2rem;
    }
    }
`

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0 1rem;
    background-color: #2c2c2c;
    box-shadow: 10px 0 10px #2c2c2c;
    color: #ffff;
    position: sticky; // deixa o header fixado no top
    top: 0; // deixa o header fixado no top
    z-index: 99; // faz com que o header se sobreponha aos item debaixo
    

    

    a {
        text-decoration: none;
        color: #ffff;
    }
    

   
`

export const List = styled.ul`
    display: flex;
    list-style: none;
    text-decoration: none;
    gap: 2rem;
    color: #ffff;
    

    li a{
        text-decoration: none;
        color: #ffff;


        &:hover {
        transform: translateY(-5px);
        transition: all 0.3s;
        font-weight: bold;
    }
    }



    @media (max-width: 800px) {
        position: absolute;
        background-color: rgba(44, 44, 44, 0.9); 
        flex-direction: column;
        width: 200px;
        top: 46px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        display: none;
        padding: 1rem;
        z-index: 100;
        right: 0;

        
        &.aberto {
        display: flex;
  }
    }

    
`

export const IconsHeader = styled.div`
    display: flex;
    gap: 1rem;

    a:nth-child(2) {
    display: none;
  }

  @media (max-width: 800px) {
    a:nth-child(2) {
    display: flex;
  }
  }
`

export const MenuLateral = styled.div `

`