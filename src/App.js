import React from "react";
import Body from "./componentes/Body/Body";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header/Header";
import { StyleApp } from "./styles";

function App() {
  

  return (
    <StyleApp>
      <section>
        <Header/>
        <Body/>
        <Footer/>
      </section>
    </StyleApp>
  );
}

export default App;
