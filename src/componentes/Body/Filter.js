import React from "react";
import { StyleFiltros } from "../../styles";


 export default function Filtros(props) {
    const onChangeValorMin = (e) => {
        props.setValorMin(e.target.value)
    }
    const onChangeValorMax = (e) => {
        props.setValorMax(e.target.value)
    }
    const onChangeOrdenaValor = (e) => {
        props.setOrdenaValor(e.target.value)
    }
    return (
        
        <StyleFiltros>
            
            <section>
                <h3>FILTROS</h3>
                <ul>
                    <h4>Valor inicial 
                    <input 
                    type="number" 
                    placeholder="A partir de"
                    value={props.valorMin}
                    onChange={onChangeValorMin}/>
                    </h4>
                    
                    <h4>Valor limite
                    <input 
                    type="number" 
                    placeholder="Até"
                    value={props.valorMax}
                    onChange={onChangeValorMax}/>
                    </h4>
                    
                    <h4>Ordenar por valor
                    <br/>
                    <select value={props.ordenaValor} onChange={onChangeOrdenaValor}>
                    <option value="" >Ordenar</option>
                    <option value="crescente" >Crescente</option>
                    <option value="decrescente" >Decrescente</option>
                    </select>
                    </h4>
                    
                </ul>
            </section>
        </StyleFiltros>
        
        
    )
 }