import styled from "styled-components";
import cardbattle from "../assets/projectimages/Card-Battle-gif.gif";
import nonSocial from "../assets/projectimages/NonSocial-screenshot.jpg";
import WeatherWatcher from "../assets/projectimages/WeatherWatcher.jpg";
import inprogess from "../assets/projectimages/inprogress2.jpg";
import modernPilgrims from "../assets/projectimages/modernPilgrims-s.jpg"
import socials from "../assets/projectimages/social3.jpg";
import textedit from "../assets/projectimages/textedit2.jpg";

import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardStatWrapper,
  CardStats,
  LinkText,
  CardBodyText,
} from "./buildingPortfolio/PortfolioStyles";

import Tilt from "react-parallax-tilt";

const projects = [
  {
    id: 1,
    title: "Non Social Drinker",
    deployed: "https://jeromemn.github.io/nonsocial-drinker/",
    github: "https://github.com/Jeromemn/nonsocial-drinker",
    image: nonSocial,
    tech: "Server-side APIs, Modals, Client side storage ",
  },
  {
    id: 2,
    title: "Card Battle",
    deployed: "https://card-battle.herokuapp.com/",
    github: "https://github.com/Jeromemn/card-battle",
    image: cardbattle,
    tech: "Node.js, Express.js, RESTful API, Handlebars, MYSQL, Authentication, Environment variables, Tailwind",
  },
  {
    id: 3,
    title: "Modern Pilgrims",
    deployed: "https://modernpilgrims.herokuapp.com/",
    github: "https://github.com/Jeromemn/Modern-Pilgrim",
    image: modernPilgrims,
    tech: "MERN app, MongoDB, Mongoose, GraphQL API, Express.js, Node.js, React,Auth0, Styled Components, Cloudinary, Apollo ",
  },
];

const smallStuff = [
  {
    id: 10,
    title: "Weather Watcher",
    deployed: "https://jeromemn.github.io/weather-watcher/",
    github: "https://github.com/Jeromemn/weather-watcher",
    image: WeatherWatcher,
    tech: "Server-side APIs, Local storage, Dynamically updated HTML & CSS, ",
  },
  {
    id: 20,
    title: "Social club",
    // deployed: 'https://jeromemn.github.io/weather-watcher/',
    github: "https://github.com/Jeromemn/Social-club",
    image: socials,
    tech: "API created with NOSQL, MongoDB, Mongoose, Express.js",
  },
  {
    id: 22,
    title: "Text Editor",
    deployed: "https://pwathejateway.herokuapp.com/",
    github: "https://github.com/Jeromemn/Progressive-Web-App-TextEditor",
    image: textedit,
    tech: "Progressive Web App, IndexedDB, Webpack, Online/Offline function, Service Worker, Babel, WebpackPwaManifest",
  },
];

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  height: 560px;
  margin: 0 auto;
  font-family: "Amatic SC", cursive;
`;

const FullPage = styled.div`
  align-content: flex-start;
  height: fit-content;
  margin: 0 auto;
  display: grid;
  flex-direction: column;
  grid-template-columns: auto;
  grid-template-rows: 6rem 34rem 6rem 34rem;
  height: 80rem;
  justify-content: center;
  align-items: center;
`;

const HeaderTwo = styled.h2`
  margin: 0 auto;
  border-bottom: solid white 2px;
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 2rem;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
`;

function Card() {
  console.log();
  return (
    <FullPage>
      <HeaderTwo> Projects </HeaderTwo>
      <CardContainer>
        {projects.map((project, i) => (
          <Tilt key={i}>
            <CardWrapper key={i}>
              <CardImage
                background={project.image}
                className="images"
                alt={project.title}
                src={project.image}
              ></CardImage>

              <CardTextWrapper>
                <CardTextTitle> {project.title} </CardTextTitle>
                <CardBodyText> {project.tech} </CardBodyText>
              </CardTextWrapper>
              <CardStatWrapper>
                <CardStats>
                  <LinkText
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </LinkText>
                </CardStats>

                <CardStats>
                  <LinkText
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </LinkText>
                </CardStats>
              </CardStatWrapper>
            </CardWrapper>
          </Tilt>
        ))}
      </CardContainer>
      <HeaderTwo> Side gigs </HeaderTwo>
      <CardContainer>
        {smallStuff.map((smallStuff, i) => (
          <Tilt key={i}>
            <CardWrapper key={i}>
              <CardImage
                background={smallStuff.image}
                className="images"
                alt={smallStuff.title}
                src={smallStuff.image}
              ></CardImage>

              <CardTextWrapper>
                <CardTextTitle> {smallStuff.title} </CardTextTitle>
                <CardBodyText> {smallStuff.tech} </CardBodyText>
              </CardTextWrapper>
              <CardStatWrapper>
                <CardStats>
                  <LinkText
                    href={smallStuff.deployed}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </LinkText>
                </CardStats>

                <CardStats>
                  <LinkText
                    href={smallStuff.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </LinkText>
                </CardStats>
              </CardStatWrapper>
            </CardWrapper>
          </Tilt>
        ))}
      </CardContainer>
    </FullPage>
  );
}

export default Card;
