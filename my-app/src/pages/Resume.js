import styled from "styled-components";
import HTML from "../assets/Icons/HTML.webp";
import CSS from "../assets/Icons/CSS.webp";
import react from "../assets/Icons/react.webp";
import jquery1 from "../assets/Icons/jquery.webp";
import bootstrap from '../assets/Icons/Bootstrap_logo.webp';
import javaScriptIcon from "../assets/Icons/JavaScriptIcon.webp";
import tailwind from "../assets/Icons/Tailwind.webp";
import apis from "../assets/Icons/APIs.png";
import express from "../assets/Icons/Express3.webp";
import node from "../assets/Icons/nodeLogo.webp";
import mysql from "../assets/Icons/mysqlLogo.webp";
import MongoDB from "../assets/Icons/MongoDbW.webp";
import sequalize from "../assets/Icons/sequelizeLogo.webp";
import graphql from "../assets/Icons/GraphQL-logo.webp";
import webpack from "../assets/Icons/webpack2.png";

import Download from "../components/Download";




const frontEnds = [
  {
    // id: 1,
    title: "HTML",
    logo: HTML,
  },
  {
    // id: 2,/
    title: "CSS",
    logo: CSS,
  },
  {
    // id: 5,
    title: "JavaScript",
    logo: javaScriptIcon,
  },
  {
    // id: 3,
    title: "React",
    logo: react,
  },
  {
    // id: 5,
    title: "Jquery",
    logo: jquery1,
  },
  {
    // id: 5,
    title: "BootStrap",
    logo: bootstrap,
  },
  {
    // id: 5,
    title: "tailwind",
    logo: tailwind,
  },
//   {
//     // id: 5,
//     title: "Jquery",
//     logo: jquery1,
//   },
];

const backEnd = [
    {
        title: "APIs",
        logo: apis,
    },
    {
        title: "Express",
        logo: express,
    },
    {
        title: "node",
        logo: node,
    },
    {
        title: "mysql",
        logo: mysql,
    },
    {
        title: "MongoDB",
        logo: MongoDB,
    },
    {
        title: "graphQL",
        logo: graphql,
    },
    {
        title: "sequalize",
        logo: sequalize,
    },
    {
        title: "webpack",
        logo: webpack,
    },
]


const Container = styled.div`
display: grid;
grid-template-columns:.5fr .5fr;
grid-template-rows: 4rem 20rem;
grid-template-areas: 'a b' 'c d';
column-gap: 5rem;
align-items: start;
padding: 0 1rem 0 1rem;
justify-content: center;
/* align-content: space-around; */

`;

const Header1 = styled.h1`
grid-area: a;
align-self: center;
justify-self: center;
font-family: 'Amatic SC', cursive;
font-size: 3rem;

`;

const Header2 = styled.h1`
grid-area: b;
align-self: center;
justify-self: center;
font-family: 'Amatic SC', cursive;
font-size: 3rem;


`;

const Unordered = styled.ul`
grid-row: 2;
 display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-content: space-evenly;
/* text-align: center; */
margin: 0 auto;
padding: 0;
/* width: 80%;  */
`;
const ListItem = styled.li`
  list-style: none;
  align-self: center;
  
  /* height: 5rem;
  /* align-self: center; */
  align-content: space-between; 
  justify-content: space-between; 
`;

const Logos = styled.img`
  height: 4em;
  /* align-self: center; */
  /* justify-self: flex-start; */
  /* clear: both; */
  margin: 0 auto;
`;

const Div1 = styled.div`
grid-area: c;
display: flex;
justify-content: space-between;
width: 90%;
align-content: flex-start;
justify-self: center;
height: 100%;

`;

const Div2 = styled.div`
grid-area: d;
display: flex;
justify-content: space-between;
width: 90%;
align-content: flex-start;
justify-self: center;
height: 100%;

`;

export default function Resume() {
  return (
    <>
    <Container>

      
        <Header1> Front End </Header1>
        <Div1>
        <Unordered className="list-group">
          {frontEnds.map((frontEnd, i) => (
              <ListItem key={i}>
              <picture key={i}>
                <source type="image/webp" srcSet={frontEnd.logo}></source>
                <Logos key={i} src={frontEnd.logo} alt={frontEnd.title}></Logos>
              </picture>
            </ListItem>
          ))}
        </Unordered>
        </Div1>

      
      <Header2> Back End </Header2>
      <Div2>

      <Unordered className="list-group">
        {backEnd.map((backEnd, i) => (
            <ListItem key={i}>
              <Logos key={i} src={backEnd.logo} alt={backEnd.title}></Logos>
          </ListItem>
        ))}
      </Unordered>
    </Div2>

    
    </Container>

    <Download></Download>

        </>
    
  );
}
