import styled from 'styled-components'


export const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #8f8f8f;
    padding: 2rem 1rem;
    gap: 2rem;
    background-color: #2c2c2c;;
`
interface FooterSpecProps {
     textAlign?: string; 
     width?: string;
}


export const FooterSpec = styled.div<FooterSpecProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: ${props => props.textAlign || 'flex-start'};
    width: ${props => props.width || 'auto'};

    h3 {
        color: #ffff;
    }

    a {
        text-decoration: none;
        color: inherit;
        padding: 0;

        &:hover {
            color: #7ed957;
        }
    }

`

export const FooterIcons = styled.div`
    display: flex;
    width: 0;
    
`