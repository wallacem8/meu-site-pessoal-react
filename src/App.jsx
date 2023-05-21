import React from "react";
import "./App.css";

import api from "./services/api";

import Header from "./componets/Header/Header";
import Nav from "./componets/Nav/Nav";
import Footer from "./componets/Footer/Footer";

import Curriculum from "./componets/Curriculum/Curriculum";
import Portfolio from "./componets/Portfolio/Portfolio";
import Contacts from "./componets/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculum, setCurriculum] = React.useState({});
  const [portfolio, setPortfolio] = React.useState({});

  const fetchDados = async () => {
    try {
      const informacao = await api.get(`/informacoes/1`);
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const experienciaAcademica = await api.get(`/experiencias?tipo=academico`);
      const experienciaProfissional = await api.get(`/experiencias?tipo=profissional`);

      setCurriculum({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const portfolio = await api.get(`/portfolio`);
      setPortfolio(portfolio.data);
    } catch (error) {
      console.log('Erro ao buscar dados:')
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route index element={<Curriculum curriculum={curriculum} />} />
          <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>


    </>
  )
};

export default App;
