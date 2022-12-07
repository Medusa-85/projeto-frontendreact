import React from "react";
import produtos from "../../produto/produtos.json"
import { StyleBox, StyleCard } from "../../styles";

export default function Box(props) {
    const onChangeBuscaNome = (e) => {
        props.setBuscaNome(e.target.value)
    }
    const adicionarProduto = (item) => {
        const novaListaProdutos = [...props.listaProdutos]

        const verificaExistenciaItem = novaListaProdutos.find((produto) => 
            produto.id === item.id 
        )
        if(!verificaExistenciaItem) {
            const novoItem = {...item, quantidade: 1}
            novaListaProdutos.push(novoItem)
        } else {
            verificaExistenciaItem.quantidade = verificaExistenciaItem.quantidade + 1
        }
        props.setListaProdutos(novaListaProdutos) 
    }

   

    const card = produtos
    .filter((produto) => {
        return produto.item.toLowerCase().includes(props.buscaNome.toLowerCase())
    })
    .filter((produto) => {
        return props.valorMin ? produto.valor >= props.valorMin : true
    })
    .filter((produto) => {
        return props.valorMax ? props.valorMax >= produto.valor : true
    })
    .sort((a,b) => {
        if(props.ordenaValor === "crescente") {
            return a.valor < b.valor ? -1 : 1
        } else if(props.ordenaValor === "decrescente") {
            return a.valor > b.valor ? -1 : 1
        }
    })
    .map((produto) => {
            return (
                <StyleCard key={produto.id}>
                    <img src={produto.imagem} />
                    <p>{produto.item}</p>
                    <p>R$ {produto.valor}</p>
                    <button onClick={() => adicionarProduto(produto)}>Adicionar ao carrinho</button>
                </StyleCard>
            )
        }
    )

    return(
        <section>
            <input
            type="text"
            placeholder="Produto"
            value={props.buscaNome}
            onChange={onChangeBuscaNome}
            />
            <StyleBox>
               {card}
            </StyleBox>
        </section>
    )
}