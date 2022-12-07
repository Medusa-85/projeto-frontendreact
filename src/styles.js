import styled from "styled-components";
import logo from "./produto/bgApp3.jpg"

export const StyleApp = styled.section`
    background-image: url(${logo})
`


export const StyleCarrinho = styled.section`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const StyleBox = styled.section`
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-items: center;    
    
`
export const StyleFiltros = styled.section`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
    display: flex;
    flex-direction: column;
    align-items: center;
       
`
export const StyleCard = styled.div`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 250px;
    height: 350px;
    margin: 10px;  
    
    img{
        max-width: 150px;
        max-height: 150px;
        border-radius: 5px;
    }

    input{
        height: 50px;
    }
    p{
        font-size: 20px
    }

`
export const StyleBody = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 
`
export const StyleHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 100px;
        color: whitesmoke
    }
`
export const StyleFooter = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
    width: 98%;
    height: 100px;
    margin: auto ;

    svg{
        margin: 0 1em;
        font-size: 2em;
        cursor: pointer
    }
`