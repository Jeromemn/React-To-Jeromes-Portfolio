import styled from "styled-components";
import HTML from "../assets/icons/HTML.webp";
import CSS from "../assets/icons/CSS.webp";
import react from "../assets/icons/react.webp";
import jquery1 from "../assets/icons/jquery.webp";
import bootstrap from "../assets/icons/Bootstrap_logo.webp";
import javaScriptIcon from "../assets/icons/JavaScriptIcon.webp";
import tailwind from "../assets/icons/Tailwind.webp";
import apis from "../assets/icons/APIs.webp";
import express from "../assets/icons/Express3.webp";
import node from "../assets/icons/nodeLogo.webp";
import mysql from "../assets/icons/mysqlLogo.webp";
import MongoDB from "../assets/icons/MongoDbW.webp";
import sequalize from "../assets/icons/sequelizeLogo.webp";
import graphql from "../assets/icons/GraphQL-logo.webp";
import webpack from "../assets/icons/webpack2.webp";
import { Button } from "../components/Download";
import tempResume from "../assets/tempResume.pdf";
import styleComps from "../assets/icons/styled-logo.webp";

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
  {
    // id: 5,
    title: "Styled Components",
    logo: styleComps,
  },
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
];

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr;
  grid-template-rows: 4rem 20rem;
  grid-template-areas: "a b" "c d";
  column-gap: 10rem;
  align-items: start;
  padding: 3rem 1rem 0 1rem;
  justify-content: center;
`;

const Header1 = styled.h1`
  grid-area: a;
  align-self: center;
  justify-self: center;
  font-family: "Amatic SC", cursive;
  font-size: 3rem;
`;

const Header2 = styled.h1`
  grid-area: b;
  align-self: center;
  justify-self: center;
  font-family: "Amatic SC", cursive;
  font-size: 3rem;
`;

const Unordered = styled.ul`
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-evenly;
  margin: 0 auto;
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
  align-self: center;

  align-content: space-between;
  justify-content: space-between;
`;

const Logos = styled.img`
  height: 4em;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 6rem;
  padding-top: 4rem;
`;

const ButtonText = styled.p`
  font-family: "Amatic SC", cursive;
  text-decoration: none;
  color: white;
  font-size: 2rem;
`;

const Anchor = styled.a`
  text-decoration: none;
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
                <Logos key={i} src={frontEnd.logo} alt={frontEnd.title}></Logos>
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
      <ButtonContainer>
        <Button>
          <Anchor
            target="_blank"
            rel="noreferrer"
            href={tempResume}
            download={tempResume}
          >
            <ButtonText> Check out my Resume </ButtonText>
          </Anchor>
        </Button>
      </ButtonContainer>
    </>
  );
}
