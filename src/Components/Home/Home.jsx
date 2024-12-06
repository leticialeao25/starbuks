import { useState } from "react";
import copoVerde from '../../assets/Imagem/Home/copo1.png';
import copoVermelho from '../../assets/Imagem/Home/copo2.png';
import copoAmarelo from '../../assets/Imagem/Home/copo3.png';
import copaoVerde from '../../assets/Imagem/Home/copao-verde.png';
import copaoVermelho from '../../assets/Imagem/Home/copao-red.png';
import copaoAmarelo from '../../assets/Imagem/Home/copao-amarelo.png';
import ellipeseVerde from '../../assets/Imagem/Home/Ellipse-green.png';
import ellipsVermelho from '../../assets/Imagem/Home/ellipse-red.png';
import ellipsAmarelo from '../../assets/Imagem/Home/ellipse-yellow.png';

import Button from '../Button/Button';

import{
    ButtonWrapper,
    Description,
    Figure,
    ImageSection,
    Main,
    MainCopo,
    Section,
    Subtitle,
    TextContainer,
    Thumbnail,
    Title,
} from '../../Components/Home/HomeStyle.jsx'
import FooterHome from '../../Components/Home/FooterHome';

export default function Home(){
    const [corAtual, setCorAtual] = useState('verde');
    const cores = {
        backgroundImage: 'url(' + ellipsVerde + ')',
        copo: copaoVerde,
    }

}