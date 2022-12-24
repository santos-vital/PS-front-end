import React from "react";
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import ExtratoTable from "./tabelaExtrato";

import ExtratoService from "../../app/service/extratoService";

class ConsultaExtrato extends React.Component {

  state = {
    dataInicio: '',
    dataFim: '',
    nome: '',
    tranferencias: []
  }

  constructor(){
    super();
    this.service = new ExtratoService();
  }

  buscar = () => {
    const transferenciaFiltro = {
      dataInicio: this.state.dataInicio,
      dataFim: this.state.dataFim,
      nome: this.state.nome
    }

    this.service
        .consultar(transferenciaFiltro)
        .then( resposta => {
          this.setState({ lancamentos: resposta.data })
        }).catch( error => {
          console.log(error)
        })
  }

  render() {
    return(
      <Card title="Consultar extrato">
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <FormGroup htmlFor="inputDataInicial" label="Data inicial: ">
                <input type="date" 
                  className="form-control" 
                  id="inputDataInicial" 
                  value={this.state.dataInicio}
                  onChange= { e => this.setState({ dataInicio: e.target.value })}
                  placeholder="Digite a data inicial"
                  />
              </FormGroup>
              <FormGroup htmlFor="inputDataFinal" label="Data final: ">
                <input type="date" 
                  className="form-control" 
                  id="inputDataFinal"
                  value={this.state.dataFim}
                  onChange= { e => this.setState({ dataFim: e.target.value })}
                  placeholder="Digite a data final"
                />
              </FormGroup>
              <FormGroup htmlFor="inputNomeOperadorTransacionado" label="Nome operador transacionado: ">
                <input type="text" 
                  className="form-control" 
                  id="inputNomeOperadorTransacionado"
                  value={this.state.nome}
                  onChange= { e => this.setState({ nome: e.target.value })} 
                  placeholder="Digite o nome do operador transacionado"
                />
              </FormGroup>

              <button onClick={this.buscar} type="button" id="btn-pesquisar" className="btn btn-success">Pesquisar</button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <ExtratoTable lancamentos={this.state.lancamentos}/>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default ConsultaExtrato