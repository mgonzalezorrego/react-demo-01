import React from "react";
import ReactDOM from "react-dom";
import App from "./componentes/App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

ReactDOM.render(
  <App nombre="Marcelo" msj="Este es un mensaje desde los parametros" />,
  document.getElementById("root")
);
