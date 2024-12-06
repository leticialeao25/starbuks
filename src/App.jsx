import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Novidades from './Components/Novidades/Novidades.jsx';
import Sobre from './Components/Sobre/FooterSobre.jsx';

  const GlobalStyle = createGlobalStyle`

  *{
    margin: 0,
    padding: 0,
    box-sizing: border-box;
  }

body{
font-family: "Poppins", sans-serif;
color:rgba(30, 57,50, 1);
}

`;
export default function App() {
return (
    <>
   <GlobalStyle />
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novidades" element={<Novidades />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>

    </BrowserRouter>
      
    </>
  );
}