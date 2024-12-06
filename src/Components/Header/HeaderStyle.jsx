import styled from 'styled-components';

export const Principal = styled.header`
 display: flex;
 justify-content: space-between;
 padding: 1rem 2.5rem;
 background-color: #FFFFFF;
 box-shadow: 0 1px 10px rgba(30, 57, 50, 0.7);
 `;

 export const Nav = styled.nav`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 40%;
 `;

 export const Lista = styled.li`
 list-style: none;
 font-size: 1.2rem;

 a{
 color:rgba(30, 57, 50,1);
 text-decoration: underline;

 &:hover{
  color: rgba(3, 113, 67, 1);
  text-decoration: underline;
}
  
}

/*Responsivo para celular*/
@media (min-width: 250px) and (max-width: 600px){
font-size: 1rem;

}

/*Responsivo para tablet */
@media (min-width: 601px) and (max-width: 900px){
 font-size: 1.1rem;

}

/*Responsivo para monitores até 1300px */
 @media (min-width: 901px) and (max-width: 1300px) {
    font-size: 1.2rem;

}

/*Responsivo para monitores maiores */
  @media (min-width: 1301px) {
   font-size: 1.4rem;
}

 }`
