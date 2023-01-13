import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Topo } from './components/Topo';
import { Principal } from './components/Principal';
import { Rodape } from './components/Rodape';

function App() {
  return (
    <>
      <Topo />
      
      <Principal />

      <Rodape />
    </>
  );
}

export default App;
