
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'

import Base from './components/Base';

const Index = (props) => {
  return <Base {...props} />
};

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Base} />
  </BrowserRouter>,
  document.getElementById("root"));
