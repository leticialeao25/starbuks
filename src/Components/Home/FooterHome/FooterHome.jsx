import { FaFacebook, FaInstagram , FaLinkedin } from 'react-icons/fa';

import {
    Container,
    ImgLogo,
    LiMedia,
    Rodape,
    SocialMedia,
    Text,
    UlMedia,
} from './FooterHomeStyle.jsx';

export default function FooterHome(){
    return(
 <Rodape>
  <Container>
  <figure>
  <ImgLogo src="/starbugcks-vai-na-web/src/assets/Imagem/logo.png" alt="logomarca Starbucks" />
 </figure>
 <div>
    <Text>
        Desafio final desenvolvido por
        <a href="">Leticia Leão</a>
    </Text>
 </div>

 <SocialMedia>
  <UlMedia>
    <LiMedia>
    <a href="http://www.facebook.com" target="_blank">
    <FaFacebook />
    </a>
 </LiMedia>

   <LiMedia>
    <a href="http://wwww.linkedin.com" target="_blank">
    <FaLinkedin />
    </a>
   </LiMedia>

    <LiMedia>
    <a href="http://www.instagram" target="_blank">
   <FaInstagram />
</a>
</LiMedia>

 </UlMedia>
 </SocialMedia>
 </Container>
 </Rodape>

);

}

