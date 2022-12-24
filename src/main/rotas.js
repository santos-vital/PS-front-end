import React from "react";

import ConsultaExtrato from "../views/extrato/consultar-extrato";

import { Route, Switch, HashRouter } from "react-router-dom";

function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={ConsultaExtrato} />
      </Switch>
    </HashRouter>
  )
}

export default Rotas