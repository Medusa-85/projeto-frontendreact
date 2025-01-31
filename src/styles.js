import styled from "styled-components";
import logo from "./produto/bgApp2.jpg"

export const StyleApp = styled.section`
    background-image: url(${logo});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
export const BuscarProduto = styled.div`
    /* background-color: orchid; */
    display:flex;
    align-items:center;
    justify-content:center;
    
    input{
        height: 30px;
        width: 450px;
        border-radius: 20px;
        border: solid darkslateblue 2px;
    }
`


export const StyleCarrinho = styled.section`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff80;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    margin-top: 46px;

    h3{
        display:flex;
        justify-content:center;
        
    }
    button{
        border: solid darkred 1px;
        border-radius: 10px;
        background-color: darkred;
        height: 30px;
        color: whitesmoke
    }
    button:hover{
        background-color: darkslateblue;
        border: solid darkslateblue 1px;
    }

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
    justify-content: center;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 47px;

    input{
        height: 15px;
        width: 100px;
        border-radius: 100px;
        border: solid darkslateblue 2px;
    }

    select{
        height: 20px;
        width: 100px;
        border-radius: 100px;
        border: solid darkslateblue 2px;
    }
       
    h3{
        display:flex;
        justify-content:center;

    }
`
export const StyleCard = styled.div`
    border: solid #ffffff10 2px;
    border-radius: 15px;
    background-color: #ffffff;
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
    button{
        border: solid lightsteelblue 1px;
        border-radius: 10px;
        background-color: lightsteelblue;
        height: 30px;
    }
    button:hover{
        background-color: lightblue;
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: darkslateblue ;
    width: 100%;
    height: 100px;
    margin: auto ;

    p{
        font-size: 18px;
        color: lightgray    
    }

    svg{
        margin: 0 0.9em;
        font-size: 2em;
        cursor: pointer;
        color: lightgray
    }
`