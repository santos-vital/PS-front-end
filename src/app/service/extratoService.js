import ApiService from '../apiservice'

export default class LancamentoService extends ApiService {
  constructor() {
    super('/transferencia-por-nome-e-data')
  }

  consultar(transferenciaFiltro) {
    let params = `/transferencias/transferencia-por-nome-e-data?`;

    if(transferenciaFiltro.dataInicio) {
      params = `${params}&dataInicio=${transferenciaFiltro.dataInicio}`
    }

    if(transferenciaFiltro.dataFim) {
      params = `${params}&dataFim=${transferenciaFiltro.dataFim}`
    }

    if(transferenciaFiltro.nome) {
      params = `${params}&nome=${transferenciaFiltro.nome}`
    }

    return this.get(params)
  }
}