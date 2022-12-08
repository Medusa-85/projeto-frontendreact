import React, { useEffect } from "react";
import { StyleCarrinho } from "../../styles";

export default function Carrinho(props) {

    const excluirItem = (produto) => {
        const novaListaProdutos = [...props.listaProdutos]
        const indexProduto = novaListaProdutos.findIndex((produtoCarrinho) => produtoCarrinho.id === produto.id)
        novaListaProdutos.splice(indexProduto, 1)
        props.setListaProdutos(novaListaProdutos)
    }

    useEffect (() => {
        if(props.listaProdutos.length > 0) {
            const listaProdutosString = JSON.stringify(props.listaProdutos)
            localStorage.setItem("carrinho", listaProdutosString)
        }
    }, [props.listaProdutos])

    useEffect (() => {
        if(localStorage.length > 0) {
            const trazerListaProdutos = localStorage.getItem("carrinho")
            if(trazerListaProdutos) {
                const listaProdutosArray = JSON.parse(trazerListaProdutos)
                props.setListaProdutos(listaProdutosArray)
            }
            
        }
    }, [])

    const valorCarrinho = props.listaProdutos.reduce((acumulador, produto) => produto.quantidade*produto.valor+acumulador, 0)
    
    
    return (
        <StyleCarrinho>
            <h3>CARRINHO</h3>
            <section>
            {props.listaProdutos.length > 0 ? (props.listaProdutos.map((produto) => (
                <div key={produto.id}>
                    <h3>{produto.item}</h3>
                    <p>Quantidade: {produto.quantidade} <br/>Total produto: R$ {produto.quantidade*produto.valor} </p>
                    <button onClick={()=>excluirItem(produto)}>Excluir produto</button>
                </div>
            ))) 
            :(<div><p>Carrinho vazio</p></div>)
            } 
            <h3>Valor total: R$ {valorCarrinho}</h3>
            </section>
        </StyleCarrinho>
    )

    
}
