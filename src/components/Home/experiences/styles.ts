import styled from 'styled-components'


export const Experiences = styled.main`
    display: flex;
    padding: 4rem 1rem;
    justify-content: space-evenly;

`

export const Opinions = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 30%;
    text-align: center;
    box-shadow: 0 0 15px #afafaf;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s;


        &:hover {
        transform: translateY(-5px);
    }
`

export const Aspas = styled.p`
    font-weight: bold;
    font-size: 5rem;
    color: #7ed957;
    margin-top: 3rem;
    line-height: 2rem;
    
`

export const PeopleName = styled.p`
     font-weight: bold;
`

