import React from "react";

export default props => {

  const rows = props.lancamentos?.map( extrato => {

    const converterData = date => {
      let data = new Date(date);
      let dataFormatada = (("0" + data.getDate() )).slice(-2) + 
                            "/" + ("0" + (data.getMonth() + 1)).slice(-2) + 
                            "/" + data.getFullYear(); 

      return dataFormatada
    };

    function formatarNumero(valor) {
      var valorFormatado = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

      return valorFormatado;
    }

    return(
      <tr key={extrato.id}>
        <td>{converterData(extrato.dataTransferencia)}</td>
        <td>{formatarNumero(extrato.valor)}</td>
        <td>{extrato.tipo}</td>
        <td>{extrato.nomeOperadorTransacao}</td>
      </tr>
    )
  })

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Data</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Nome operador transacionado</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}